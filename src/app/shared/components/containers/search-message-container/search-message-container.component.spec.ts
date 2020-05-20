import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMessageContainerComponent } from './search-message-container.component';

describe('SearchMessageContainerComponent', () => {
	let component: SearchMessageContainerComponent;
	let fixture: ComponentFixture<SearchMessageContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchMessageContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchMessageContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
