import styled from "styled-components";

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${(props) => props.theme.spacing.large};
  margin-top: ${(props) => props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};

  &::before {
    content: "|";
    margin-right: ${(props) => props.theme.spacing.small};
    color: ${(props) => props.theme.colors.borderColor};
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  h2 {
    margin: 0;
    font-size: ${(props) => props.theme.fontSizes.large};

    @media (max-width: 1200px) {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }

    @media (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes.small};
    }

    @media (max-width: 480px) {
      font-size: ${(props) => props.theme.fontSizes.small};
    }

    @media (max-width: 390px) {
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }
`;

export const RecipeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.spacing.medium};
  justify-content: center;
  padding: 0 ${(props) => props.theme.spacing.large};
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const RecipeCardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.text};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.theme.spacing.medium};
  text-align: center;
  transition: transform 0.3s ease;
  font-family: ${(props) => props.theme.fonts.inter};

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: ${(props) => props.theme.borderRadius.medium};
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: ${(props) => props.theme.spacing.small};
  }

  h3 {
    margin: 0;
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
`;
