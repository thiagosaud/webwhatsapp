import { animation, animate, keyframes, style } from '@angular/animations';

export const rotateCubic80Deg = animation([
	animate(
		'0.2s cubic-bezier(0.4, 0, 0.2, 1)',
		keyframes([
			style({
				offset: 0,
				transform: 'rotate(-80deg)',
			}),
			style({
				offset: 1,
				transform: 'rotate(0)',
				opacity: 1,
			}),
		])
	),
]);

export const rotateSpinner = animation([
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
				transform: 'rotate(360deg)',
				strokeDasharray: '90, 150',
				strokeDashoffset: -124,
			}),
		])
	),
]);
