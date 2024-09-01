import SearchBar from "components/SearchBar/SearchBar";
import RecipeList from "components/RecipeList/RecipeList";
import Filter from "components/Filter/Filter";
import Header from "components/Header";
import Footer from "components/Footer";
import {
  Spinner,
  CenteredSpinnerWrapper,
  LoadMoreButton,
  TitleSearch,
  AppContainer,
  MainContent,
} from "./styled";
import { useRecipes } from "hooks/useRecipes";

const HomePage: React.FC = () => {
  const {
    data,
    error,
    loading,
    loadMoreRecipes,
    setSearchQuery,
    setSelectedDiet,
    setSelectDishType,
  } = useRecipes("pasta");

  const handleSearchSubmit = (
    values: { query: string },
    actions: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSearchQuery(values.query);
    actions.setSubmitting(false);
  };

  return (
    <AppContainer>
      <Header />
      <MainContent>
        <TitleSearch>
          <h1>Discover Recipe & Delicious Food</h1>
        </TitleSearch>

        <SearchBar handleSubmit={handleSearchSubmit} loading={loading} />
        <Filter
          selectedDiet={""}
          setSelectedDiet={setSelectedDiet}
          selectDishType={""}
          setSelectDishType={setSelectDishType}
        />
        {error && <p>Error: {error}</p>}
        {loading && (
          <CenteredSpinnerWrapper>
            <Spinner />
          </CenteredSpinnerWrapper>
        )}
        {data && (
          <>
            <RecipeList data={data} totalHits={data.count || 0} />
            {data._links?.next?.href && (
              <LoadMoreButton onClick={loadMoreRecipes} disabled={loading}>
                {loading ? <Spinner /> : "Show more"}
              </LoadMoreButton>
            )}
          </>
        )}
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default HomePage;
