import { useNavigate } from "react-router-dom";
import { RecipeCardProps } from "constans/types/recipeCardTypes";
import { RecipeCardContainer } from "./styled";

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const recipeId = recipe.uri.split("#recipe_")[1];
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <RecipeCardContainer onClick={handleClick}>
      <div>
        <img src={recipe.image} alt={recipe.label} />
      </div>
      <h3>{recipe.label}</h3>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
