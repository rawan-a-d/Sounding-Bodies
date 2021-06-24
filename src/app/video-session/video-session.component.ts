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
    videoUrl = "./assets/video-session/sounding_bodies_demo.mp4"

    onOpen() {
      this.isMenuActive = true;
    }
  
    onClose() {
      this.isMenuActive = false;
    }
  }