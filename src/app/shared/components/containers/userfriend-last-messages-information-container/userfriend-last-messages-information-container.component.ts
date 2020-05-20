import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-userfriend-last-messages-information-container',
	templateUrl: './userfriend-last-messages-information-container.component.html',
	styleUrls: ['./userfriend-last-messages-information-container.component.scss'],
})
export class UserfriendLastMessagesInformationContainerComponent implements OnInit {
	@Input() isNewLastMessage: boolean;
	@Input() lastMessageTime: Date;
	@Input() lastMessageAmount: number | string;

	constructor() {}

	ngOnInit(): void {}
}
