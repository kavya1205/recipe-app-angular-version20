import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeListService } from '../../services/recipe-list.service';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
  standalone:true
})
export class RecipeList {
  recipesList = signal<any>([]);
  
  constructor(private router:Router, private recipeListService:RecipeListService){}

  ngOnInit(){
    this.fetchAllRecipes()
  }

  goToDetailsPage(id:any){
    this.router.navigateByUrl(`/recipe/${id}`)
  }

  fetchAllRecipes(){
    this.recipeListService.getAllRecipes().subscribe({
      next:(res:any)=>{
        this.recipesList.set(res.recipes);
      },
      error:(err:any)=>{
        console.log("Error while fetching data",err);
      }
    })
  }

}
