import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMessageFormComponent } from './search-message-form.component';

describe('SearchMessageFormComponent', () => {
	let component: SearchMessageFormComponent;
	let fixture: ComponentFixture<SearchMessageFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchMessageFormComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchMessageFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
