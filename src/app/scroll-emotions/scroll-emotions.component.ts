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

  selectedItem = "";

  selectedImg: String = "";

  selected = "angray";
  // selectedAfraid = "";

  constructor() { 
    // this.selected();
  }

  ngOnInit(): void {
  }

  // selected(){
  //   if(this.selectedItem == "angry"){
  //     console.log("You selected" + this.selectedItem)
  //   }
  // }

}
