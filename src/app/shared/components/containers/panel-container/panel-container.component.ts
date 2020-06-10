import { Component, AfterContentInit, Input } from '@angular/core';
import { IPanelSizeTheme } from './panel-container.component.interface';

@Component({
	selector: 'app-panel-container',
	template: `
		<div [attr.sizeTheme]="sizeTheme" [class]="class">
			<ng-content></ng-content>
		</div>
	`,
	styleUrls: ['./panel-container.component.scss'],
})
export class PanelContainerComponent implements AfterContentInit {
	@Input() sizeTheme = IPanelSizeTheme.DEFAULT;
	@Input() class?: string;

	constructor() {}

	ngAfterContentInit(): void {
		this.checkSizeTheme(this.sizeTheme);
	}

	protected checkSizeTheme(name: string) {
		switch (IPanelSizeTheme[name]) {
			case IPanelSizeTheme.DEFAULT:
			case IPanelSizeTheme.SMALL:
			case IPanelSizeTheme.LARGE:
				break;
			default:
				throw new Error(`The size theme: "${name}" entered does not exist in this component!`);
		}
	}
}
