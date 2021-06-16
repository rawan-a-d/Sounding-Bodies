import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-emotions',
  templateUrl: './scroll-emotions.component.html',
  styleUrls: ['./scroll-emotions.component.css']
})
export class ScrollEmotionsComponent implements OnInit {

  imagelist = [
    'angry.png', 
    'happy.png',
    'afraid.png',
    'sad.png' ,
    'neutral.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
