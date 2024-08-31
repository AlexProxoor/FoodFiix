import React from "react";
import { Centered, RecipeListContainer } from "./styled";
import RecipeCard from "./RecipeCard";
import { RecipeListProps } from "constans/types/recipeListTypes";

const RecipeList: React.FC<RecipeListProps> = ({ data, totalHits }) => {
  return (
    <div>
      <Centered>
        <h2>Found {totalHits} dishes</h2>
      </Centered>

      <RecipeListContainer>
        {data.hits.length > 0 ? (
          data.hits.map((hit) => (
            <RecipeCard key={hit.recipe.uri} recipe={hit.recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </RecipeListContainer>
    </div>
  );
};

export default RecipeList;
