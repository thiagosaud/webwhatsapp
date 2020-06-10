import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLastMessageListComponent } from './chat-last-message-list.component';

describe('FriendsMessagesListComponent', () => {
	let component: ChatLastMessageListComponent;
	let fixture: ComponentFixture<ChatLastMessageListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatLastMessageListComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatLastMessageListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
