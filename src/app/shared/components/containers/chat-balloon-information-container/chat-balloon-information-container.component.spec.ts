import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBalloonInformationContainerComponent } from './chat-balloon-information-container.component';

describe('ChatBalloonInformationContainerComponent', () => {
	let component: ChatBalloonInformationContainerComponent;
	let fixture: ComponentFixture<ChatBalloonInformationContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatBalloonInformationContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatBalloonInformationContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
