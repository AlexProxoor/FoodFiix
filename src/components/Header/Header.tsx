import { useState } from "react";
import {
  BackButton,
  HeaderContainer,
  Title,
  BurgerIcon,
  BurgerMenu,
  MenuItem,
} from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "constans";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showBackButton = location.pathname.startsWith("/recipe/");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Title>Modsen recipe</Title>
      {showBackButton && (
        <>
          <BackButton onClick={() => navigate(ROUTES.HOME)}>Home</BackButton>
          <BurgerIcon onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </BurgerIcon>
          {isMenuOpen && (
            <BurgerMenu>
              <MenuItem onClick={() => navigate(ROUTES.HOME)}>Home</MenuItem>
            </BurgerMenu>
          )}
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
