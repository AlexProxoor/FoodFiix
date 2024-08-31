import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecipeById, fetchIngredientData } from "api/api";
import { Recipe as RecipeType } from "constans/types/recipeTypes";

const ingredientCache: { [key: string]: string } = {};

export const useRecipe = (id: string | undefined) => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [ingredientImages, setIngredientImages] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const data = await fetchRecipeById(id);
          if (!data.recipe) {
            navigate("/not-found");
            return;
          }
          setRecipe(data.recipe);
          setError(null);

          const images: { [key: string]: string } = {};
          for (const ingredient of data.recipe.ingredients) {
            if (ingredientCache[ingredient.food]) {
              images[ingredient.food] = ingredientCache[ingredient.food];
            } else {
              const imageUrl = await fetchIngredientData(ingredient.food);
              if (imageUrl) {
                ingredientCache[ingredient.food] = imageUrl;
                images[ingredient.food] = imageUrl;
              }
            }
          }
          setIngredientImages(images);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
          setLoading(false);
        }
      };

      fetchRecipe();
    }
  }, [id, navigate]);

  return { recipe, error, loading, ingredientImages };
};
