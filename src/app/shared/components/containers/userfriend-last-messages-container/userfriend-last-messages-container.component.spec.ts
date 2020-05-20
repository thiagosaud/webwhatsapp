import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfriendLastMessagesContainerComponent } from './userfriend-last-messages-container.component';

describe('UserfriendLastMessagesContainerComponent', () => {
	let component: UserfriendLastMessagesContainerComponent;
	let fixture: ComponentFixture<UserfriendLastMessagesContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserfriendLastMessagesContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserfriendLastMessagesContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
