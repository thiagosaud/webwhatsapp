import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAmountComponent } from './message-amount.component';

describe('MessageAmountComponent', () => {
	let component: MessageAmountComponent;
	let fixture: ComponentFixture<MessageAmountComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MessageAmountComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MessageAmountComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
