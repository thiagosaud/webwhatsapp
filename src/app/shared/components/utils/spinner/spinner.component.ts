import { Component, OnInit, Input } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';

// ANIMATIONS
import { rotateSpinner } from '@shared/animations/rotate.animations';

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
	animations: [trigger('rotateSpinner', [transition(':enter', [useAnimation(rotateSpinner)])])],
})
export class SpinnerComponent implements OnInit {
	@Input() height = '65px';
	@Input() width = '65px';
	@Input() margin: string;
	@Input() circleFill = 'none';
	@Input() circleStroke = 'var(--concrete-light-3)';
	@Input() circleStrokeWidth = '4';
	@Input() circleStrokeLinecap = 'round';

	constructor() {}

	ngOnInit(): void {}
}
