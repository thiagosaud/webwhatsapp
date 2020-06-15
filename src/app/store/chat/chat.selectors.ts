import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { v4 as uuidv4 } from 'uuid';

// INTERFACES AND CONFIG'S
import IStoreState from '@store/store.interface';
import { adapter } from './chat.reducer';
import { IEntityState, IChat, IChatFriendLastMessagesList } from './chat.interface';

const FEATURE_SELECTOR = createFeatureSelector<IEntityState>('chat');
const { selectAll } = adapter.getSelectors(FEATURE_SELECTOR);

export const chatMessagesById = createSelector(selectAll, (chatMessages: IChat[], { userId }) => {
	let index = 0;

	return chatMessages.map((chat, i) => {
		if (chat.id === userId) {
			index = i;
			return chat.messages;
		}
	})[index];
});

export const chatFriendLastMessagesList = createSelector(
	store => store,
	(store: IStoreState) => {
		const list: IChatFriendLastMessagesList[] = [];

		store.chat.data.forEach(chat => {
			const totalMessagesUnread = chatTotalFriendLastMessagesUnread(store, { userId: chat.id });
			const lastMessageUnread = chatFriendLastMessage(store, { userId: chat.id });

			list.push({
				...lastMessageUnread,
				total: totalMessagesUnread,
			});
		});

		return list;
	}
);

export const updateFriendLastMessagesList = createSelector(chatMessagesById, (chatMessages, { userId }: { userId: string }) => {
	const update: Update<IChat> = {
		id: userId,
		changes: {
			messages: [],
		},
	};

	chatMessages.forEach(msg => update.changes.messages.push({ ...msg, isRead: true }));

	return update;
});

export const updateSendMessage = createSelector(
	store => store,
	(store: IStoreState, { userId, message }: { userId: string; message: string }) => {
		const chatMessages = chatMessagesById(store, { userId });

		const date = new Date();
		const update: Update<IChat> = {
			id: userId,
			changes: {
				messages: [
					...chatMessages,
					{
						id: uuidv4(),
						text: message,
						time: `${date.getHours()}:${date.getMinutes()}`,
						isMain: true,
						isRead: false,
					},
				],
			},
		};

		return update;
	}
);

export const isLoading = createSelector(FEATURE_SELECTOR, ({ loading }) => loading);
export const error = createSelector(FEATURE_SELECTOR, ({ dataError }) => dataError);
export const chatFriendMessages = createSelector(chatMessagesById, chatMessages => chatMessages.filter(msg => !msg.isMain));
export const chatFriendMessagesUnread = createSelector(chatFriendMessages, chatMessages => chatMessages.filter(msg => !msg.isRead));
export const chatFriendLastMessage = createSelector(chatFriendMessages, chatMessages => chatMessages[chatMessages.length - 1]);
export const chatTotalFriendLastMessagesUnread = createSelector(chatFriendMessagesUnread, chatMessages => chatMessages.length);
