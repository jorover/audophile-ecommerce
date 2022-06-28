import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-images',
  templateUrl: './feature-images.component.html',
  styleUrls: ['./feature-images.component.css']
})
export class FeatureImagesComponent implements OnInit {

  @Input() featureImages:any

  featureImagesContainer:String = 'featureImagesContainer'


  constructor() { }

  ngOnInit(): void {
    
  }

}


