import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees=[
    {
    'image':'/assets/employees/noah-owens.jpg',
    'name':'Noah Owens',
    'rating':'4.9',
    'deals':'27 Deals'
    },
    {
    'image':'/assets/employees/ellen-manning.jpg',
    'name':'Ellen Manning',
    'rating':'4.5',
    'deals':'21 Deals'
    },
    {
    'image':'/assets/employees/jones.jpg',
    'name':'Angel Jones',
    'rating':'4.7',
    'deals':'13 Deals'
    },
    {
    'image':'/assets/employees/mila-alba.jpg',
    'name':'Dollie Norton',
    'rating':'4.4',
    'deals':'21 Deals'
    },
    {
    'image':'/assets/employees/steve-smith.jpg',
    'name':'Joshua Brian',
    'rating':'4.3',
    'deals':'07 Deals'
    },
    {
    'image':'/assets/employees/amay.jpg',
    'name':'Amay Mathur',
    'rating':'4.3',
    'deals':'07 Deals'
    },
    {
    'image':'/assets/employees/selena.jpg',
    'name':'Selena',
    'rating':'4.4',
    'deals':'07 Deals'
    },
    {
    'image':'/assets/employees/steve-smith.jpg',
    'name':'Chris Mathew',
    'rating':'3.3',
    'deals':'07 Deals'
    },
 
      ]
    

}
