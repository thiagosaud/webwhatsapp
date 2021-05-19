import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

// INTERFACES
import { IUser } from './user.interface';

export const RESTORE_ALL = createAction('[RESTORE] Persist Users in the database');
export const RESTORE_ALL_SUCCESS = createAction('[RESTORE] The Users has been successfully persisted in the database!', props<{ updates: Update<IUser>[] }>());
export const RESTORE_ALL_FAIL = createAction('[RESTORE] Error in Users persistence in the database', props<{ error: any }>());

export const GET_ALL = createAction('[GET] All Users');
export const GET_ALL_SUCCESS = createAction('[GET] All users have been successfully obtained', props<{ users: IUser[] }>());
export const GET_ALL_FAIL = createAction('[GET] Error getting all users', props<{ error: any }>());

// export const UPDATE = createAction('[PATCH] User', props<{ user: Update<IUser> }>());
// export const UPDATE_SUCCESS = createAction('[PATCH] User has been updated successfully', props<{ user: Update<IUser> }>());
// export const UPDATE_FAIL = createAction('[PATCH] Error updating the user', props<{ error: any }>());

export const UPDATE_MANY = createAction('[PATCH] User', props<{ updates: Update<IUser>[] }>());
export const UPDATE_MANY_SUCCESS = createAction('[PATCH] User has been updated successfully', props<{ updates: Update<IUser>[] }>());
export const UPDATE_MANY_FAIL = createAction('[PATCH] Error updating the user', props<{ error: any }>());
