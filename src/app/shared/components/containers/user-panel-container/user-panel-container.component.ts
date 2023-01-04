import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-user-panel-container',
	template: `
		<app-panel-container [class]="'position-fixed-only-table-extra-large top-0 z-index-1 w-fill border-solid-left-light'">
			<app-icon
				*ngIf="!isUserMainPanel"
				(onclick)="closeChat.emit()"
				[name]="'ARROW_BACK'"
				[containerClass]="'d-none-only-desktop'"
				[containerPadding]="'0 1rem 0 0'"
			></app-icon>

			<app-avatar [src]="userAvatar" [alt]="userAvatarAlt"></app-avatar>

			<app-username *ngIf="username" [hasFlex]="true" [class]="'margin-rl-1'" [value]="username"></app-username>

			<app-user-icon-panel-container [isUserMainController]="isUserMainPanel"></app-user-icon-panel-container>
		</app-panel-container>
	`,
})
export class UserPanelContainerComponent implements OnInit {
	@Output() closeChat = new EventEmitter();
	@Input() isUserMainPanel: boolean;
	@Input() username?: string;
	@Input() userAvatar: string;
	@Input() userAvatarAlt: string;

	constructor() {}

	ngOnInit(): void {}
}
