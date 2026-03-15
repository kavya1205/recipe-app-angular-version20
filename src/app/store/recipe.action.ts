import { createAction, props } from "@ngrx/store";


export const loadRecipes = createAction('[Recipe] Load Recipes');
export const loadRecipesSuccess = createAction('[Recipe] Load Recipes Success',props<{recipes:any[]}>());
export const loadRecipesError = createAction('[Recipe] Load Recipes Error', props<{ error: any }>());