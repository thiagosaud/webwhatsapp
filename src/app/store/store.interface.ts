// STORE ITENS INTERFACES
import { IEntityState as fromUserEntityState } from '@store/user/user.interface';
import { IEntityState as fromChatEntityState } from '@store/chat/chat.interface';

export default interface IStoreState {
	user: fromUserEntityState;
	chat: fromChatEntityState;
}
