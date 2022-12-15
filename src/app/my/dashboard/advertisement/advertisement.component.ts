import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  modern=[{
    "title":"Modern Infotech",
    "subtitle":"Bilxoy,Boston",
    "content":"MOdern sales Pvt. Ltd is boston’s reputed IT company since 2011."
  }]

}
