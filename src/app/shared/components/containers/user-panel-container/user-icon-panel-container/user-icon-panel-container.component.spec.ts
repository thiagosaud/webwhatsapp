import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIconPanelContainerComponent } from './user-icon-panel-container.component';

describe('UserIconPanelContainerComponent', () => {
	let component: UserIconPanelContainerComponent;
	let fixture: ComponentFixture<UserIconPanelContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserIconPanelContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserIconPanelContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
