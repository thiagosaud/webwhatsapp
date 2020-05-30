import { EntityState } from '@ngrx/entity';

export interface IEntityState extends EntityState<IUser> {
	data: IUser[] | null;
	dataError: any | null;
	loading: boolean;
}

export interface IUser {
	id: string;
	full_name: string;
	avatar: string;
	isMain: boolean;
	isClicked: boolean;
}
