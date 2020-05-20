import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-message-amount',
	templateUrl: './message-amount.component.html',
	styleUrls: ['./message-amount.component.scss'],
})
export class MessageAmountComponent implements OnInit {
	@Input() value: number | string;
	@Input() margin: string;

	constructor() {}

	ngOnInit(): void {
		if (this.value >= 9) {
			this.value += '+';
		}
	}
}
