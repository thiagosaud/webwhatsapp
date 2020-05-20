import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-global-container',
	templateUrl: './global-container.component.html',
	styleUrls: ['./global-container.component.scss'],
})
export class GlobalContainerComponent implements OnInit {
	@Input() borderTop: string;
	@Input() borderBottom: string;
	@Input() borderLeft: string;
	@Input() borderRight: string;

	constructor() {}

	ngOnInit(): void {}
}
