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

    getRecipeById(id:number):Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }


}