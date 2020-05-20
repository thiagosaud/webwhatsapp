import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chat-messages-list',
	templateUrl: './chat-messages-list.component.html',
	styleUrls: ['./chat-messages-list.component.scss'],
})
export class ChatMessagesListComponent implements OnInit {
	@Input() isUserFriendMessage: boolean;

	constructor() {}

	ngOnInit(): void {}
}
