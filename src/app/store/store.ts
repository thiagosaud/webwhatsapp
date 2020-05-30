import { ActionReducerMap } from '@ngrx/store';

// INTERFACE
import IStoreState from './store.interface';

// USER STORE CONFIG'S
import { reducer as fromUserReducer } from '@store/user/user.reducer';
import { Effects as fromUserEffects } from '@store/user/user.effects';

// CHAT STORE CONFIG'S
import { reducer as fromChatReducer } from '@store/chat/chat.reducer';
import { Effects as fromChatEffects } from '@store/chat/chat.effects';

export const REDUCERS: ActionReducerMap<IStoreState> = {
	user: fromUserReducer,
	chat: fromChatReducer,
};

export const EFFECTS: any[] = [fromUserEffects, fromChatEffects];
