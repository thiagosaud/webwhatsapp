import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfriendLastMessagesInformationContainerComponent } from './userfriend-last-messages-information-container.component';

describe('UserfriendLastMessagesInformationContainerComponent', () => {
	let component: UserfriendLastMessagesInformationContainerComponent;
	let fixture: ComponentFixture<UserfriendLastMessagesInformationContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserfriendLastMessagesInformationContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserfriendLastMessagesInformationContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
