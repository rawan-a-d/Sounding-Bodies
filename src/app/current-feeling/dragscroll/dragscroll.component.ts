import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronCircleLeft, faChevronCircleRight, faChevronLeft, faChevronRight, faFilm } from '@fortawesome/free-solid-svg-icons';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { EmotionService } from 'src/app/services/emotion.service';
import { EmotionCategory } from '../../models/EmotionCategory';

@Component({
	// https://stackoverflow.com/questions/45467881/expressionchangedafterithasbeencheckederror-expression-has-changed-after-it-was
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
	public emotionCategories: EmotionCategory[] = []

	
	@Output() newCategorySelectionEvent = new EventEmitter<string>();

	// Drag scroll
	@ViewChild('nav', { read: DragScrollComponent })
	ds!: DragScrollComponent;
	
	
	constructor(private emotionService: EmotionService) { }
	
	ngOnInit(): void {
		this.emotionCategories = this.emotionService.getAll()
	}

	
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