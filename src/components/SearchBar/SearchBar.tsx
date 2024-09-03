import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  StyledFormContainer,
  StyledForm,
  StyledField,
  StyledErrorMessage,
  SearchIcon,
} from "./styled";
import { SearchBarProps } from "constans/types/searchTypes";

const InputRecipeSchema = Yup.object().shape({
  query: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .matches(
      /^[a-zA-Z0-9._-]+$/,
      "Invalid characters! Allowed characters are: a-z, A-Z, 0-9, '-', '_', '.'",
    )
    .required("Required to fill out!"),
});

const SearchBar: React.FC<SearchBarProps> = ({ handleSubmit, loading }) => {
  const handleFormSubmit = (
    values: { query: string },
    actions: FormikHelpers<{ query: string }>,
  ) => {
    handleSubmit(values, actions);
  };

  return (
    <StyledFormContainer>
      <Formik
        initialValues={{ query: "" }}
        validationSchema={InputRecipeSchema}
        onSubmit={handleFormSubmit}
      >
        {({ submitForm }) => (
          <StyledForm>
            <StyledField
              type="text"
              name="query"
              placeholder="Search Your Favorite Food"
            />
            <SearchIcon
              onClick={(e) => {
                e.preventDefault();
                submitForm();
              }}
            />
            <StyledErrorMessage name="query" component="div" />
          </StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

export default SearchBar;
