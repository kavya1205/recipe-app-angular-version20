import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeListService } from '../../services/recipe-list.service';

@Component({
  selector: 'app-add-recipe',
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe.html',
  styleUrl: './add-recipe.css',
})
export class AddRecipe {

  recipeForm = new FormGroup({
    name: new FormControl(),
    ingredients: new FormControl(),
    instructions:new FormControl()
  })

  form!: FormGroup;

constructor(private recipeDetailService: RecipeListService, private fb: FormBuilder) {
  this.form = this.fb.group({
    recipeName: ['', Validators.required],
    ingredients: this.fb.array([])
  });
}

  // getter so template can access it cleanly
  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  // adds a new input field
  addIngredient() {
    this.ingredients.push(this.fb.control('', Validators.required));
  }

  // removes a field at a specific index
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
    // { recipeName: 'Pasta', ingredients: ['Tomato', 'Garlic', 'Pasta'] }
  }

saveRecipeData(){
  this.recipeDetailService.saveRecipe(this.recipeForm.value).subscribe({
    next:(res)=>{
      console.log("res",res)
    },
    error:(err:any)=>{
      console.log("err===>",err)
    }
  });
  //console.log(this.recipeForm.value)
}

}

