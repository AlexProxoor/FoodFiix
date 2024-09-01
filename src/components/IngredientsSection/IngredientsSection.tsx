import {
  IngredientsWrapper,
  IngredientImagesContainer,
  IngredientImage,
  IngredientItem,
  IngredientPhotosTitle,
} from "./styled";
import { IngredientsSectionProps } from "constans/types/ingredientTypes";
import { MESSAGES } from "constans";

const IngredientsSection: React.FC<IngredientsSectionProps> = ({
  ingredients,
  ingredientImages,
}) => {
  const renderIngredientList = () => {
    if (ingredients.length === 0) {
      return <p>{MESSAGES.NO_INGREDIENTS}</p>;
    }
    return ingredients.map((ingredient) => (
      <IngredientItem key={ingredient.food}>
        {ingredient.quantity} {ingredient.measure} {ingredient.food}
      </IngredientItem>
    ));
  };

  const renderIngredientImages = () => {
    if (Object.keys(ingredientImages).length === 0) {
      return <p>{MESSAGES.NO_IMAGES}</p>;
    }
    return Object.keys(ingredientImages).map((ingredient) => (
      <IngredientImage
        key={ingredient}
        src={ingredientImages[ingredient]}
        alt={ingredient}
      />
    ));
  };

  if (ingredients[0]?.food === "yogurt") {
    return <p>{MESSAGES.YOGURT_NOT_AVAILABLE}</p>;
  }

  return (
    <>
      <IngredientsWrapper>
        <h2>Ingredients</h2>
        <ul>{renderIngredientList()}</ul>
      </IngredientsWrapper>

      <IngredientPhotosTitle>Products</IngredientPhotosTitle>
      <IngredientImagesContainer>
        {renderIngredientImages()}
      </IngredientImagesContainer>
    </>
  );
};

export default IngredientsSection;
