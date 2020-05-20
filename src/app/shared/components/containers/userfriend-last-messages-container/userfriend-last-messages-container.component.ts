import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-userfriend-last-messages-container',
	templateUrl: './userfriend-last-messages-container.component.html',
	styleUrls: ['./userfriend-last-messages-container.component.scss'],
})
export class UserfriendLastMessagesContainerComponent implements OnInit {
	@Input() username: string;
	@Input() lastmessage: string;
	@Input() isNewLastMessage: string;

	constructor() {}

	ngOnInit(): void {}
}
