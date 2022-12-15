import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  logo="assets/logo-white.png"
  user="assets/user.jpg"

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

}