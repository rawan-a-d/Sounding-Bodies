import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronCircleLeft, faChevronCircleRight, faChevronLeft, faChevronRight, faFilm } from '@fortawesome/free-solid-svg-icons';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Emotion } from '../../models/Emotion';
import { EmotionCategory } from '../../models/EmotionCategory';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-dragscroll',
	templateUrl: './dragscroll.component.html', 
	styleUrls: ['./dragscroll.component.css']
})
export class DragscrollComponent implements OnInit, AfterViewInit {
	// Icons	
	nextIcon = faChevronCircleRight
	previousIcon = faChevronCircleLeft

	// Emotions list grouped by category
	public emotionCategories: EmotionCategory[] = [
		new EmotionCategory(new Emotion("Angry", "#FAA2A2", "assets/categories/angry.png"), [
			new Emotion("Incensed", "#DA449A", "assets/current-feeling/angry/incensed.png"),
			new Emotion("Angry", "#E04A52", "assets/current-feeling/angry/angry.png"),
			new Emotion("Irritated", "#FE4A06", "assets/current-feeling/angry/irritated.png")
		]),
		new EmotionCategory(new Emotion("Afraid", "#B1BED5", "assets/categories/afraid.png"), [
			new Emotion("Stressed", "#315FAD", "assets/current-feeling/afraid/stressed.png"),
			new Emotion("Confused", "#B0B5C9", "assets/current-feeling/afraid/confused.png"),
			new Emotion("Nervous", "#05317B", "assets/current-feeling/afraid/nervous.png")
		]),
		new EmotionCategory(new Emotion("Sad", "#A2C3FA", "assets/categories/sad.png"), [
			new Emotion("Dejected", "#93ADF3", "assets/current-feeling/sorrowful/dejected.png"),
			new Emotion("Lonely", "#147CA3", "assets/current-feeling/sorrowful/lonely.png"),
			new Emotion("Sad", "#4687F5", "assets/current-feeling/sorrowful/sad.png")
		]),
		new EmotionCategory(new Emotion("Neutral", "#DDDDDD", "assets/categories/neutral.png"), [
			new Emotion("Neutral", "#C9C9C9", "assets/current-feeling/neutral/neutral.png")
		]),
		new EmotionCategory(new Emotion("Happy", "#FED1AE", "assets/categories/happy.png"), [
			new Emotion("Happy", "#FFA55F", "assets/current-feeling/happy/happy.png"),
			new Emotion("In love", "#C5A1DA", "assets/current-feeling/happy/in-love.png"),
			new Emotion("Excited", "#5BCFDC", "assets/current-feeling/happy/excited.png"),
			new Emotion("Satisfaction", "#68D88D", "assets/current-feeling/happy/satisfiction.png")
		]),
	]
	
	@Output() newCategorySelectionEvent = new EventEmitter<string>();

	// Drag scroll
	@ViewChild('nav', { read: DragScrollComponent })
	ds!: DragScrollComponent;
	
	
	constructor() { }
	
	ngOnInit(): void {}

	
	ngAfterViewInit() {
		// Starting ngx-drag-scroll from specified index(2)
		setTimeout(() => {
			this.ds.moveTo(2);
		}, 2000);
	}
	
	
	// Move left button click
	moveLeft() {
		var prevIndex = this.ds.currIndex - 1
		// if index is valid
		if (this.isValidIndex(prevIndex)) {
			this.onIndexChanged(prevIndex)
			this.ds.moveLeft();
		}
	}

	// Move right button click
	moveRight() { 
		var nextIndex = this.ds.currIndex + 1
		// if index is valid
		if (this.isValidIndex(nextIndex)) {
			this.onIndexChanged(nextIndex)
			this.ds.moveRight();
		}
	}

	// Provided index within array length
	isValidIndex(index: number) {
		if(index >= 0 && index < this.emotionCategories.length) {
			return true
		}
		
		return false
	}
	
	// Is the provided index the same as the current one
	isCurrentIndex(index: number) {
		if(this.ds) {
			return this.ds.currIndex == index
		}
		else {
			return this.emotionCategories.length / 2 - 1
		}
	}
	
	// Emit event to parent when selection changes
	changeCategorySelection(index: string) {
		this.newCategorySelectionEvent.emit(index);
	}

	// track the indexes of the images
	onIndexChanged(idx: number) {
		this.changeCategorySelection(idx.toString())
	}
}