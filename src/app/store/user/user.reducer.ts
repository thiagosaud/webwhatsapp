import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

// INTERFACES
import { IUser, IEntityState } from './user.interface';

// CONFIGS
import * as userAction from './user.actions';

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({
	selectId: user => user.id,
});

const INITIAL_STATE: IEntityState = adapter.getInitialState({
	data: null,
	dataError: null,
	loading: false,
});

const stateTransition = createReducer(
	INITIAL_STATE,
	on(userAction.GET_ALL, state => getStateDraft(state, state.data, state.dataError, true)),
	on(userAction.GET_ALL_SUCCESS, (state, { users }) => adapter.addMany(users, getStateDraft(state, users, state.dataError, false))),
	on(userAction.GET_ALL_FAIL, userAction.UPDATE_MANY_FAIL, (state, { error }) => getStateDraft(state, state.data, error, true)),
	on(userAction.UPDATE_MANY, (state, { updates }) => adapter.updateMany(updates, getStateDraft(state, state.data, state.dataError, false)))
);

function getStateDraft(state: IEntityState, dt: IUser[] | null, dtError: any | null, ld: boolean) {
	return {
		...state,
		data: dt,
		dataError: dtError,
		loading: ld,
	};
}

export function reducer(state: IEntityState | undefined, action: Action) {
	return stateTransition(state, action);
}
