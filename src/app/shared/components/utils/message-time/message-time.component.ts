import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-message-time',
	templateUrl: './message-time.component.html',
	styleUrls: ['./message-time.component.scss'],
})
export class MessageTimeComponent implements OnInit {
	@Input() time: Date;

	constructor() {}

	ngOnInit(): void {}
}
