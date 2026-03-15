import { createReducer, on } from "@ngrx/store";
import { initialState } from "./recipe.state";
import { loadRecipes, loadRecipesError, loadRecipesSuccess } from "./recipe.action";

export const RecipeReducer = createReducer(initialState, on(loadRecipes,(state)=>({
    ...state,
    loading:true
})),
on(loadRecipesSuccess, (state, { recipes }) => ({
    ...state,
    recipes,
    loading: false
  })),
on(loadRecipesError,(state,{error})=>({
    ...state,
    loading:false,
    error
}))
)