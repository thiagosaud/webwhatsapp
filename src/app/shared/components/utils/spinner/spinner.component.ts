import { Component, OnInit, Input } from '@angular/core';
import { transition, style, animate, trigger, keyframes } from '@angular/animations';

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.component.html',
	styles: [
		`
			div {
				display: flex;

				svg {
					circle {
						stroke-linecap: round;
					}
				}
			}
		`,
	],
	animations: [
		trigger('rotate', [
			transition('* => *', [
				animate(
					'1500ms ease-in-out',
					keyframes([
						style({
							offset: 0,
							strokeDasharray: '1, 150',
							strokeDashoffset: 0,
						}),
						style({
							offset: 0.5,
							strokeDasharray: '90, 150',
							strokeDashoffset: -35,
						}),
						style({
							offset: 1,
							strokeDasharray: '90, 150',
							strokeDashoffset: -124,
						}),
						style({
							offset: 1,
							transform: 'rotate(360deg)',
						}),
					])
				),
			]),
		]),
	],
})
export class SpinnerComponent implements OnInit {
	@Input() height = '65px';
	@Input() width = '65px';
	@Input() margin: string;
	@Input() circleFill = 'none';
	@Input() circleStroke = '#acb9bf8f';
	@Input() circleStrokeWidth = '4';
	@Input() circleStrokeLinecap = 'round';

	constructor() {}

	ngOnInit(): void {}
}
