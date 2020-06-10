import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chat-last-message-primary-controller',
	template: `
		<div>
			<app-username [theme]="isNewLastMessage ? 'BOLD' : 'DEFAULT'" [value]="username"></app-username>

			<app-chat-last-message-text [theme]="isNewLastMessage ? 'BOLD' : 'DEFAULT'" [value]="lastMessage"></app-chat-last-message-text>
		</div>
	`,
	styleUrls: ['./chat-last-message-primary-controller.component.scss'],
})
export class ChatLastMessagePrimaryControllerComponent implements OnInit {
	@Input() username: string;
	@Input() lastMessage: string;
	@Input() isNewLastMessage: boolean;

	constructor() {}

	ngOnInit(): void {}
}
