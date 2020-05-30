import { Component, OnInit, Input } from '@angular/core';

// INTERFACES
import { IChatMessage } from '@store/chat/chat.interface';

@Component({
	selector: 'app-chat-messages-list',
	templateUrl: './chat-messages-list.component.html',
	styleUrls: ['./chat-messages-list.component.scss'],
})
export class ChatMessagesListComponent implements OnInit {
	@Input() messages: IChatMessage[];

	constructor() {}

	ngOnInit(): void {}
}
