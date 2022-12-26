import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mainComponent = [
    {
      link_name:'Inbox',
      link: 'sidenav/inbox',
      icon: 'fa fa fa-inbox',
    },
    {
      link_name:'Sent',
      link: 'sidenav/sent',
      icon: 'fa fa-mail-forward',
    },
    {
      link_name:'Drafts',
      link: '/layout/drafts',
      icon: 'fa fa-pencil-square-o',
    },
    {
      link_name:'Spam',
      link: '/layout/spam',
      icon: 'fa fa-folder',
    },
    {
      link_name:'Trash',
      link: '/layout/trash',
      icon: 'fa fa-trash',
    },
    {
      link_name:'Archive',
      link: '/layout/archive',
      icon: 'fa fa-inbox',
    },
    
   
   
  ];

  filter=[
    {
      link_name:'Starred',
      link: '/layout/Starred',
      icon: 'fa fa-star',
    },
    {
      link_name:'Important',
      link: '/layout/important',
      icon: 'fa fa-bookmark',
    },
  ]

  labels=[
    {
      link_name:'PayPal',
      link: 'PayPal',
      icon: 'fa fa-tag',
    },
    {
      link_name:'UpWork',
      link: 'upwork',
      icon: 'fa fa-tag',
    },
    {
      link_name:'In-House',
      link: 'inhouse',
      icon: 'fa fa-tag',
    },
    {
      link_name:'Clients',
      link: 'clients',
      icon: 'fa fa-tag',
    },
  ]

    
  logo=[
    {
      icon:"mail_outline",
      name:"Messages"
    }
  ]

}
