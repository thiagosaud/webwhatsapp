import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBalloonContainerComponent } from './chat-balloon-container.component';

describe('ChatBalloonContainerComponent', () => {
	let component: ChatBalloonContainerComponent;
	let fixture: ComponentFixture<ChatBalloonContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatBalloonContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatBalloonContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
