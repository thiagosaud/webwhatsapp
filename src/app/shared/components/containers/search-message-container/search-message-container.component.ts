import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { fromEvent, BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-search-message-container',
	templateUrl: './search-message-container.component.html',
	styleUrls: ['./search-message-container.component.scss'],
})
export class SearchMessageContainerComponent implements OnInit, AfterViewInit {
	@ViewChild('searchMessageFormComponent', { read: ElementRef }) searchMessageFormComponent: ElementRef;
	searchMessageForm: FormGroup;
	isClicked$ = new BehaviorSubject<boolean>(false);

	get isFormValid(): boolean {
		return this.searchMessageForm.get('message').valid;
	}

	constructor(protected readonly formBuilder: FormBuilder) {}

	ngAfterViewInit(): void {
		fromEvent(this.searchMessageFormComponent.nativeElement, 'click').subscribe(() => this.setIsClicked(true));
	}

	ngOnInit(): void {
		this.searchMessageForm = this.formBuilder.group({
			message: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(36)]],
		});
	}

	protected setIsClicked(condition: boolean): void {
		this.isClicked$.next(condition);
		this.isClicked$.complete();
	}

	setBackStyleConfig(): void {
		this.setIsClicked(false);
		this.clearInput();
	}

	clearInput(): void {
		this.searchMessageForm.get('message').reset();
	}
}
