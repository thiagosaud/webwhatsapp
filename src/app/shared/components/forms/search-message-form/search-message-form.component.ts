import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-message-form',
	templateUrl: './search-message-form.component.html',
	styleUrls: ['./search-message-form.component.scss'],
})
export class SearchMessageFormComponent implements OnInit {
	@Input() fmGroup: FormGroup;
	@Input() isClicked: boolean;

	get placeholder(): string {
		return this.isClicked ? '' : 'Search or start a new conversation';
	}

	constructor() {}

	ngOnInit(): void {}
}
