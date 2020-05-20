import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-username',
	templateUrl: './username.component.html',
	styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {
	@Input() text: string;
	@Input() padding: string;

	constructor() {}

	ngOnInit(): void {}
}
