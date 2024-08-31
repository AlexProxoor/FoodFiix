import { useState, useEffect } from "react";
import axios from "axios";
import { fetchRecipes } from "api/api";
import { RecipeData, ApiResponse, Hit } from "constans/types/apiTypes";

export const useRecipes = (initialQuery: string) => {
  const [data, setData] = useState<RecipeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [selectedDiet, setSelectedDiet] = useState<string>("");
  const [selectDishType, setSelectDishType] = useState<string>("");

  useEffect(() => {
    performSearch(initialQuery);
  }, [initialQuery]);

  const performSearch = (
    searchQuery: string,
    diet: string = "",
    dishtype: string = "",
  ) => {
    setLoading(true);
    fetchRecipes(searchQuery, diet, dishtype)
      .then((response: ApiResponse<Hit>) => {
        setData(response as RecipeData);
        setNextPageUrl(response._links?.next?.href || null);
        setError(null);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Unknown error");
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadMoreRecipes = () => {
    if (nextPageUrl) {
      setLoading(true);
      axios
        .get(nextPageUrl)
        .then((response) => {
          setData((prevData: RecipeData | null) => ({
            ...prevData!,
            hits: [...(prevData?.hits || []), ...response.data.hits],
          }));
          setNextPageUrl(response.data._links?.next?.href || null);
          setError(null);
        })
        .catch((err) => {
          setError(err instanceof Error ? err.message : "Unknown error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return {
    data,
    error,
    loading,
    loadMoreRecipes,
    setSearchQuery: (query: string) =>
      performSearch(query, selectedDiet, selectDishType),
    setSelectedDiet,
    setSelectDishType,
  };
};
