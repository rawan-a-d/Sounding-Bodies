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

// $(document).ready(function() {
//     $(".angry, .afraid, .sad, .neutral, .happy").on("click", function() {      
//         $(".menu, h2")
//             // Remove all classes
//             .removeClass()
//             // Put back .primary-color class + the clicked elements class with the added prefix "pm_".
//             .addClass('menu pm_' + $(this).attr('class') );  
//         console.log($(this).attr('class') )
//     });
//     return(false);
// });