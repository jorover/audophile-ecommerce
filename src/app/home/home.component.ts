import { Component, OnInit } from '@angular/core';
import { itemList } from '../items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allCart:any = localStorage.getItem('All Cart' || "")

  setStorage(){
    if(this.allCart === null){
      return localStorage.setItem('All Cart', JSON.stringify([]))
    } else {
      return localStorage.setItem('All Cart', this.allCart)
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.setStorage();
  }

}
