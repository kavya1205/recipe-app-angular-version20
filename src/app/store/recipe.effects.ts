import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as RecipeActions from './recipe.action';
import { RecipeListService } from '../services/recipe-list.service';

@Injectable()
export class RecipeEffects {
  private actions$ = inject(Actions);                    // inject first
  private recipeService = inject(RecipeListService);     // inject first

  // now actions$ is ready when loadRecipes$ initializes
  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.loadRecipes),
      switchMap(() =>
        this.recipeService.getAllRecipes().pipe(
          map((res: any) => RecipeActions.loadRecipesSuccess({ recipes: res.recipes })),
          catchError((error) => of(RecipeActions.loadRecipesError({ error })))
        )
      )
    )
  );
        }