import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class RecipeListService{
    private baseUrl = "https://dummyjson.com/recipes";
    constructor(private http:HttpClient){}

    getAllRecipes():Observable<any>{
        return this.http.get(this.baseUrl);
    }

    getAllTags():Observable<any>{
        return this.http.get(this.baseUrl+"/tags");
    }

    getRecipeById(id:number):Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    getRecipeByTags(tagName:string):Observable<any>{
        return this.http.get(`${this.baseUrl}/tag/${tagName}`)
    }

    getSearchedRecipes(searchedVal:string):Observable<any>{
        return this.http.get(`${this.baseUrl}/search?q=${searchedVal}`)
    }

    saveRecipe(data:any):Observable<any>{
        console.log("Save recipe data called")
        return this.http.post(`${this.baseUrl}/add`,data)
    }

} 