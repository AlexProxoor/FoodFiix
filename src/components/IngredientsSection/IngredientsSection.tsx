import React from "react";
import {
  IngredientsWrapper,
  IngredientImagesContainer,
  IngredientImage,
  IngredientItem,
  IngredientPhotosTitle,
} from "./styled";
import { IngredientsSectionProps } from "constans/types/ingredientTypes";

const IngredientsSection: React.FC<IngredientsSectionProps> = ({
  ingredients,
  ingredientImages,
}) => {
  if (ingredients[0]?.food === "yogurt") {
    return <p>Yogurt is not available.</p>;
  }

  return (
    <>
      <IngredientsWrapper>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <IngredientItem key={index}>
                {ingredient.quantity} {ingredient.measure} {ingredient.food}
              </IngredientItem>
            ))
          ) : (
            <p>No ingredients available.</p>
          )}
        </ul>
      </IngredientsWrapper>

      <IngredientPhotosTitle>Products</IngredientPhotosTitle>
      <IngredientImagesContainer>
        {Object.keys(ingredientImages).length > 0 ? (
          Object.keys(ingredientImages).map((ingredient) => (
            <IngredientImage
              key={ingredient}
              src={ingredientImages[ingredient]}
              alt={ingredient}
            />
          ))
        ) : (
          <p>No images available.</p>
        )}
      </IngredientImagesContainer>
    </>
  );
};

export default IngredientsSection;
