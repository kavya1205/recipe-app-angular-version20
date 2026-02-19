import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { RecipeList } from './components/recipe-list/recipe-list';
import { RecipeDetail } from './components/recipe-detail/recipe-detail';
import { AddRecipe } from './components/add-recipe/add-recipe';

export const routes: Routes = [
{
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
},
{
    path:'dashboard',
    component:Dashboard
},
// {
//     path:"",
//     component:RecipeList
// },
{
    path:'recipe/:id',
    component:RecipeDetail
},
{
    path:'add-recipe',
    component:AddRecipe
}
];
