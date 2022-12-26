import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content: any;

  constructor() { }

  ngOnInit(): void {
  }

  newArray: any
  searchThis(data: any) {
    this.content = this.newArray
    console.log(data)
    if (data) {
      this.content = this.content.filter(function (ele: { name: string; }, i: any, array: any) {
        let arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(data)
      })
    }
    else {
      console.log(this.content)
    }
    console.log(this.content)
  }
}


