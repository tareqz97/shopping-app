import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodects',
  templateUrl: './prodects.component.html',
  styleUrls: ['./prodects.component.css']
})
export class ProdectsComponent implements OnInit {

  constructor() { }
  prodects = [
    {
      name: 'prodect 1',
      path:'/admin/prodects/1/details'
    },
    {
      name: 'prodect 2',
      path:'/admin/prodects/2/details'
    },
    {
      name: 'prodect 3',
      path:'/admin/prodects/3/details'
    },
    {
      name: 'prodect 4',
      path:'/admin/prodects/4/details'
    }
  ]
  ngOnInit() {
  }

}
