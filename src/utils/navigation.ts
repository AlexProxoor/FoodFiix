import { useNavigate } from "react-router-dom";
import { ROUTES } from "constans";

export const useNavigateToRecipeDetail = () => {
  const navigate = useNavigate();

  return (recipeId: string) => {
    navigate(`${ROUTES.RECIPE_DETAIL.replace(":id", recipeId)}`);
  };
};
