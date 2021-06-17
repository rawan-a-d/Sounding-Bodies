import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    // private router: Router,
		// private route: ActivatedRoute
  ) { }

  index = 0;

  ngOnInit(): void {
  }

  onIndexChanged(idx: number) { 
    this.index = idx;
    console.log('current index: ' + idx);
    this.index = idx;

    switch(idx) { 
      case 0: { 
         //statements; 
         console.log("0 Pos: " + idx)
         break; 
      } 
      case 1: { 
         //statements; 
         console.log("1 Pos: " + idx)
         break; 
      } 
      case 2: { 
        //statements; 
        console.log("2 Pos: " + idx)
        break; 
      } 
      case 3: { 
        //statements; 
        console.log("3 Pos: " + idx)
        break; 
      } 
      case 4: { 
        //statements; 
        console.log("4 Pos: " + idx)
        break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
    }
  }

  // test(idx: number){

  //   this.index = idx;

  //   switch(idx) { 
  //     case 0: { 
  //        //statements; 
  //        console.log("0 Pos: " + idx)
  //        break; 
  //     } 
  //     case 1: { 
  //        //statements; 
  //        console.log("1 Pos: " + idx)
  //        break; 
  //     } 
  //     default: { 
  //        //statements; 
  //        break; 
  //     } 
  //  } 
  // }

}
