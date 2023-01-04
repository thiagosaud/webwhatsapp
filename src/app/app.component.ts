import { Component, OnInit } from '@angular/core';

// SERVICES
import { StoreService } from '@services/store/store.service';
import { UserStoreService } from '@services/store/user-store.service';
import { ChatStoreService } from '@services/store/chat-store.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	isOpenUserFriendChat = true;

	constructor(readonly store: StoreService, readonly userStore: UserStoreService, readonly chatStore: ChatStoreService) {}

	ngOnInit(): void {
		this.store.create();
	}
}
