export interface Ingredient {
  quantity: string;
  measure: string;
  food: string;
}

export interface IngredientImages {
  [key: string]: string;
}

export interface IngredientsSectionProps {
  ingredients: Ingredient[];
  ingredientImages: IngredientImages;
}
