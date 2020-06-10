import { Component, AfterContentInit, Input } from '@angular/core';
import { IAvatarSizeTheme, IAvatarBorderTheme } from './avatar.component.interface';

@Component({
	selector: 'app-avatar',
	template: `
		<div>
			<img [attr.sizeTheme]="sizeTheme" [attr.borderTheme]="borderTheme" [src]="src" [alt]="alt" />
		</div>
	`,
	styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements AfterContentInit {
	@Input() sizeTheme = IAvatarSizeTheme.DEFAULT;
	@Input() borderTheme = IAvatarBorderTheme.ROUNDED;
	@Input() src: string;
	@Input() alt?: string;

	constructor() {}

	ngAfterContentInit(): void {
		this.checkSizeTheme(this.sizeTheme);
		this.checkBorderTheme(this.borderTheme);
	}

	protected checkSizeTheme(name: string): void {
		switch (IAvatarSizeTheme[name]) {
			case IAvatarSizeTheme.DEFAULT:
			case IAvatarSizeTheme.LARGE:
				break;
			default:
				throw new Error(`The size theme: "${name}" entered does not exist in this component!`);
		}
	}

	protected checkBorderTheme(name: string): void {
		switch (IAvatarBorderTheme[name]) {
			case IAvatarBorderTheme.ROUNDED:
				break;
			default:
				throw new Error(`The size theme: "${name}" entered does not exist in this component!`);
		}
	}
}
