import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLastMessageSecondaryControllerComponent } from './chat-last-message-secondary-controller.component';

describe('ChatLastMessageSecondaryControllerComponent', () => {
	let component: ChatLastMessageSecondaryControllerComponent;
	let fixture: ComponentFixture<ChatLastMessageSecondaryControllerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatLastMessageSecondaryControllerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatLastMessageSecondaryControllerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
