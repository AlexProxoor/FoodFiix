import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "pages/HomePage/HomePage";
import NotFound from "pages/NotFound/NotFound";
import RecipeDetailPage from "pages/RecipeDetailPage/RecipeDetailPage";
import { theme } from "themes/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />{" "}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
