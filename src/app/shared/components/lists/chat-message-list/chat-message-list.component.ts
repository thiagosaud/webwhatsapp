import { Component, OnInit, Input } from '@angular/core';
import { IChatMessage } from '@store/chat/chat.interface';

@Component({
	selector: 'app-chat-message-list',
	template: `
		<ul>
			<li *ngFor="let message of list" [attr.theme]="message.isMain ? 'USER_MAIN' : 'USER_FRIEND'">
				<app-chat-message-text [value]="message?.text"></app-chat-message-text>

				<app-chat-message-controller [messageTime]="message?.time"></app-chat-message-controller>
			</li>
		</ul>
	`,
	styleUrls: ['./chat-message-list.component.scss'],
})
export class ChatMessageListComponent implements OnInit {
	@Input() list: IChatMessage[];

	constructor() {}

	ngOnInit(): void {}
}
