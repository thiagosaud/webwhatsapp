import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-form',
	template: `
		<form [formGroup]="fmGroup" [attr.autocomplete]="autocomplete" novalidate>
			<ng-content></ng-content>
		</form>
	`,
})
export class FormComponent implements OnInit {
	@Input() fmGroup: FormGroup;
	@Input() autocomplete?: boolean;

	constructor() {}

	ngOnInit(): void {}
}
