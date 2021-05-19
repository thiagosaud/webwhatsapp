import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IChat } from './chat.interface';

export const GET = createAction('[GET/CHAT] Chat');
export const GET_SUCCESS = createAction('[GET/CHAT] The Chat have been successfully obtained', props<{ chat: IChat[] }>());
export const GET_FAIL = createAction('[GET/CHAT] Error getting Chat', props<{ error: any }>());

export const UPDATE = createAction('[UPDATE/CHAT] Chat', props<{ update: Update<IChat> }>());
export const UPDATE_SUCCESS = createAction('[UPDATE/CHAT] Chat has been updated successfully', props<{ update: Update<IChat> }>());
export const UPDATE_FAIL = createAction('[UPDATE/CHAT] Error updating the chat', props<{ error: any }>());

export const UPDATE_MANY = createAction('[UPDATE_MANY/CHAT] Chat', props<{ updates: Update<IChat>[] }>());
export const UPDATE_MANY_SUCCESS = createAction('[UPDATE_MANY/CHAT] Chat has been updated successfully', props<{ updates: Update<IChat>[] }>());
export const UPDATE_MANY_FAIL = createAction('[UPDATE_MANY/CHAT] Error updating the chat', props<{ error: any }>());
