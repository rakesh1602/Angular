import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards= [
    {
      "title": "26,873",
      "subtitle": "LISTED PROPERTY",
      "percentage":"34%",
      "small": "This week",
      "value":40
    },
    {
      "title": "384",
      "subtitle": "SERVING CITIES",
      "percentage":"7",
      "small": "7 New cities this week",
      "value":80
    },
    {
      "title": "84,729",
      "subtitle": "ONLINE VISITORS",
      "percentage":"Avg 327 visit daily%",
      "small": "This week",
      "value":60
    },
    {
      "title": "87,239",
      "subtitle": "ONLINE QUERIES",
      "percentage":"38%",
      "small": "past month",
      "value":30
      
    }
  ];

}
