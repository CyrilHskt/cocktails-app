import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail = new Cocktail('Gin Tonic', 'http://2.bp.blogspot.com/-8fefgEolNIk/Tc1xprgFs0I/AAAAAAAAAwQ/9gEpBK3_Ds8/s1600/gin_tonic.jpg', "C'est un bon gin Tonic !");

  constructor() { }

  ngOnInit() {
  }

}
