import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
searchText: any;


  constructor() { }

  ngOnInit(): void {
  }
 
  inbox=[
    {
      image:"assets/alex-dolgove.jpg",
      name:"Domnic Harris",
      subject:"Fusce a libero pellentesque",
      content:"Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus.",
      date:"8th Aug",
      badge:"clients",
      badge1:"In-house",
    
    },
    {
      image:"assets/amay.jpg",
      name:"Amay Jha",
      subject:"Nullam id ex at augue pharetra vestibulum eget id mauris.",
      content:"Cras bibendum tortor tortor, eu luctus risus gravida ut.",
      date:"8th Aug",
      badge:"Upwork",
      badge1:"Clinet"
    },
    {
      image:"assets/domnic-brown.jpg",
      name:"Domnic Brown",
      subject:"Fusce a libero pellentesque",
      content:"Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus.",
      date:"7th Aug",
    
    },
    {
      image:"assets/ellen-manning.jpg",
      name:"Ellen Manning",
      subject:"Fusce a libero pellentesque",
      content:"Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus.",
      date:"6th Aug",
      badge:"Upwork"
    },
    {
      image:"assets/garry-sobars.jpg",
      name:"Garry Sobars",
      subject:"Nullam id ex at augue pharetra vestibulum eget id mauris.",
      content:"Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus.",
      date:"5th Aug",
      badge:"PayPal"
    },
    {
      image:"assets/jeson-born.jpg",
      name:"Jeson Born",
      subject:"Fusce a libero pellentesque",
      content:"Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus.",
      date:"5th Aug",
      badge1:"In-house"
    },
    {
      image:"assets/kemroon-white.jpg",
      name:"Kemroon White",
      subject:"Nullam id ex at augue pharetra vestibulum eget id mauris.",
      content:"Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus.",
      date:"3th Aug"
    }
  ]
}
