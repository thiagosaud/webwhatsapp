import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageContainerComponent } from './send-message-container.component';

describe('SendMessageContainerComponent', () => {
	let component: SendMessageContainerComponent;
	let fixture: ComponentFixture<SendMessageContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SendMessageContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SendMessageContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
