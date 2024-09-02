import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.large};
  text-align: left;
  position: relative;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.spaceGrotesk};
  margin-left: ${(props) => props.theme.spacing.large};

  @media (max-width: 769px) {
    margin-left: ${(props) => props.theme.spacing.medium};
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  @media (max-width: 360px) {
    margin-left: ${(props) => props.theme.spacing.small};
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.small};
  position: relative;
  margin-right: ${(props) => props.theme.spacing.large};

  @media (max-width: 360px) {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  width: ${(props) => props.theme.spacing.large};
  height: ${(props) => props.theme.spacing.large};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: ${(props) => props.theme.spacing.small};
    background-color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 360px) {
    display: flex;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  top: ${(props) => props.theme.spacing.large};
  right: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.small};
  z-index: 1000;
`;

export const MenuItem = styled.div`
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;
