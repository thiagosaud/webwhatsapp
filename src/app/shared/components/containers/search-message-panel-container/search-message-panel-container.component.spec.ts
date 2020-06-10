import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMessagePanelContainerComponent } from './search-message-panel-container.component';

describe('SearchMessagePanelContainerComponent', () => {
	let component: SearchMessagePanelContainerComponent;
	let fixture: ComponentFixture<SearchMessagePanelContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchMessagePanelContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchMessagePanelContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
