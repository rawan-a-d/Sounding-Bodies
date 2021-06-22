import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  menuClass = 'menu'

  constructor() {
  }

  ngOnInit(): void {
  }
  
  changeEmotion(emotion: string) {
    this.menuClass = 'menu pm_' + emotion
  }

}