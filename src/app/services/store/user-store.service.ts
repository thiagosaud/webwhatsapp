import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

// INTERFACES
import IStoreState from '@store/store.interface';
import { IUser } from '@store/user/user.interface';

// STORE CONFIG'S
import * as action from '@store/user/user.actions';
import * as selector from '@store/user/user.selectors';

@Injectable({ providedIn: 'root' })
export class UserStoreService {
	constructor(protected readonly store: Store<IStoreState>) {}

	setAll(): void {
		this.store.dispatch(action.GET_ALL());
	}

	setUpdateMany(updates: Update<IUser>[]): void {
		this.store.dispatch(action.UPDATE_MANY({ updates }));
	}

	get loading$(): Observable<boolean> {
		return this.store.pipe(select(selector.isLoading));
	}

	get error$(): Observable<any> {
		return this.store.pipe(select(selector.error));
	}

	get main$(): Observable<IUser> {
		return this.store.pipe(select(selector.main));
	}

	get friends$(): Observable<IUser[]> {
		return this.store.pipe(select(selector.friends));
	}

	get friendSelected$(): Observable<IUser> {
		return this.store.pipe(select(selector.friendSelected));
	}

	getFriendById$(id: string): Observable<IUser> {
		return this.store.pipe(select(selector.friendById, { id }));
	}
}
