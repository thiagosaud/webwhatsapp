import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rotateSpinner } from '@shared/animations/rotate.animations';

@Component({
	selector: 'app-spinner',
	template: `
		<div [style.margin]="margin">
			<svg viewBox="0 0 44 44" [@rotate]="activeRotateAnimation" [class]="class">
				<circle
					cx="22"
					cy="22"
					r="20"
					[ngStyle]="{
						fill: circleFill ? circleFill : 'none',
						stroke: circleStroke ? circleStroke : 'none',
						strokeWidth: circleStrokeWidth ? circleStrokeWidth : '4'
					}"
				></circle>
			</svg>
		</div>
	`,
	animations: [trigger('rotate', [transition('void => true', [useAnimation(rotateSpinner)])])],
})
export class SpinnerComponent implements OnInit {
	@Input() activeRotateAnimation: boolean;
	@Input() class = 'h-4 w-4';
	@Input() margin: string;
	@Input() circleFill = 'none';
	@Input() circleStroke = 'var(--grey-light-3)';
	@Input() circleStrokeWidth = '4';
	@Input() circleStrokeLinecap = 'round';

	constructor() {}

	ngOnInit(): void {}
}
