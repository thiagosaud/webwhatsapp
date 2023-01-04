import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-loading-container',
	template: `
		<div class="loading-container">
			<app-spinner [activeRotateAnimation]="isLoading$ | async" [margin]="'0 0 5rem 0'"></app-spinner>
			<app-progress-bar [loading$]="isLoading$"></app-progress-bar>

			<div class="hyperlink-container">
				<span>© All rights reserved by</span>
				<a role="button" tabindex="0" href="https://github.com/thiagosaud/webwhatsapp">Thiago Saud</a>
			</div>
		</div>
	`,
	styleUrls: ['./loading-container.component.scss'],
})
export class LoadingContainerComponent implements OnInit {
	@Input() isLoading$: Observable<boolean>;

	constructor() {}

	ngOnInit(): void {}
}
