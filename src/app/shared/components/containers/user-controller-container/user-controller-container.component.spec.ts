import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControllerContainerComponent } from './user-controller-container.component';

describe('UserControllerContainerComponent', () => {
	let component: UserControllerContainerComponent;
	let fixture: ComponentFixture<UserControllerContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserControllerContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserControllerContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
