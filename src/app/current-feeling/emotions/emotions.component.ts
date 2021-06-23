import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Emotion } from 'src/app/models/Emotion';
import { EmotionCategory } from 'src/app/models/EmotionCategory';
import { EmotionService } from 'src/app/services/emotion.service';

@Component({
	selector: 'app-emotions',
	templateUrl: './emotions.component.html',
	styleUrls: ['./emotions.component.css'],
	// Animation
	animations: [
		// the fade-in/fade-out animation.
		trigger('fadeAnimation', [
			// the "in" style determines the "resting" state of the element when it is visible.
			state('in', style({ opacity: 1 })),

			// fade in when created. this could also be written as transition('void => *')
			transition(':enter', [
				style({ opacity: 0 }),
				animate('0.5s 0.3s ease-in'), // last 0.5s, delay 0.3s
			]),

			// fade out when destroyed. this could also be written as transition('void => *')
			transition(':leave', animate('0.3s ease-out', style({ opacity: 0 }))),
		]),
	],
})
export class EmotionsComponent implements OnInit {
	// Sending data to a child component
	@Input() index = 0; // decorate the property with @Input()

	// Determine the direction of the emotion container (border radius)
	isDirectionRight = true;

	// Emotions list grouped by category
	public emotionCategories: EmotionCategory[] = [];

	// Selected emotions and categories lists
	public selectedEmotions: Emotion[] = [];
	public selectedCategories: Emotion[] = [];

	constructor(private emotionService: EmotionService) { }

	ngOnInit(): void {
		this.emotionCategories = this.emotionService.getAll();
	}

	// Apply class to each emotion based on index
	getEmotionClass(index: number) {
		var className = '';

		// when loop starts
		if (index == 0) {
			this.isDirectionRight = true;
			className += 'first ';
		}

		// change direction if odd number
		this.changeDirection(index);

		// apply correct class based on direction
		this.isDirectionRight
			? (className += 'radius-right')
			: (className += 'radius-left');

		return className;
	}

	// Change direction of border radius
	changeDirection(index: number) {
		// if odd number -> change direction
		if (index % 2 != 0) {
			this.isDirectionRight = !this.isDirectionRight;
		}
	}

	// Change hex to rgba
	hexToRGB(hex: string, alpha: string) {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);

		if (alpha) {
			return `rgba(${r}, ${g}, ${b}, ${alpha})`;
		} else {
			return `rgb(${r}, ${g}, ${b})`;
		}
	}

	// Mark category as selected
	markAsSelected(category: Emotion, emotion: Emotion) {
		// if category wasn't already added
		if (this.selectedCategories.indexOf(category) == -1) {
			this.selectedCategories.push(category);
		}

		// if emotion wasn't already added
		if (this.selectedEmotions.indexOf(emotion) == -1) {
			this.selectedEmotions.push(emotion);
		}
	}

	// Is provided emotion selected
	isEmotionSelected(emotion: Emotion) {
		return this.selectedEmotions.indexOf(emotion) != -1;
	}
}
