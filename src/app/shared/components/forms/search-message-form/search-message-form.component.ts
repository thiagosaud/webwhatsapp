import { Component, OnInit, HostBinding, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-message-form',
	template: `
		<app-form [fmGroup]="fmGroup" [autocomplete]="'off'">
			<app-input
				(onclick)="this.onclick.emit($event)"
				(onblur)="this.onblur.emit($event)"
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
	@Output() onclick = new EventEmitter<ElementRef | boolean>();
	@Output() onblur = new EventEmitter<ElementRef | boolean>();
	@Input() fmGroup: FormGroup;
	@Input() activePlaceholder: boolean;

	constructor() {}

	ngOnInit(): void {}
}
