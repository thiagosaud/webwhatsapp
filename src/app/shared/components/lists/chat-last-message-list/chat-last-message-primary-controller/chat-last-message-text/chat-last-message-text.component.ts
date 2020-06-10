import { Component, OnInit, Input } from '@angular/core';
import { IChatLastMessageTextTheme } from './chat-last-message-text.component.interface';

@Component({
	selector: 'app-chat-last-message-text',
	template: `
		<div>
			<span [attr.theme]="theme">{{ value }}</span>
		</div>
	`,
	styleUrls: ['./chat-last-message-text.component.scss'],
})
export class ChatLastMessageTextComponent implements OnInit {
	@Input() theme = IChatLastMessageTextTheme.DEFAULT;
	@Input() value: string;

	constructor() {}

	ngOnInit(): void {}
}
