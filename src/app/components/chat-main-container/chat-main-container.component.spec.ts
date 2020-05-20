import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMainContainerComponent } from './chat-main-container.component';

describe('ChatMainContainerComponent', () => {
	let component: ChatMainContainerComponent;
	let fixture: ComponentFixture<ChatMainContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatMainContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatMainContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
