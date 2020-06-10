import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-message-form',
	template: `
		<app-form [fmGroup]="fmGroup" [autocomplete]="'off'">
			<app-input
				(onclick)="this.inputEvent.emit(true)"
				(onblur)="this.inputEvent.emit(fmGroup.valid)"
				[padding]="'0.6rem 4rem 0.6rem 4rem'"
				[fontSize]="'.9rem'"
				[fmGroup]="fmGroup"
				[fmControlName]="'message'"
				[minlength]="1"
				[maxlength]="36"
				[placeholder]="activePlaceholder ? '' : 'Search or start a new conversation'"
			>
			</app-input>
		</app-form>
	`,
})
export class SearchMessageFormComponent implements OnInit {
	@HostBinding('class') hostClass = 'd-flex-grow';
	@Output() inputEvent = new EventEmitter<boolean>();
	@Input() fmGroup: FormGroup;
	@Input() activePlaceholder: boolean;

	constructor() {}

	ngOnInit(): void {}
}
