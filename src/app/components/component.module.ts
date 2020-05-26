import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { SharedModule } from '@shared/shared.module';

// COMPONENTS
import { ChatAsideContainerComponent } from './chat-aside-container/chat-aside-container.component';
import { ChatMainContainerComponent } from './chat-main-container/chat-main-container.component';
import { LoadingContainerComponent } from './loading-container/loading-container.component';

const components = [ChatAsideContainerComponent, ChatMainContainerComponent, LoadingContainerComponent];

@NgModule({
	declarations: [components],
	imports: [CommonModule, SharedModule],
	exports: [components],
})
export class ComponentModule {}
