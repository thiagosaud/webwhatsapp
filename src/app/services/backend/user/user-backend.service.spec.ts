import { TestBed } from '@angular/core/testing';

import { UserBackendService } from './user-backend.service';

describe('UserBackendService', () => {
	let service: UserBackendService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(UserBackendService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
