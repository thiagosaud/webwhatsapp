import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
	selector: 'app-search-message-container',
	templateUrl: './search-message-container.component.html',
	styleUrls: ['./search-message-container.component.scss'],
})
export class SearchMessageContainerComponent implements OnInit, AfterViewInit {
	@ViewChild('searchMessageFormComponent', { read: ElementRef }) searchMessageFormComponent: ElementRef;
	searchMessageForm: FormGroup;
	isClicked = false;

	get isFormValid(): boolean {
		return this.searchMessageForm.get('message').valid;
	}

	constructor(protected formBuilder: FormBuilder) {
		this.searchMessageForm = this.formBuilder.group({
			message: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(36)]],
		});
	}

	ngAfterViewInit(): void {
		fromEvent(this.searchMessageFormComponent.nativeElement, 'click').subscribe(() => this.setStyle(true));
	}

	ngOnInit(): void {}

	protected setStyle(condition: boolean): void {
		this.isClicked = condition;
	}

	setBackConfig(): void {
		this.setStyle(false);
		this.clearInput();
	}

	clearInput(): void {
		this.searchMessageForm.get('message').reset();
	}
}
