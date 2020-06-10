import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLastMessageTextComponent } from './chat-last-message-text.component';

describe('ChatLastMessageTextComponent', () => {
	let component: ChatLastMessageTextComponent;
	let fixture: ComponentFixture<ChatLastMessageTextComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatLastMessageTextComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatLastMessageTextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
