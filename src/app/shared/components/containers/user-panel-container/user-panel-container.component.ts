import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-user-panel-container',
	template: `
		<app-panel-container [class]="'border-solid-left-light'">
			<app-avatar [src]="userAvatar" [alt]="userAvatarAlt"></app-avatar>

			<app-username *ngIf="username" [hasFlex]="true" [class]="'margin-rl-1'" [value]="username"></app-username>

			<app-user-icon-panel-container [isUserMainController]="isUserMainPanel"></app-user-icon-panel-container>
		</app-panel-container>
	`,
})
export class UserPanelContainerComponent implements OnInit {
	@Input() isUserMainPanel: boolean;
	@Input() username?: string;
	@Input() userAvatar: string;
	@Input() userAvatarAlt: string;

	constructor() {}

	ngOnInit(): void {}
}
