import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sounding-bodies-group3';

  public options = {
    // spinable: true,
    // buttonWidth: 70,

      "radius": 250,
      "spinable": true,
      "onlyIcons": true,
      "buttonFontSize": 10,
      "angle": 60,
      "buttonOpacity": 0

};

  public wings = 
  [
    {
      "title": "iPad",
      "color": "#ea2a29",
      "icon": {
        "name": "fa fa-tablet"
      }
    },
    {
      "title": "iMac",
      "color": "#f16729",
      "icon": {
        "name": "fa fa-laptop"
      }
    },
    {
      "title": "iPhone",
      "color": "#f89322",
      "icon": {
        "name": "fa fa-mobile"
      }
    },
    {
      "title": "iWatch",
      "color": "#ffcf14",
      "icon": {
        "name": "fa fa-clock-o"
      }
    }
  ]


public gutter = {
  // top: 30,
    "top": -100,
    "left": 600

};

public startAngles = {
  // top: -20,
  "topLeft": 0,
  "topRight": 90,
  "bottomRight": 180,
  "bottomLeft": 270
}
}
