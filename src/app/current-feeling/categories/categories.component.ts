import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmotionCategory } from 'src/app/models/EmotionCategory';
import { EmotionService } from 'src/app/services/emotion.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, AfterViewInit {
	// start wheel from angry
	menuClass = 'menu pm_angry'

	@Output() newCategorySelectionWheelEvent = new EventEmitter<string>();

	// Emotions list grouped by category
	public emotionCategories: EmotionCategory[] = []

	constructor(private emotionService: EmotionService) {
	}
	

	ngOnInit(): void {
		this.emotionCategories = this.emotionService.getAll()
	}
	
	
	ngAfterViewInit() {
		// rotate wheel to sad
		setTimeout(() => {
			this.changeEmotion('sad', 2)
		}, 300);
	}

	changeEmotion(emotion: string, index: number) {
		this.menuClass = 'menu pm_' + emotion

		this.changeCategorySelection(index.toString())
	}

	// Emit event to parent when selection changes
	changeCategorySelection(index: string) {
		this.newCategorySelectionWheelEvent.emit(index);
	}

	// track the indexes of the images
	onIndexChanged(idx: number) {
		this.changeCategorySelection(idx.toString())
	}
}