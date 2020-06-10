import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-send-message-panel-container',
	template: `
		<app-panel-container [sizeTheme]="'LARGE'" [class]="'padding-1 border-solid-left-light bg-brown-light-2'">
			<app-icon [name]="'SMILEY'" [sizeTheme]="'LARGE'"></app-icon>

			<app-send-message-form [fmGroup]="sendMessageForm"></app-send-message-form>

			<app-icon *ngIf="!sendMessageForm.valid; else isFormValid" [name]="'MICROPHONE'"></app-icon>

			<ng-template #isFormValid>
				<app-icon [name]="'ARROW_SEND'"></app-icon>
			</ng-template>
		</app-panel-container>
	`,
})
export class SendMessagePanelContainerComponent implements OnInit {
	@Input() sendMessageForm = new FormGroup({
		message: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(103)]),
	});

	constructor() {}

	ngOnInit(): void {}
}
