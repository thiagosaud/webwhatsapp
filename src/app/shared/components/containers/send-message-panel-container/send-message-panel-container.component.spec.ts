import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessagePanelContainerComponent } from './send-message-panel-container.component';

describe('SendMessagePanelContainerComponent', () => {
	let component: SendMessagePanelContainerComponent;
	let fixture: ComponentFixture<SendMessagePanelContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SendMessagePanelContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SendMessagePanelContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
