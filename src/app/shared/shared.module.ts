import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

// CONTAINERS COMPONENTS
import { ChatBalloonContainerComponent } from './components/containers/chat-balloon-container/chat-balloon-container.component';
import { ChatBalloonInformationContainerComponent } from './components/containers/chat-balloon-information-container/chat-balloon-information-container.component';
import { GlobalContainerComponent } from './components/containers/global-container/global-container.component';
import { IconControllerContainerComponent } from './components/containers/icon-controller-container/icon-controller-container.component';
import { SearchMessageContainerComponent } from './components/containers/search-message-container/search-message-container.component';
import { SendMessageContainerComponent } from './components/containers/send-message-container/send-message-container.component';
import { UserControllerContainerComponent } from './components/containers/user-controller-container/user-controller-container.component';
import { UserfriendControllerContainerComponent } from './components/containers/userfriend-controller-container/userfriend-controller-container.component';
import { UserfriendLastMessagesContainerComponent } from './components/containers/userfriend-last-messages-container/userfriend-last-messages-container.component';
import { UserfriendLastMessagesInformationContainerComponent } from './components/containers/userfriend-last-messages-information-container/userfriend-last-messages-information-container.component';

// FORMS COMPONENTS
import { SendMessageFormComponent } from './components/forms/send-message-form/send-message-form.component';
import { SearchMessageFormComponent } from './components/forms/search-message-form/search-message-form.component';

// LISTS COMPONENTS
import { ChatMessagesListComponent } from './components/lists/chat-messages-list/chat-messages-list.component';
import { LastMessagesListComponent } from './components/lists/last-messages-list/last-messages-list.component';

// UTILS COMPONENTS
import { AvatarComponent } from './components/utils/avatar/avatar.component';
import { ChatMessageComponent } from './components/utils/chat-message/chat-message.component';
import { FormComponent } from './components/utils/form/form.component';
import { IconComponent } from './components/utils/icon/icon.component';
import { InputComponent } from './components/utils/input/input.component';
import { MessageAmountComponent } from './components/utils/message-amount/message-amount.component';
import { MessageTimeComponent } from './components/utils/message-time/message-time.component';
import { LastMessageComponent } from './components/utils/last-message/last-message.component';
import { UsernameComponent } from './components/utils/username/username.component';

const components = [
	AvatarComponent,
	ChatMessageComponent,
	FormComponent,
	IconComponent,
	ChatBalloonContainerComponent,
	ChatBalloonInformationContainerComponent,
	GlobalContainerComponent,
	IconControllerContainerComponent,
	SearchMessageContainerComponent,
	SendMessageContainerComponent,
	UserControllerContainerComponent,
	UserfriendControllerContainerComponent,
	UserfriendLastMessagesContainerComponent,
	UserfriendLastMessagesInformationContainerComponent,
	SendMessageFormComponent,
	SearchMessageFormComponent,
	ChatMessagesListComponent,
	LastMessagesListComponent,
	InputComponent,
	LastMessageComponent,
	MessageAmountComponent,
	MessageTimeComponent,
	UsernameComponent,
];

@NgModule({
	declarations: [components],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [components],
})
export class SharedModule {}
