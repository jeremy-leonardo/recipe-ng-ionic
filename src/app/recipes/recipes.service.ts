import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-1-1.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/8fc00a45259a49d49d9100a34f2087eb/BFV44742_PantryPasta_FB_Final.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  public getAllRecipes() {
    return [...this.recipes];
  }

  public getRecipe(recipeId: string) {
    return { ...this.recipes.find(recipe => recipe.id === recipeId) };
  }

  public deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }

}
