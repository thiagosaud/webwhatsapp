import { Component, AfterContentInit, Input } from '@angular/core';
import { ITimeTheme } from './time.component.interface';

@Component({
	selector: 'app-time',
	template: `
		<div [style.transform]="transform">
			<span [attr.theme]="theme">{{ value | date: 'hh:mm' }}</span>
		</div>
	`,
	styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements AfterContentInit {
	@Input() theme = ITimeTheme.DEFAULT;
	@Input() value: Date;
	@Input() transform?: string;

	constructor() {}

	ngAfterContentInit(): void {
		this.checkTheme(this.theme);
	}

	protected checkTheme(name: string): void {
		switch (ITimeTheme[name]) {
			case ITimeTheme.DEFAULT:
			case ITimeTheme.BOLD:
				break;
			default:
				throw new Error(`The theme name: "${name}" entered does not exist in this component!`);
		}
	}
}
