import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Update } from '@ngrx/entity';

// INTERFACES
import { IUser } from '@store/user/user.interface';
import IStoreState from '@store/store.interface';

// CONFIG'S
import { adapter } from './chat.reducer';
import { IEntityState, IChat, IChatFriendLatestMessage } from './chat.interface';

const FEATURE_SELECTOR = createFeatureSelector<IEntityState>('chat');

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(FEATURE_SELECTOR);

export const messagesById = createSelector(selectAll, (chat: IChat[], { userId }: { userId: string }) => {
	let messageIndex = 0;

	return chat.map((props, index) => {
		if (props.id === userId) {
			messageIndex = index;
			return props.messages;
		} else {
			return [];
		}
	})[messageIndex];
});

export const isLoading = createSelector(FEATURE_SELECTOR, ({ loading }) => loading);
export const error = createSelector(FEATURE_SELECTOR, ({ dataError }) => dataError);
export const friendMessages = createSelector(messagesById, messages => messages.filter(msg => !msg.isMain));
export const friendLatestMessage = createSelector(friendMessages, messages => messages[messages.length - 1]);
export const friendLatestReadMessages = createSelector(friendMessages, messages => messages.filter(msg => msg.isRead));
export const friendLatestUnreadMessages = createSelector(friendMessages, messages => messages.filter(msg => !msg.isRead));
export const totalUnreadMessagesFriend = createSelector(friendLatestUnreadMessages, messages => messages.length);

export const friendLatestMessageList = createSelector(
	store => store,
	(store: IStoreState, { users }: { users: IUser[] }) => {
		const list: IChatFriendLatestMessage[] = [];

		users.map(userFriend => {
			const message = friendLatestMessage(store, { userId: userFriend.id });
			const totalMessages = totalUnreadMessagesFriend(store, { userId: userFriend.id });

			list.push({
				user: userFriend,
				informations: {
					latestMessage: message,
					isNewLastMessage: !userFriend.isClicked && totalMessages > 0,
					total: totalMessages,
				},
			});
		});

		return list;
	}
);

export const updateFriendLatestMessages = createSelector(
	friendLatestReadMessages,
	friendLatestUnreadMessages,
	(latestReadMessages, latestUnreadMessages, { userId }) => {
		const latestMessages: Update<IChat> = {
			id: userId,
			changes: {
				messages: [...latestReadMessages],
			},
		};

		latestUnreadMessages.forEach(msg => latestMessages.changes.messages.push({ ...msg, isRead: true }));

		return latestMessages;
	}
);
