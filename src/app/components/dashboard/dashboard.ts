import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { RecipeList } from '../recipe-list/recipe-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Carousel, RecipeList, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
