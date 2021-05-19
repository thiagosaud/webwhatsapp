import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, forkJoin } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';

// SERVICES
import { ChatBackendService } from '@services/backend/chat/chat-backend.service';

// CONFIGS
import * as action from './chat.actions';

@Injectable()
export class Effects {
	constructor(protected readonly action$: Actions, protected readonly backendService: ChatBackendService) {}

	getAll$ = createEffect(() =>
		this.action$.pipe(
			ofType(action.GET),
			mergeMap(() =>
				this.backendService.get().pipe(
					map(chat => action.GET_SUCCESS({ chat })),
					catchError(error => of(action.GET_FAIL({ error })))
				)
			)
		)
	);

	update$ = createEffect(() =>
		this.action$.pipe(
			ofType(action.UPDATE),
			switchMap(({ update }) =>
				this.backendService.update(update).pipe(
					map(() => action.UPDATE_SUCCESS({ update })),
					catchError(error => of(action.UPDATE_FAIL({ error })))
				)
			)
		)
	);

	updateMany$ = createEffect(() =>
		this.action$.pipe(
			ofType(action.UPDATE_MANY),
			switchMap(({ updates }) =>
				forkJoin([...updates.map(chat => this.backendService.update(chat))]).pipe(
					map(() => action.UPDATE_MANY_SUCCESS({ updates })),
					catchError(error => of(action.UPDATE_MANY_FAIL({ error })))
				)
			)
		)
	);
}
