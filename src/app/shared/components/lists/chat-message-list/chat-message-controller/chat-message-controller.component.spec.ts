import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageControllerComponent } from './chat-message-controller.component';

describe('ChatMessageControllerComponent', () => {
	let component: ChatMessageControllerComponent;
	let fixture: ComponentFixture<ChatMessageControllerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatMessageControllerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatMessageControllerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
