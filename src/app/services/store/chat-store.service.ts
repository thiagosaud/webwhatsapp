import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

// INTERFACES
import IStoreState from '@store/store.interface';
import { IChat, IChatMessage, IChatFriendLastMessagesList } from '@store/chat/chat.interface';
import { IUser } from '@store/user/user.interface';

// STORE CONFIG'S
import * as action from '@store/chat/chat.actions';
import * as selector from '@store/chat/chat.selectors';

@Injectable({ providedIn: 'root' })
export class ChatStoreService {
	constructor(protected readonly store: Store<IStoreState>) {}

	setAll(): void {
		this.store.dispatch(action.GET());
	}

	setUpdate(update: Update<IChat>): void {
		this.store.dispatch(action.UPDATE({ update }));
	}

	setUpdateMany(updates: Update<IChat>[]): void {
		this.store.dispatch(action.UPDATE_MANY({ updates }));
	}

	get loading$(): Observable<boolean> {
		return this.store.pipe(select(selector.isLoading));
	}

	get error$(): Observable<any> {
		return this.store.pipe(select(selector.error));
	}

	getFriendLastMessagesList$(users: IUser[]): Observable<IChatFriendLastMessagesList[]> {
		return this.store.pipe(select(selector.chatFriendLastMessagesList, { users }));
	}

	getChatMessagesById$(userId: string): Observable<IChatMessage[]> {
		return this.store.pipe(select(selector.chatMessagesById, { userId }));
	}

	getChatFriendMessagesById$(userId: string): Observable<IChatMessage[]> {
		return this.store.pipe(select(selector.chatFriendMessages, { userId }));
	}

	getChatFriendMessagesUnreadById$(userId: string): Observable<IChatMessage[]> {
		return this.store.pipe(select(selector.chatFriendMessagesUnread, { userId }));
	}

	getChatFriendLastMessageUnreadById$(userId: string): Observable<IChatMessage> {
		return this.store.pipe(select(selector.chatFriendLastMessage, { userId }));
	}

	getChatTotalFriendLastMessagesUnreadById$(userId: string): Observable<number> {
		return this.store.pipe(select(selector.chatTotalFriendLastMessagesUnread, { userId }));
	}

	getUpdateFriendLastMessagesListById$(userId: string): Observable<Update<IChat>> {
		return this.store.pipe(select(selector.updateFriendLastMessagesList, { userId }));
	}

	getUpdateSendMessageById$(userId: string, message: string): Observable<Update<IChat>> {
		return this.store.pipe(select(selector.updateSendMessage, { userId, message }));
	}
}
