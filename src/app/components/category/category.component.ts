import { Component, OnInit } from '@angular/core';
import { list } from 'src/app/list';
import { ITEMS } from 'src/app/categoryList';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {

  items:list[] = ITEMS
  categoryContent:String = 'categoryContent'
  categoryBg:String = 'categoryBg'

  removeGlobal(){
    document.body.classList.remove('global')
  }


  constructor() { }

  ngOnInit(): void {
  }

}
