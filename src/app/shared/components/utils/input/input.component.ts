import { Component, OnInit, Input } from '@angular/core';
import { FormControlName, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
	@Input() fmGroup: FormGroup;
	@Input() fmControlName: FormControlName;
	@Input() style: string;
	@Input() type: string;
	@Input() placeholder: string;
	@Input() alt: string;
	@Input() value: string;
	@Input() minlength: number;
	@Input() maxlength: number;
	@Input() readonly: string;
	@Input() required: string;

	constructor() {}

	ngOnInit(): void {}
}
