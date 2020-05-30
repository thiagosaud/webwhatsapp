import { TestBed } from '@angular/core/testing';

import { ChatBackendService } from './chat-backend.service';

describe('ChatBackendService', () => {
	let service: ChatBackendService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ChatBackendService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
