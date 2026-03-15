export interface RecipeState {
    recipes: any[];
    loading: boolean;
    error: any;
  }

export const initialState:RecipeState={
    recipes:[],
    loading:false,
    error:null
}