import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chat-message-text',
	template: `
		<div>
			<span>{{ value }}</span>
		</div>
	`,
	styleUrls: ['./chat-message-text.component.scss'],
})
export class ChatMessageTextComponent implements OnInit {
	@Input() value: string;

	constructor() {}

	ngOnInit(): void {}
}
