import { useParams } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import ErrorBoundary from "pages/ErrorBoundary";
import NotFound from "pages/NotFound/NotFound";
import IngredientsSection from "components/IngredientsSection/IngredientsSection";
import { useRecipe } from "hooks/useRecipe";
import {
  OuterContainer,
  InnerContainer,
  InfoContainer,
  ImageContainer,
  RecipeImage,
  MealType,
  RecipeTitle,
  Calories,
  CuisineType,
  CaloriesAndCuisine,
  RecipeURL,
} from "./styled";
import { MESSAGES } from "constans";

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { recipe, error, loading, ingredientImages } = useRecipe(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <main>
        {recipe ? (
          <OuterContainer>
            <InnerContainer>
              <ErrorBoundary>
                <InfoContainer>
                  <MealType>
                    <strong>Meal type - </strong> {recipe.mealType}
                  </MealType>
                  <RecipeTitle>{recipe.label}</RecipeTitle>
                  <CaloriesAndCuisine>
                    <Calories>
                      <span>{Math.round(recipe.calories)} </span>
                      сalories
                    </Calories>
                    <CuisineType>
                      <span>Cuisine Type - </span>{" "}
                      {recipe.cuisineType.join(", ")}
                    </CuisineType>
                  </CaloriesAndCuisine>
                  <IngredientsSection
                    ingredients={recipe.ingredients}
                    ingredientImages={ingredientImages}
                  />
                  <RecipeURL>
                    <a
                      href={recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Recipe link
                    </a>
                  </RecipeURL>
                </InfoContainer>
                <ImageContainer>
                  <RecipeImage src={recipe.image} alt={recipe.label} />
                </ImageContainer>
              </ErrorBoundary>
            </InnerContainer>
          </OuterContainer>
        ) : (
          <p>{MESSAGES.NO_RECIPES_FOUND}</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RecipeDetailPage;
