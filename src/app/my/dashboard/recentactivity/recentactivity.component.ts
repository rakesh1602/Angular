import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentactivity',
  templateUrl: './recentactivity.component.html',
  styleUrls: ['./recentactivity.component.scss'],
})
export class RecentactivityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  RecentActivity = [
    {
      day: 'Today',
      activity: [
        {
          image: 'assets/recent/amay.jpg',
          info: 'Mila Alba left a 5 star review on Albama’s House',
        },
        {
          image: 'assets/recent/garry-sobars.jpg',
          info: 'Norman Dolphi is looking for a house in New Jersy, USA',
        },
        {
          image: 'assets/recent/mathew.jpg',
          info: 'Callback request from Bob Builder for the property Dimitri House',
        },
        {
          image: 'assets/employees/mila-alba.jpg',
          info: 'Congratulations to Tom Moody for joining 10+ club',
        },
       
      ],
    },
    {
      day: 'Yesterday',
      activity: [
        
        {
          image: 'assets/recent/mathew.jpg',
          info: 'Callback request from Bob Builder for the property Dimitri House',
        },
        {
          image: 'assets/recent/garry-sobars.jpg',
          info: 'Congratulations to Tom Moody for joining 10+ club',
        },
        {
          image: 'assets/recent/amay.jpg',
          info: 'Norman Dolphi is looking for a house in New Jersy, USA',
        },
        {
          image: 'assets/employees/mila-alba.jpg',
          info: 'Mila Alba left a 5 star review on Albama’s House',
        },  
      ],
    },
    
    
  ];
}
