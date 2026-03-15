import { createSelector, createFeatureSelector } from "@ngrx/store";


export const selectRecipeState = createFeatureSelector('recipes')

export const selectAllRecipes = createSelector(selectRecipeState,(state:any)=>state.recipes);
export const selectLoading = createSelector(selectRecipeState, (state:any)=>state.loading)
export const selectError= createSelector(selectRecipeState, (state:any)=>state.error)