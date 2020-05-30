import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-userfriend-controller-container',
	templateUrl: './userfriend-controller-container.component.html',
	styleUrls: ['./userfriend-controller-container.component.scss'],
})
export class UserfriendControllerContainerComponent implements OnInit {
	@Input() avatar: string;
	@Input() avatarAlt: string;
	@Input() username: string;

	constructor() {}

	ngOnInit(): void {}
}
