import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { of, forkJoin, Observable } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

// INTERFACES
import { IUser } from './user.interface';

// SERVICES
import { UserBackendService } from '@services/backend/user/user-backend.service';

// CONFIGS
import * as action from './user.actions';

@Injectable()
export class Effects {
	constructor(protected readonly action$: Actions, protected readonly backendService: UserBackendService) {}

	restoreAll$ = createEffect(() => {
		return this.action$.pipe(
			ofType(action.RESTORE_ALL),
			switchMap(() =>
				forkJoin([this.backendService.restoreAll()]).pipe(
					map(updates => action.RESTORE_ALL_SUCCESS({ updates })),
					catchError(error => of(action.RESTORE_ALL_FAIL({ error })))
				)
			)
		);
	});

	getAll$ = createEffect(() =>
		this.action$.pipe(
			ofType(action.GET_ALL),
			switchMap(() =>
				this.backendService.getAll().pipe(
					map(users => action.GET_ALL_SUCCESS({ users })),
					catchError(error => of(action.GET_ALL_FAIL({ error })))
				)
			)
		)
	);

	// update$ = createEffect(() =>
	// 	this.action$.pipe(
	// 		ofType(action.UPDATE),
	// 		switchMap(({ user }) =>
	// 			this.backendService.update(user).pipe(
	// 				map(() => action.UPDATE_SUCCESS({ user })),
	// 				catchError(error => of(action.UPDATE_FAIL({ error })))
	// 			)
	// 		)
	// 	)
	// );

	updateMany$ = createEffect(() =>
		this.action$.pipe(
			ofType(action.UPDATE_MANY),
			switchMap(({ updates }) =>
				forkJoin([...updates.map(user => this.backendService.update(user))]).pipe(
					map(() => action.UPDATE_MANY_SUCCESS({ updates })),
					catchError(error => of(action.UPDATE_MANY_FAIL({ error })))
				)
			)
		)
	);
}
