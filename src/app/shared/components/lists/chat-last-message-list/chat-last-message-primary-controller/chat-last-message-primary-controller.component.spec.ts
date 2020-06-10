import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLastMessagePrimaryControllerComponent } from './chat-last-message-primary-controller.component';

describe('ChatLastMessagePrimaryControllerComponent', () => {
	let component: ChatLastMessagePrimaryControllerComponent;
	let fixture: ComponentFixture<ChatLastMessagePrimaryControllerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatLastMessagePrimaryControllerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatLastMessagePrimaryControllerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
