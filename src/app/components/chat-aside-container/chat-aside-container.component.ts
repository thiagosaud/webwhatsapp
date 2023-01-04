import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Update } from '@ngrx/entity';
import { BehaviorSubject, combineLatest } from 'rxjs';

// INTERFACES
import { IUser } from '@store/user/user.interface';
import { IChatFriendLastMessagesList, IChat } from '@store/chat/chat.interface';

// SERVICES
import { UserStoreService } from '@services/store/user-store.service';
import { ChatStoreService } from '@services/store/chat-store.service';

@Component({
	selector: 'app-chat-aside-container',
	templateUrl: './chat-aside-container.component.html',
})
export class ChatAsideContainerComponent implements OnInit {
	@Output() openUserFriendChat = new EventEmitter();
	@Input() userMain: IUser;
	@Input() userFriendSelected: IUser;
	@Input() lastMessagesList: IChatFriendLastMessagesList[];

	constructor(protected readonly userStore: UserStoreService, protected readonly chatStore: ChatStoreService) {}

	ngOnInit(): void {}

	updateStore(userFriend: IUser): void {
		if (!userFriend.isClicked) {
			this.updateChatUserFriend(userFriend, this.userFriendSelected);
			this.updateUserFriend(userFriend, this.userFriendSelected);
		}
	}

	handleOnOpenUserFriendChat({ userFriend }: { userFriend: IUser }): void {
		this.updateStore(userFriend);
		this.openUserFriendChat.emit();
	}

	protected updateUserFriend(userClicked: IUser, oldUserClicked: IUser): void {
		this.userStore.setUpdateMany([
			{ id: userClicked.id, changes: { isClicked: true } },
			{ id: oldUserClicked.id, changes: { isClicked: false } },
		]);
	}

	protected updateChatUserFriend(userClicked: IUser, oldUserClicked: IUser): void {
		const updates$ = new BehaviorSubject<Update<IChat>[]>(null);

		combineLatest([
			this.chatStore.getUpdateFriendLastMessagesListById$(userClicked.id),
			this.chatStore.getUpdateFriendLastMessagesListById$(oldUserClicked.id),
		]).subscribe(updates => updates$.next(updates));

		this.chatStore.setUpdateMany(updates$.getValue());
	}
}
