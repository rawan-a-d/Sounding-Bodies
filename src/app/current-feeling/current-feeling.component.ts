import { Component, OnInit } from '@angular/core';
import { Emotion } from '../models/Emotion';
import { EmotionCategory } from '../models/EmotionCategory';

@Component({
  selector: 'app-current-feeling',
  templateUrl: './current-feeling.component.html',
  styleUrls: ['./current-feeling.component.css']
})
export class CurrentFeelingComponent implements OnInit {
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


  constructor() { }

  ngOnInit(): void {
  }

}
