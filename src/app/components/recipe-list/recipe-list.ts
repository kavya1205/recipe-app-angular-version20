import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeListService } from '../../services/recipe-list.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
  standalone: true
})
export class RecipeList {
  searchControl: FormControl = new FormControl("");
  recipesList = signal<any>([]);
  recipeTags = signal<any>([]);
  http: any = inject(HttpClient);

  constructor(private router: Router, private recipeListService: RecipeListService) {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      
      distinctUntilChanged(),
      switchMap((search: string) => {
        if (search.trim().length === 0 || !search) {
          console.log("IF")
          return this.recipeListService.getAllRecipes();
        }
        else {
          console.log("Else")
         return search.trim().length>3 ?this.fetchSearchedRecipes(search):''
        }
      }
      )
    ).subscribe({
      next: (res: any) => {
        this.recipesList.set(res.recipes);
      },
      error: (err) => {
        console.log("Error", err);
      }
    });

  }

  ngOnInit() {
    this.fetchAllRecipes();
    this.fetchAllTags();
  }

  handleDropdownChange(selectedVal: any) {
    console.log("event", selectedVal.target.value)
    this.getRecipesByTag(selectedVal.target.value)
  }


  goToDetailsPage(id: any) {
    this.router.navigateByUrl(`/recipe/${id}`)
  }

  getRecipesByTag(tagName: any) {
    this.recipeListService.getRecipeByTags(tagName).subscribe({
      next: (res: any) => {
        this.recipesList.set(res.recipes);
      },
      error: (err: any) => {
        console.log("Error", err)
      }
    })
  }

  fetchAllRecipes() {
    this.recipeListService.getAllRecipes().subscribe({
      next: (res: any) => {
        this.recipesList.set(res.recipes);
      },
      error: (err: any) => {
        console.log("Error while fetching data", err);
      }
    })
  }

  fetchAllTags() {
    this.recipeListService.getAllTags().subscribe({
      next: (res: any) => {
        this.recipeTags.set(res);
      },
      error: (err: any) => {
        console.log("Error while fetching data", err);
      }
    })
  }

  fetchSearchedRecipes(searchedVal: string) {
    return this.recipeListService.getSearchedRecipes(searchedVal);
  }
}
