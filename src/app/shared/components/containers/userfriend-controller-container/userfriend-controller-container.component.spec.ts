import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfriendControllerContainerComponent } from './userfriend-controller-container.component';

describe('UserfriendControllerContainerComponent', () => {
	let component: UserfriendControllerContainerComponent;
	let fixture: ComponentFixture<UserfriendControllerContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserfriendControllerContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserfriendControllerContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
