import { Component, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';
import { InputType, InputTheme } from './input.component.interface';

@Component({
	selector: 'app-input',
	template: `
		<ng-container [formGroup]="fmGroup">
			<input
				(click)="onclick.emit($event)"
				(blur)="onblur.emit($event)"
				[attr.theme]="theme"
				[ngStyle]="{
					padding: padding,
					fontSize: fontSize
				}"
				[formControlName]="fmControlName"
				[type]="type"
				[placeholder]="placeholder"
				[minlength]="minlength"
				[maxlength]="maxlength"
				[required]="required"
			/>
		</ng-container>
	`,
	styleUrls: ['./input.component.scss'],
})
export class InputComponent implements AfterContentInit {
	@Output() onclick = new EventEmitter<MouseEvent>();
	@Output() onblur = new EventEmitter<MouseEvent>();
	@Input() theme = InputTheme.ROUNDED_DEFAULT;
	@Input() class?: string;
	@Input() padding?: string;
	@Input() fontSize?: string;
	@Input() fmGroup: FormGroup;
	@Input() fmControlName: FormControlName;
	@Input() type = InputType.TEXT;
	@Input() placeholder = 'INSERT THE PLACEHOLDER';
	@Input() minlength = 0;
	@Input() maxlength = 524288;
	@Input() required = true;

	constructor() {}

	ngAfterContentInit(): void {
		this.checkTheme(this.theme);
		this.checkType(this.type.toUpperCase());
	}

	protected checkTheme(name: string): void {
		switch (InputTheme[name]) {
			case InputTheme.ROUNDED_DEFAULT:
				break;
			default:
				throw new Error(`The theme name: "${name}" entered does not exist in this component!`);
		}
	}

	protected checkType(type: string): void {
		switch (InputType[type]) {
			case InputType.BUTTON:
			case InputType.CHECKBOX:
			case InputType.COLOR:
			case InputType.DATE:
			case InputType.DATETIME_LOCAL:
			case InputType.EMAIL:
			case InputType.FILE:
			case InputType.HIDDEN:
			case InputType.IMAGE:
			case InputType.MONTH:
			case InputType.NUMBER:
			case InputType.PASSWORD:
			case InputType.RADIO:
			case InputType.RANGE:
			case InputType.RESET:
			case InputType.SEARCH:
			case InputType.SUBMIT:
			case InputType.TEL:
			case InputType.TEXT:
			case InputType.TIME:
			case InputType.URL:
			case InputType.WEEK:
				this.type = InputType[type];
				break;
			default:
				throw new Error(`The type theme: "${type}" entered does not exist in this component!`);
		}
	}
}
