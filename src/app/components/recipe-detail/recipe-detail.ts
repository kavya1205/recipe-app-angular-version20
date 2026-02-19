import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecipeListService } from '../../services/recipe-list.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
  standalone:true
})
export class RecipeDetail implements OnInit{

  recipe = signal<any>([]);
  id:any;

  constructor(private router:Router, private route:ActivatedRoute, private recipeDetailService:RecipeListService){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.fetchRecipeById()
  }

  fetchRecipeById(){
    this.recipeDetailService.getRecipeById(this.id).subscribe({
      next:(res:any)=>{
        console.log("recipe",this.recipe)
        this.recipe.set(res);
      },
      error:(err:any)=>{
        console.log("error",err);
      }
    })
  }

  goToPage():void{
    this.router.navigateByUrl('/dashboard')
  }
}
