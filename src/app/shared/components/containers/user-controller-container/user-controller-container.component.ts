import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-user-controller-container',
	templateUrl: './user-controller-container.component.html',
	styleUrls: ['./user-controller-container.component.scss'],
})
export class UserControllerContainerComponent implements OnInit {
	@Input() userAvatar: string;
	@Input() userAvatarAlt: string;

	constructor() {}

	ngOnInit(): void {}
}
