import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// INTERFACES
import { IChatFriendLatestMessage } from '@store/chat/chat.interface';

@Component({
	selector: 'app-last-messages-list',
	templateUrl: './last-messages-list.component.html',
	styleUrls: ['./last-messages-list.component.scss'],
})
export class LastMessagesListComponent implements OnInit {
	@Output() onclick = new EventEmitter<IChatFriendLatestMessage>();
	@Input() latestMessageList: IChatFriendLatestMessage[];

	constructor() {}

	ngOnInit(): void {}
}
