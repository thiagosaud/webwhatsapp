import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chat-balloon-information-container',
	templateUrl: './chat-balloon-information-container.component.html',
	styleUrls: ['./chat-balloon-information-container.component.scss'],
})
export class ChatBalloonInformationContainerComponent implements OnInit {
	@Input() messageTime: Date;

	constructor() {}

	ngOnInit(): void {}
}
