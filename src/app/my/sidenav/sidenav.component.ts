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
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "/dashboard",
      icon: "dashboard",
      sub_menu: [
    
        {
          link_name: "Banner",
          link: "/dashboard/banner",
          icon: "menu",
        }, {
          link_name: "Current-Plan",
          link: "/dashboard/current",
          icon: "home",
        }, {
          link_name: "Employees",
          link: "/dashboard/emp",
          icon: "person_pin",
        },
        {
          link_name: "graph",
          link: "/dashboard/graph",
          icon:"graphic_eq"
        },
        {
          link_name: "properties",
          link: "/dashboard/properties",
          icon:"add_to_home_screen"
        },
        {
          link_name: "stats",
          link: "/dashboard/stats",
          icon:"bar_chart"
          
        },
        {
          link_name: "activity",
          link: "/dashboard/activity",
          icon:"recent_actors"
        },
      ]
    }, 
    {
      link_name: "Widgets",
      link: 'widgets',
      icon: "widgets",
      sub_menu: [
        {
          link_name: "Classic",
          link: "stats",
          icon: " functions",
        }, {
          link_name: "Modern",
          link: "stats",
          icon: "all_out",
        }, 
      ]  
    },
    {
      link_name: "Metrics",
      link: null,
      icon: "assessment",
    },
    {
      link_name: "Layout",
      link: null,
      icon: "arrow_right_alt",
    }
  ]

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }
}


