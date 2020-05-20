import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	@Input() fmGroup: FormGroup;
	@Input() autocomplete: boolean;
	@Input() padding: string;

	constructor() {}

	ngOnInit(): void {}
}
