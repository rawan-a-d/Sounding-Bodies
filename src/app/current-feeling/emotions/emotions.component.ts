import { Component, Input, OnInit } from '@angular/core';
import { EmotionCategory } from 'src/app/models/EmotionCategory';
import { EmotionService } from 'src/app/services/emotion.service';

@Component({
	selector: 'app-emotions',
	templateUrl: './emotions.component.html',
	styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {
	// Sending data to a child component
	@Input() index = 0 // decorate the property with @Input()

	// Determine the direction of the emotion container (border radius)
	isDirectionRight = true

	// Emotions list grouped by category
	public emotionCategories: EmotionCategory[] = []


	constructor(private emotionService: EmotionService) {
	}

	ngOnInit(): void {
		this.emotionCategories = this.emotionService.getAll()
	}


	// Apply class to each emotion based on index
	getEmotionClass(index: number) {
		var className = ''

		// when loop starts
		if (index == 0) {
			this.isDirectionRight = true
			className += 'first '
		}

		// change direction if odd number
		this.changeDirection(index)

		// apply correct class based on direction
		this.isDirectionRight ? className += 'radius-right' : className += 'radius-left'

		return className
	}

	changeDirection(index: number) {
		// if odd number -> change direction
		if (index % 2 != 0) {
			this.isDirectionRight = !this.isDirectionRight
		}
	}

	// change hex to rgba
	hexToRGB(hex: string, alpha: string) {
		const r = parseInt(hex.slice(1, 3), 16)
		const g = parseInt(hex.slice(3, 5), 16)
		const b = parseInt(hex.slice(5, 7), 16)

		if (alpha) {
			return `rgba(${r}, ${g}, ${b}, ${alpha})`
		} else {
			return `rgb(${r}, ${g}, ${b})`
		}
	}
}