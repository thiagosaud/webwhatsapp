import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-user-icon-panel-container',
	template: `
		<div>
			<ng-container *ngIf="isUserMainController; else isUserFriendController">
				<app-icon [name]="'STATUS'"></app-icon>
				<app-icon [name]="'CHAT'"></app-icon>
				<app-icon [name]="'MORE_OPTIONS'"></app-icon>
			</ng-container>

			<ng-template #isUserFriendController>
				<app-icon [name]="'MAGNIFYING_GLASS'"></app-icon>
				<app-icon [name]="'CLIP'"></app-icon>
				<app-icon [name]="'MORE_OPTIONS'"></app-icon>
			</ng-template>
		</div>
	`,
	styleUrls: ['./user-icon-panel-container.component.scss'],
})
export class UserIconPanelContainerComponent implements OnInit {
	@Input() isUserMainController: boolean;

	constructor() {}

	ngOnInit(): void {}
}
