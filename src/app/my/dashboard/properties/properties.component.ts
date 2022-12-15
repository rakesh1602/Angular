import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  properties = [
    {
      for: 'FOR SALE',
      color: 'rgb(251,68,132)',
      name: 'Property & sidebar agent',
      location: 'Miami, Florida',
      category: 'albama',
      price: 125326,
      priceSqft: '6705/sqft',
      image: 'assets/recent/property-3.jpeg',
    },
    {
      for: 'FOR SALE',
      color: 'rgb(251,68,132)',
      name: 'Luxury family home',
      location: 'South Western Ave',
      category: 'albama',
      price: 113859,
      priceSqft: '6705/sqft',
      image: 'assets/recent/property-4.jpeg',
    },
    {
      for: 'FOR SALE',
      color: 'rgb(251,68,132)',
      name: 'Property & sidebar agent',
      location: 'Sublevel, Hialeah, Florida',
      category: 'popular',
      price: 125326,
      priceSqft: '6705/sqft',
      image: 'assets/recent/property-5.jpeg',
    },
    {
      for: 'FOR RENTAL',
      color: 'rgb(233,138,42)',
      name: 'Modern apartment on 5th floor with views of ...',
      location: 'Modern apartment on 5th floor with views of th',
      category: 'popular',
      price: 125326,
      priceSqft: '5130/sqft',
      image: 'assets/recent/property-6.jpeg',
    },
    {
      for: 'FOR RENTAL',
      color: 'rgb(233,138,42)',
      name: 'Property & agent at bottom',
      location: 'Miami, Florida',
      category: 'popular',
      price: 113859,
      priceSqft: '5230/sqft',
      image: 'assets/recent/property-7.jpeg',
    },
    {
      for: 'FOR SALE',
      color: 'rgb(251,68,132)',
      name: 'Property & agent at bottom',
      location: 'Miami, Florida',
      category: 'new jersey',
      price: 113859,
      priceSqft: '5230/sqft',
      image:'assets/recent/property-8.jpeg',
    },
    {
      for: 'FOR SALE',
      color: 'rgb(251,68,132)',
      name: 'Sell beautiful Studio in one of the best areas',
      location: 'South Western Ave',
      category: 'new jersey',
      price: 113859,
      priceSqft: '4522/sqft',
      image: 'assets/recent/property-3.jpeg',
    },
    {
      for: 'FOR SALE',
      color: 'rgb(251,68,132)',
      name: 'Property & sidebar agent',
      location: 'Sublevel, Hialeah, Florida',
      category: 'new jersey',
      price: 55353,
      priceSqft: '6705/sqft',
      image: 'assets/recent/property-4.jpeg',
    },
    {
      for: 'FOR RENTAL',
      color: 'rgb(233,138,42)',
      name: 'Property & agent at bottom',
      location: 'Miami, Florida',
      category: 'colorado',
      price: 23453,
      priceSqft: '5230/sqft',
      image: 'assets/recent/property-5.jpeg',
    },
    {
      for: 'FOR RENTAL',
      color: 'rgb(233,138,42)',
      name: 'Property & sidebar agent',
      location: 'Sublevel, Hialeah, Florida',
      category: 'colorado',
      price:23135,
      priceSqft: '6705/sqft',
      image: 'assets/recent/property-6.jpeg',
    },
    {
      for: 'FOR RENTAL',
      color: 'rgb(233,138,42)',
      name: 'Apartment for sale with high quality finishing',
      location: 'colorado',
      category: 'colorado',
      price: 12453,
      priceSqft: '3199/sqft',
      image: 'assets/recent/property-7.jpeg',
    },
    {
      for: 'FOR SALE',
      color: 'rgb(251,68,132)',
      name: 'Modern apartment on 5th floor with views of...',
      location: 'Saint Petersburg, Florida',
      category: 'albama',
      price: 5353,
      priceSqft: '5130/sqft',
      image: 'assets/recent/property-8.jpeg',
    },
  ];

  private _searchBy: string = '';

  filterPropertiesArray = this.properties;
  filterProduct(category: string): void {
    if (category == 'all') {
      this.filterPropertiesArray = this.properties;
    } else {
      this.filterPropertiesArray = this.properties.filter(
        (properties) => properties.category == category
      );
    }
  }

  get searchBy():string{
    return this._searchBy;
  }
  set searchBy(search:string)
  {
    this._searchBy=search;
    this.filterPropertiesArray=this.properties.filter(properties=>properties.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }
}
