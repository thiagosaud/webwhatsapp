import { Component, OnInit, Input } from '@angular/core';
import { Update } from '@ngrx/entity';
import { BehaviorSubject, combineLatest } from 'rxjs';

// INTERFACES
import { IUser } from '@store/user/user.interface';
import { IChatFriendLatestMessage, IChat } from '@store/chat/chat.interface';

// SERVICES
import { UserStoreService } from '@services/store/user-store.service';
import { ChatStoreService } from '@services/store/chat-store.service';

@Component({
	selector: 'app-chat-aside-container',
	templateUrl: './chat-aside-container.component.html',
	styleUrls: ['./chat-aside-container.component.scss'],
})
export class ChatAsideContainerComponent implements OnInit {
	@Input() userMain: IUser;
	@Input() usersFriends: IUser[];
	@Input() userFriendSelected: IUser;
	@Input() latestMessageList: IChatFriendLatestMessage[];

	constructor(protected readonly userStore: UserStoreService, protected readonly chatStore: ChatStoreService) {}

	ngOnInit(): void {}

	updateStore(latestMessageList: IChatFriendLatestMessage): void {
		if (!latestMessageList.user.isClicked) {
			this.updateChatUserFriend(latestMessageList.user, this.userFriendSelected);
			this.updateUserFriend(latestMessageList.user, this.userFriendSelected);
		}
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
			this.chatStore.getUpdateFriendLatestMessages$(userClicked.id),
			this.chatStore.getUpdateFriendLatestMessages$(oldUserClicked.id),
		]).subscribe(data => updates$.next(data));

		this.chatStore.setUpdateMany(updates$.getValue());

		updates$.complete();
	}
}
