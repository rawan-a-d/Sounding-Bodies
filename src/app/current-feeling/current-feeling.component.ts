import { Component, Input, OnInit } from '@angular/core';
import { Emotion } from '../models/Emotion';
import { EmotionCategory } from '../models/EmotionCategory';

@Component({
  selector: 'app-current-feeling',
  templateUrl: './current-feeling.component.html',
  styleUrls: ['./current-feeling.component.css']
})
export class CurrentFeelingComponent implements OnInit {

  @Input() index = 0;

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

  // Determine the direction of the emotion container (border radius)
  isDirectionRight = true


  constructor() { }

  ngOnInit(): void {
  }


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
      console.log("index " + index)
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

}
