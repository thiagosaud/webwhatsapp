import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-send-message-panel-container',
	template: `
		<app-panel-container [sizeTheme]="'LARGE'" [class]="'padding-1 border-solid-left-light bg-brown-light-2'">
			<app-icon [name]="'SMILEY'" [sizeTheme]="'LARGE'"></app-icon>

			<app-send-message-form [fmGroup]="form"></app-send-message-form>

			<app-icon *ngIf="!form.valid; else isFormValid" [name]="'MICROPHONE'"></app-icon>

			<ng-template #isFormValid>
				<app-icon (onclick)="sendMessage()" [name]="'ARROW_SEND'"></app-icon>
			</ng-template>
		</app-panel-container>
	`,
})
export class SendMessagePanelContainerComponent implements OnInit {
	@Output() send = new EventEmitter<FormGroup>();
	@Input() form = new FormGroup({
		message: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(103)]),
	});

	constructor() {}

	ngOnInit(): void {}

	sendMessage(): void {
		this.send.emit(this.form);
		this.form.get('message').setValue('');
	}
}
