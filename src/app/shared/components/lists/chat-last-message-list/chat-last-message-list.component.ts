import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// INTERFACES
import { IChatFriendLastMessagesList } from '@store/chat/chat.interface';
import { IUser } from '@store/user/user.interface';

@Component({
	selector: 'app-chat-last-message-list',
	template: ` <ul>
		<li *ngFor="let message of list; let i = index" (click)="onclick.emit({ userFriend: friendsList[i] })" [attr.isActived]="friendsList[i]?.isClicked">
			<app-avatar [sizeTheme]="'LARGE'" [src]="friendsList[i]?.avatar" [alt]="friendsList[i]?.full_name"></app-avatar>

			<app-chat-last-message-primary-controller
				[username]="friendsList[i]?.full_name"
				[lastMessage]="message?.text"
				[isNewLastMessage]="!!message?.total && !friendsList[i]?.isClicked"
			></app-chat-last-message-primary-controller>

			<app-chat-last-message-secondary-controller
				[messageTime]="message?.time"
				[lastMessageAmount]="message?.total"
				[isNewLastMessage]="!!message?.total && !friendsList[i]?.isClicked"
			></app-chat-last-message-secondary-controller>
		</li>
	</ul>`,
	styleUrls: ['./chat-last-message-list.component.scss'],
})
export class ChatLastMessageListComponent implements OnInit {
	@Output() onclick = new EventEmitter<{ userFriend: IUser }>();
	@Input() list: IChatFriendLastMessagesList[];
	@Input() friendsList: IUser[];

	constructor() {}

	ngOnInit(): void {}
}
