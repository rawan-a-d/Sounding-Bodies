import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragscroll',
  templateUrl: './dragscroll.component.html', 
  styleUrls: ['./dragscroll.component.css']
})
export class DragscrollComponent implements OnInit {

  imagelist = [
    'angry.png', 
    'happy.png',
    'afraid.png',
    'sad.png' ,
    'neutral.png',
  ];

  constructor() { }

  index = 0;

  ngOnInit(): void {
  }

  onIndexChanged(idx: number) { 
    this.index = idx;
    console.log('current index: ' + idx);
  }

}
