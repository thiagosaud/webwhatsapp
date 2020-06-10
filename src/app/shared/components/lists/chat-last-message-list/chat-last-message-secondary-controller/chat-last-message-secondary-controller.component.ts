import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chat-last-message-secondary-controller',
	template: `
		<div>
			<app-time
				[theme]="isNewLastMessage ? 'BOLD' : 'DEFAULT'"
				[transform]="isNewLastMessage ? 'translateY(-.3rem)' : 'translateY(-.8rem)'"
				[value]="messageTime"
			></app-time>

			<app-ellipse
				*ngIf="isNewLastMessage"
				[padding]="lastMessageAmount <= 9 ? '0 0.1rem 0 0' : '0'"
				[value]="lastMessageAmount <= 9 ? lastMessageAmount : '9+'"
			></app-ellipse>
		</div>
	`,
	styleUrls: ['./chat-last-message-secondary-controller.component.scss'],
})
export class ChatLastMessageSecondaryControllerComponent implements OnInit {
	@Input() messageTime: Date;
	@Input() lastMessageAmount: number | string;
	@Input() isNewLastMessage: boolean;

	constructor() {}

	ngOnInit(): void {}
}
