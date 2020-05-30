import { EntityState } from '@ngrx/entity';

// INTERFACES
import { IUser } from '@store/user/user.interface';

export interface IEntityState extends EntityState<IChat> {
	data: IChat[] | null;
	dataError: any;
	loading: boolean;
}

export interface IChat {
	id: string;
	messages: IChatMessage[] | null;
}

export interface IChatMessage {
	id: string;
	text: string;
	time: Date;
	isMain: boolean;
	isRead: boolean;
}

export interface IChatFriendLatestMessage {
	user: IUser;
	informations: {
		latestMessage: IChatMessage;
		isNewLastMessage: boolean;
		total: number;
	};
}
