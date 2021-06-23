import { Component, OnInit } from '@angular/core';
import { Emotion } from "../models/Emotion";
import { EmotionCategory } from '../models/EmotionCategory';


@Component({
  selector: 'app-feeling-wish',
  templateUrl: './feeling-wish.component.html',
  styleUrls: ['./feeling-wish.component.css']
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

  setColor(color: string){
    var svg_color = document.getElementById("svg-path-1");
    var svg_color1 = document.getElementById("svg-path-2");

    if(svg_color != null && svg_color1 != null){
      // svg_color.style.fill = color;
      // svg_color1.style.fill = color;

      document.documentElement.style.setProperty("--animation-color", color)
      document.documentElement.style.setProperty("--animation-state", "running")
      
      console.log(document.documentElement.style.getPropertyValue("--animation-color"));
    }
  }
}
