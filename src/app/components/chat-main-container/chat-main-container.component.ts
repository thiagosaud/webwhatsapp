import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

// INTERFACES AND SERVICES
import { IUser } from '@store/user/user.interface';
import { IChatMessage } from '@store/chat/chat.interface';
import { ChatStoreService } from '@services/store/chat-store.service';

@Component({
	selector: 'app-chat-main-container',
	templateUrl: './chat-main-container.component.html',
})
export class ChatMainContainerComponent implements OnInit {
	@Output() closeUserFriendChat = new EventEmitter();
	@Input() isOpened = true;
	@Input() userFriendSelected: IUser;
	@Input() chatMessagesList: IChatMessage[];

	constructor(protected readonly chatStore: ChatStoreService) {}

	ngOnInit(): void {}

	handleOnCloseUserFriendChat(): void {
		this.isOpened = false;
		this.closeUserFriendChat.emit();
	}

	sendMessage(formGroup: FormGroup): void {
		if (formGroup.valid) {
			const update$ = new BehaviorSubject(null);

			this.chatStore.getUpdateSendMessageById$(this.userFriendSelected.id, formGroup.value.message).subscribe(data => update$.next(data));

			this.chatStore.setUpdate(update$.getValue());
		}
	}
}
