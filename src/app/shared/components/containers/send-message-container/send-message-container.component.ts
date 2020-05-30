import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-send-message-container',
	templateUrl: './send-message-container.component.html',
	styleUrls: ['./send-message-container.component.scss'],
})
export class SendMessageContainerComponent implements OnInit {
	sendMessageForm: FormGroup;

	get isFormValid(): boolean {
		return this.sendMessageForm.get('message').valid;
	}

	constructor(protected formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.sendMessageForm = this.formBuilder.group({
			message: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(105)]],
		});
	}
}
