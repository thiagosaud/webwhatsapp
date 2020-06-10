import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// CONTAINERS COMPONENT'S
import { CoreContainerComponent } from './components/containers/core-container/core-container.component';
import { PanelContainerComponent } from './components/containers/panel-container/panel-container.component';
import { SearchMessagePanelContainerComponent } from './components/containers/search-message-panel-container/search-message-panel-container.component';
import { SendMessagePanelContainerComponent } from './components/containers/send-message-panel-container/send-message-panel-container.component';
import { UserPanelContainerComponent } from './components/containers/user-panel-container/user-panel-container.component';
import { UserIconPanelContainerComponent } from './components/containers/user-panel-container/user-icon-panel-container/user-icon-panel-container.component';

// FORMS COMPONENT'S
import { SearchMessageFormComponent } from './components/forms/search-message-form/search-message-form.component';
import { SendMessageFormComponent } from './components/forms/send-message-form/send-message-form.component';

// LISTS COMPONENT'S
import { ChatMessageListComponent } from './components/lists/chat-message-list/chat-message-list.component';
import { ChatMessageControllerComponent } from './components/lists/chat-message-list/chat-message-controller/chat-message-controller.component';
import { ChatMessageTextComponent } from './components/lists/chat-message-list/chat-message-text/chat-message-text.component';

import { ChatLastMessageListComponent } from './components/lists/chat-last-message-list/chat-last-message-list.component';
import { ChatLastMessagePrimaryControllerComponent } from './components/lists/chat-last-message-list/chat-last-message-primary-controller/chat-last-message-primary-controller.component';
import { ChatLastMessageSecondaryControllerComponent } from './components/lists/chat-last-message-list/chat-last-message-secondary-controller/chat-last-message-secondary-controller.component';
import { ChatLastMessageTextComponent } from './components/lists/chat-last-message-list/chat-last-message-primary-controller/chat-last-message-text/chat-last-message-text.component';

// TEXTS COMPONENT'S
import { UsernameComponent } from './components/texts/username/username.component';
import { TimeComponent } from './components/texts/time/time.component';

// UTILS COMPONENT'S
import { AvatarComponent } from './components/utils/avatar/avatar.component';
import { EllipseComponent } from './components/utils/ellipse/ellipse.component';
import { IconComponent } from './components/utils/icon/icon.component';
import { FormComponent } from './components/utils/form/form.component';
import { InputComponent } from './components/utils/input/input.component';
import { SpinnerComponent } from './components/utils/spinner/spinner.component';
import { ProgressBarComponent } from './components/utils/progress-bar/progress-bar.component';

const components = [
	CoreContainerComponent,
	ChatMessageListComponent,
	ChatMessageControllerComponent,
	ChatMessageTextComponent,
	ChatLastMessageListComponent,
	ChatLastMessagePrimaryControllerComponent,
	ChatLastMessageSecondaryControllerComponent,
	ChatLastMessageTextComponent,
	PanelContainerComponent,
	SearchMessagePanelContainerComponent,
	SendMessagePanelContainerComponent,
	UserPanelContainerComponent,
	UserIconPanelContainerComponent,
	SearchMessageFormComponent,
	SendMessageFormComponent,
	TimeComponent,
	UsernameComponent,
	AvatarComponent,
	EllipseComponent,
	IconComponent,
	FormComponent,
	InputComponent,
	SpinnerComponent,
	ProgressBarComponent,
];

@NgModule({
	declarations: [components],
	imports: [CommonModule, BrowserAnimationsModule, ReactiveFormsModule],
	exports: [components],
})
export class SharedModule {}
