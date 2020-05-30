import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chat-balloon-container',
	templateUrl: './chat-balloon-container.component.html',
	styleUrls: ['./chat-balloon-container.component.scss'],
})
export class ChatBalloonContainerComponent implements OnInit {
	@Input() isUserFriendMessage: boolean;
	@Input() messageText: string;
	@Input() messageTime: Date;

	constructor() {}

	ngOnInit(): void {}
}
