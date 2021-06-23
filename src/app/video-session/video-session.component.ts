import { Component, Input, OnInit } from '@angular/core';
import { Emotion } from '../models/Emotion';
import { EmotionCategory } from '../models/EmotionCategory';

@Component({
    selector: 'app-video-session',
    templateUrl: './video-session.component.html',
    styleUrls: ['./video-session.component.css']
  })
  
    

  export class VideoSessionComponent {
    isMenuActive = false;
    videoUrl = "https://media.vimejs.com/720p.mp4"

    onOpen() {
      this.isMenuActive = true;
    }
  
    onClose() {
      this.isMenuActive = false;
    }
  }