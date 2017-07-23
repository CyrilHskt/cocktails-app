import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito', 'http://redirect.bigoven.com/pics/mojito-11.jpg', "C'est un bon mojito !"),
    new Cocktail('Marguerita', 'https://cdn2.vox-cdn.com/uploads/chorus_image/image/49425907/Margarita.0.0.jpg', "C'est un bon marguaritas !"),
    new Cocktail('Cuba libre', 'http://bistrowarszawa.pl/wp-content/uploads/2012/07/Cuba-libre-cocktail.jpg', "C'est un bon cuba libre !")
  ];

  constructor() { }

  ngOnInit() {
  }

}
