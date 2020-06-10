import { Component, AfterContentInit, Input } from '@angular/core';
import { ICoreSizeTheme } from './core-container.component.interface';

@Component({
	selector: 'app-core-container',
	template: `
		<div [attr.sizeTheme]="sizeTheme" [class]="class">
			<ng-content></ng-content>
		</div>
	`,
	styleUrls: ['./core-container.component.scss'],
})
export class CoreContainerComponent implements AfterContentInit {
	@Input() sizeTheme = ICoreSizeTheme.DEFAULT;
	@Input() class?: string;

	constructor() {}

	ngAfterContentInit(): void {
		this.checkSizeTheme(this.sizeTheme);
	}

	protected checkSizeTheme(name: string): void {
		switch (ICoreSizeTheme[name]) {
			case ICoreSizeTheme.DEFAULT:
			case ICoreSizeTheme.LARGE:
				break;
			default:
				throw new Error(`The size theme: "${name}" entered does not exist in this component!`);
		}
	}
}
