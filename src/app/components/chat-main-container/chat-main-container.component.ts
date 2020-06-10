import { Component, OnInit, Input } from '@angular/core';

// INTERFACES
import { IUser } from '@store/user/user.interface';
import { IChatMessage } from '@store/chat/chat.interface';

@Component({
	selector: 'app-chat-main-container',
	templateUrl: './chat-main-container.component.html',
})
export class ChatMainContainerComponent implements OnInit {
	@Input() userFriendSelected: IUser;
	@Input() chatMessagesList: IChatMessage[];

	constructor() {}

	ngOnInit(): void {}
}
