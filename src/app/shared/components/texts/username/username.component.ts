import { Component, AfterContentInit, HostBinding, Input } from '@angular/core';
import { IUsernameTheme } from './username.component.interface';

@Component({
	selector: 'app-username',
	template: `<span [attr.theme]="theme" [class]="class">{{ value }}</span>`,
	styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements AfterContentInit {
	@HostBinding('attr.hostActiveFlex') protected hostActiveFlex?: boolean;
	@Input() theme = IUsernameTheme.DEFAULT;
	@Input() hasFlex?: boolean;
	@Input() class?: string;
	@Input() value: string;

	constructor() {}

	ngAfterContentInit(): void {
		this.hostActiveFlex = this.hasFlex;
		this.checkTheme(this.theme);
	}

	protected checkTheme(name: string): void {
		switch (IUsernameTheme[name]) {
			case IUsernameTheme.DEFAULT:
			case IUsernameTheme.BOLD:
				break;
			default:
				throw new Error(`The theme name: "${name}" entered does not exist in this component!`);
		}
	}
}
