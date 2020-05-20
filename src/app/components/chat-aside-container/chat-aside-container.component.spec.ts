import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAsideContainerComponent } from './chat-aside-container.component';

describe('ChatAsideContainerComponent', () => {
	let component: ChatAsideContainerComponent;
	let fixture: ComponentFixture<ChatAsideContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChatAsideContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatAsideContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
