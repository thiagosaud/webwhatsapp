import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-send-message-form',
	template: `
		<app-form [fmGroup]="fmGroup" [autocomplete]="'off'">
			<app-input
				[padding]="'0.8rem 1rem'"
				[fmGroup]="fmGroup"
				[fmControlName]="'message'"
				[minlength]="1"
				[maxlength]="103"
				[placeholder]="'Type a message'"
			></app-input>
		</app-form>
	`,
})
export class SendMessageFormComponent implements OnInit {
	@HostBinding('class') hostClass = 'd-flex-grow';
	@Input() fmGroup: FormGroup;

	constructor() {}

	ngOnInit(): void {}
}
