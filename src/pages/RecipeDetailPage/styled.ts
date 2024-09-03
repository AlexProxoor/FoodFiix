import styled from "styled-components";
import Wether from "assets/wether.svg";
import Star from "assets/star.svg";

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
  padding: ${(props) => props.theme.spacing.large};

  @media (max-width: 1200px) {
    padding: ${(props) => props.theme.spacing.medium};
  }

  @media (max-width: 992px) {
    padding: ${(props) => props.theme.spacing.small};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacing.large};
  max-width: 1200px;
  width: 100%;
  align-items: stretch;

  @media (max-width: 1200px) {
    gap: ${(props) => props.theme.spacing.medium};
  }

  @media (max-width: 992px) {
    gap: ${(props) => props.theme.spacing.small};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => props.theme.spacing.large};
  padding-left: 90px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  overflow-y: auto;
  text-align: left;

  @media (max-width: 1200px) {
    padding: ${(props) => props.theme.spacing.medium};
    padding-left: 60px;
  }

  @media (max-width: 992px) {
    padding: ${(props) => props.theme.spacing.small};
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const MealType = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.poppins};
  margin-bottom: ${(props) => props.theme.spacing.small};
  color: #fdbd84;

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media (max-width: 992px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

export const RecipeTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  font-family: ${(props) => props.theme.fonts.playfairDisplay};
  font-weight: 700;
  margin: 0;
  margin-bottom: ${(props) => props.theme.spacing.xlarge};

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
  }

  @media (max-width: 992px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin-bottom: ${(props) => props.theme.spacing.large};
  }
`;

export const CaloriesAndCuisine = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: ${(props) => props.theme.spacing.large};
  font-family: ${(props) => props.theme.fonts.poppins};
  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing.large};
  }

  @media (max-width: 1200px) {
    & > *:not(:last-child) {
      margin-right: ${(props) => props.theme.spacing.medium};
    }
  }

  @media (max-width: 992px) {
    & > *:not(:last-child) {
      margin-right: ${(props) => props.theme.spacing.small};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: ${(props) => props.theme.spacing.small};
    }
  }
`;
export const Calories = styled.p`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(${Wether});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: ${(props) => props.theme.spacing.small};
  }

  span {
    margin-right: ${(props) => props.theme.spacing.small};
  }

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media (max-width: 992px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;
export const CuisineType = styled.p`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 0;
  font-stretch: expanded;

  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(${Star});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: ${(props) => props.theme.spacing.small};
  }

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media (max-width: 992px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

export const RecipeURL = styled.p`
  margin-top: ${(props) => props.theme.spacing.xlarge};

  a {
    font-size: ${(props) => props.theme.fontSizes.xxlarge};
    font-family: ${(props) => props.theme.fonts.playfairDisplay};

    color: ${(props) => props.theme.colors.text};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1200px) {
    margin-top: ${(props) => props.theme.spacing.large};

    a {
      font-size: ${(props) => props.theme.fontSizes.xlarge};
    }
  }

  @media (max-width: 992px) {
    margin-top: ${(props) => props.theme.spacing.medium};

    a {
      font-size: ${(props) => props.theme.fontSizes.large};
    }
  }

  @media (max-width: 768px) {
    margin-top: ${(props) => props.theme.spacing.medium};

    a {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    order: -1;
    width: 100%;
  }
`;

export const RecipeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${(props) => props.theme.borderRadius.medium};

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
    display: block;
  }
`;
