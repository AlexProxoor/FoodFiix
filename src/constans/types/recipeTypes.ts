export interface Ingredient {
  quantity: string;
  measure: string;
  food: string;
}

export interface Recipe {
  label: string;
  image: string;
  mealType: string;
  calories: number;
  cuisineType: string[];
  ingredients: Ingredient[];
  url: string;
}
