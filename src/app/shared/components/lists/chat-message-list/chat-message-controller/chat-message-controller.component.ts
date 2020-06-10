import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chat-message-controller',
	template: `
		<div>
			<app-time [transform]="'translateY(.2rem)'" [value]="messageTime"></app-time>

			<app-icon
				[name]="'DOUBLE_CHECK'"
				[containerClass]="'cursor-default'"
				[containerPadding]="'.35rem 0 0 .3rem'"
				[iconClass]="messageIsRead ? 'fill-grey-dark-2' : 'fill-blue-light-1'"
			></app-icon>
		</div>
	`,
	styleUrls: ['./chat-message-controller.component.scss'],
})
export class ChatMessageControllerComponent implements OnInit {
	@Input() messageTime: Date;
	@Input() messageIsRead: string;

	constructor() {}

	ngOnInit(): void {}
}
