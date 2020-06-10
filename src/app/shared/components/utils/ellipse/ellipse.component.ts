import { Component, AfterContentInit, Input } from '@angular/core';
import { IEllipseSizeTheme } from './ellipse.component.inteface';

@Component({
	selector: 'app-ellipse',
	template: '<span [attr.sizeTheme]="sizeTheme" [style.padding]="padding">{{ value }}</span>',
	styleUrls: ['./ellipse.component.scss'],
})
export class EllipseComponent implements AfterContentInit {
	@Input() value: any;
	@Input() padding?: string;
	@Input() sizeTheme = IEllipseSizeTheme.DEFAULT;

	constructor() {}

	ngAfterContentInit(): void {
		this.checkSizeTheme(this.sizeTheme);
	}

	protected checkSizeTheme(name: string): void {
		switch (IEllipseSizeTheme[name]) {
			case IEllipseSizeTheme.DEFAULT:
				break;
			default:
				throw new Error(`The size theme: "${name}" entered does not exist in this component!`);
		}
	}
}
