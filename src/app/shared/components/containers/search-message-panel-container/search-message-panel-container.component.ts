import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-search-message-panel-container',
	templateUrl: './search-message-panel-container.component.html',
})
export class SearchMessagePanelContainerComponent implements OnInit, DoCheck {
	@Input() searchMessageForm: FormGroup;
	isClicked = false;

	constructor() {}

	ngDoCheck(): void {
		if (!this.isClicked) {
			this.removeValue();
		}
	}

	ngOnInit(): void {
		this.searchMessageForm = new FormGroup({
			message: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(103)]),
		});
	}

	setIsClicked(isClicked: boolean): void {
		this.isClicked = isClicked;
	}

	removeValue(): void {
		this.searchMessageForm.setValue({ message: '' });
	}
}
