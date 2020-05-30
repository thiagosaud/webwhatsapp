import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

// INTERFACES
import { IEntityState, IChat } from './chat.interface';

// CONFIGS
import * as chatAction from './chat.actions';

export const adapter: EntityAdapter<IChat> = createEntityAdapter<IChat>({
	selectId: chat => chat.id,
});

const INITIAL_STATE: IEntityState = adapter.getInitialState({
	data: null,
	dataError: null,
	loading: false,
});

const stateTransition = createReducer(
	INITIAL_STATE,
	on(chatAction.GET, state => getStateDraft(state, state.data, state.dataError, true)),
	on(chatAction.GET_SUCCESS, (state, { chat }) => adapter.addMany(chat, getStateDraft(state, chat, state.dataError, false))),
	on(chatAction.GET_FAIL, chatAction.UPDATE_FAIL, (state, { error }) => getStateDraft(state, state.data, error, false)),
	on(chatAction.UPDATE, (state, { update }) => adapter.updateOne(update, getStateDraft(state, state.data, state.dataError, false))),
	on(chatAction.UPDATE_MANY, (state, { updates }) => adapter.updateMany(updates, getStateDraft(state, state.data, state.dataError, false)))
);

function getStateDraft(state: IEntityState, dt: IChat[] | null, dtError: any | null, ld: boolean) {
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
