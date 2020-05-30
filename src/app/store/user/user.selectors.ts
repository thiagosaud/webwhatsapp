import { createFeatureSelector, createSelector } from '@ngrx/store';

// INTERFACES
import { IEntityState, IUser } from './user.interface';

// CONFIG'S
import { adapter } from './user.reducer';

const FEATURE_SELECTOR = createFeatureSelector<IEntityState>('user');
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(FEATURE_SELECTOR);

export const isLoading = createSelector(FEATURE_SELECTOR, ({ loading }) => loading);
export const error = createSelector(FEATURE_SELECTOR, ({ dataError }) => dataError);
export const main = createSelector(selectAll, users => users.filter(user => user.isMain)[0]);
export const friends = createSelector(selectAll, users => users.filter(user => !user.isMain));
export const friendById = createSelector(friends, (users: IUser[], { id }: { id: string }) => users.filter(user => user.id === id)[0]);
export const friendSelected = createSelector(friends, users => users.filter(user => user.isClicked)[0]);
