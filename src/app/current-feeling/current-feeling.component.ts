import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { Emotion } from '../models/Emotion';
import { EmotionCategory } from '../models/EmotionCategory';
import { EmotionService } from '../services/emotion.service';

@Component({
	selector: 'app-current-feeling',
	templateUrl: './current-feeling.component.html',
	styleUrls: ['./current-feeling.component.css']
})
export class CurrentFeelingComponent implements OnInit {
	@Input() index = 0;

	// Emotions list grouped by category
	public emotionCategories: EmotionCategory[] = []
	
	// Determine the direction of the emotion container (border radius)
	isDirectionRight = true

	// dragscroll
	public options = {
		"radius": 250,
		"spinable": true,
		"onlyIcons": false,
		"buttonFontSize": 10,
		"angle": 60,
		"buttonOpacity": 0
	};

	public gutter = {
		"top": -100,
		"left": 600,
		"right": 600
	};

	public startAngles = {
		"topLeft": 90,
		"topRight": 90,
		"bottomRight": 270,
		"bottomLeft": 270
	}


	// Get screen size
	// Declare height and width variables
	scrHeight: any;
	scrWidth: any;

	@HostListener('window:resize', ['$event'])
	getScreenSize() {
		this.scrHeight = window.innerHeight;
		this.scrWidth = window.innerWidth;
	}
	

	constructor(private emotionService: EmotionService) {
		this.getScreenSize();
	}

	ngOnInit(): void {
		// get emotions list
		this.emotionCategories = this.emotionService.getAll()
		
		// change index to middle index
		this.index =  Math.floor(this.emotionCategories.length  / 2)
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

	// Get the category selection from dragscroll in desktop/tablet view
	changeCategorySelection(index: string) {
		this.index = +index
	}
	
	// On confirm redirect to desired feeling
	confirm() {
		
	}
}