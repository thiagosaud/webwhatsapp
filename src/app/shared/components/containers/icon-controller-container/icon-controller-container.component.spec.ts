import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconControllerContainerComponent } from './icon-controller-container.component';

describe('IconControllerContainerComponent', () => {
	let component: IconControllerContainerComponent;
	let fixture: ComponentFixture<IconControllerContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IconControllerContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IconControllerContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
