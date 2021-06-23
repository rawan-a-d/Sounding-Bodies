import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Emotion } from "../models/Emotion";
import { CommonModule } from '@angular/common';
import { EmotionCategory } from '../models/EmotionCategory';


@Component({
  selector: 'app-feeling-wish',
  templateUrl: './feeling-wish.component.html',
  styleUrls: ['./feeling-wish.component.css'],

  // Animation
	animations: [
		// the fade-in/fade-out animation.
		trigger('svgsFade', [
			// the "in" style determines the "resting" state of the element when it is visible.
			state('in', style({ opacity: 1 })),

			// fade in when created. this could also be written as transition('void => *')
			transition(':enter', [
				style({ opacity: 0 }),
				animate('1s 0.3s ease-in'), // last 0.5s, delay 0.3s
			]),

		]),
  ],
})


export class FeelingWishComponent implements OnInit {

  public emotions: Emotion[] = [
      new Emotion("Sad", "#4687F5", "assets/desired-feeling/sad.png"),
      new Emotion("Cheerful", "#F97F20", "assets/desired-feeling/cheerful.png"),
      new Emotion("Energy", "#05317B", "assets/desired-feeling/energy.png"),
      new Emotion("Relaxed", "#428A8C", "assets/desired-feeling/relaxed.png"),
      new Emotion("Trust", "#12921A", "assets/desired-feeling/trust.png"),
      new Emotion("In Love", "#C5A1DA", "assets/desired-feeling/in-love.png"),
      new Emotion("Angry", "#E04A52", "assets/desired-feeling/angry.png"),
      new Emotion("Power", "#EB4D00", "assets/desired-feeling/power.png"),
      new Emotion("Surprise me!", "#9E9E9E", "assets/desired-feeling/gift.png")
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // Determine the direction of the emotion container (border radius)
  isDirectionRight = true


  // Apply class to each emotion based on index
  getEmotionClass(index: number) {
    var className = ''

    // when loop starts
    if(index == 0) {
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
    if(index % 2 != 0) {
      // console.log("index " + index)
      this.isDirectionRight = !this.isDirectionRight
    } 
  }

  // change hex to rgba
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

  svg_color_global = "#e06386"

  setColor(color: string){
    var svg_color = document.getElementById("svg-path-1");
    var svg_color1 = document.getElementById("svg-path-2");

    if(this.svg_color_global != null && svg_color != null && svg_color1 != null){
      // this.isChanged = !this.isChanged;

      this.svg_color_global = color;
      svg_color.style.fill = color;
      svg_color1.style.fill = color;
    }
  }
}
