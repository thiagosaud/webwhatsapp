import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-loading-container',
	templateUrl: './loading-container.component.html',
	styleUrls: ['./loading-container.component.scss'],
})
export class LoadingContainerComponent implements OnInit {
	@Input() isLoading$: Observable<boolean>;

	constructor() {}

	ngOnInit(): void {}
}
