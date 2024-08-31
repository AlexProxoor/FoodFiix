export interface Recipe {
  label: string;
  image: string;
  uri: string;
}

export interface Hit {
  recipe: Recipe;
}

export interface RecipeData {
  hits: Hit[];
  count: number;
  _links?: {
    next?: {
      href: string;
    };
  };
}

export interface ApiResponse<T> {
  hits: T[];
  count: number;
  _links?: {
    next?: {
      href: string;
    };
  };
}
