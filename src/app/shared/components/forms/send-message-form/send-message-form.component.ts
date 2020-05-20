import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-send-message-form',
	templateUrl: './send-message-form.component.html',
	styleUrls: ['./send-message-form.component.scss'],
})
export class SendMessageFormComponent implements OnInit {
	@Input() fmGroup: FormGroup;

	constructor() {}

	ngOnInit(): void {}
}
