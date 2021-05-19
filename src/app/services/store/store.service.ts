import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, combineLatest, timer } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';

// SERVICES
import { UserStoreService } from '@services/store/user-store.service';
import { ChatStoreService } from '@services/store/chat-store.service';

@Injectable({ providedIn: 'root' })
export class StoreService {
	isLoading$ = new BehaviorSubject<boolean>(true);

	constructor(protected readonly userStore: UserStoreService, protected readonly chatStore: ChatStoreService, protected readonly router: Router) {}

	restore(): void {
		this.userStore.restoreAll();
		this.chatStore.restoreAll();
	}

	create(): void {
		this.userStore.setAll();
		this.chatStore.setAll();
		this.setIsLoading$();
	}

	protected setIsLoading$(): void {
		timer(1000).subscribe(() => {
			combineLatest([this.userStore.loading$, this.chatStore.loading$])
				.pipe(
					filter(([userLoading, chatLoading]) => !userLoading && !chatLoading),
					takeWhile(([userLoading, chatLoading]) => !userLoading && !chatLoading)
				)
				.subscribe(() => this.isLoading$.next(false));
		});
	}
}
