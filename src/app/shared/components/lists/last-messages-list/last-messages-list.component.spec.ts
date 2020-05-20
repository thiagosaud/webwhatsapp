import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMessagesListComponent } from './last-messages-list.component';

describe('FriendsMessagesListComponent', () => {
	let component: LastMessagesListComponent;
	let fixture: ComponentFixture<LastMessagesListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LastMessagesListComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LastMessagesListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
