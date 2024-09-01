import { Centered, RecipeListContainer } from "./styled";
import RecipeCard from "./RecipeCard";
import { RecipeListProps } from "constans/types/recipeListTypes";
import { MESSAGES } from "constans";

const RecipeList: React.FC<RecipeListProps> = ({ data, totalHits }) => {
  const renderRecipes = () => {
    return data.hits.map((hit) => (
      <RecipeCard key={hit.recipe.uri} recipe={hit.recipe} />
    ));
  };

  const renderNoRecipesMessage = () => {
    return <p>{MESSAGES.NO_RECIPES_FOUND}</p>;
  };

  return (
    <div>
      <Centered>
        <h2>Found {totalHits} dishes</h2>
      </Centered>

      <RecipeListContainer>
        {data.hits.length > 0 ? renderRecipes() : renderNoRecipesMessage()}
      </RecipeListContainer>
    </div>
  );
};

export default RecipeList;
