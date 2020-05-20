import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-last-message',
	templateUrl: './last-message.component.html',
	styleUrls: ['./last-message.component.scss'],
})
export class LastMessageComponent implements OnInit {
	@Input() isNewLastMessage: boolean;
	@Input() text: string;

	constructor() {}

	ngOnInit(): void {}
}
