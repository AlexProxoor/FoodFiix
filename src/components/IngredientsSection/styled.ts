import styled from "styled-components";

export const IngredientsWrapper = styled.div`
  background: linear-gradient(
    135deg,
    #27355a 0%,
    #27355a 40%,
    #2b395d 60%,
    #334063 80%,
    #3b4766 100%
  );
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.large};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spacing.large};
  width: 100%;
  max-width: 500px;

  h2 {
    margin-top: 0;
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-bottom: ${(props) => props.theme.spacing.medium};
    font-family: ${(props) => props.theme.fonts.playfairDisplay};
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  @media (max-width: 1200px) {
    max-width: 450px;
    padding: ${(props) => props.theme.spacing.medium};

    h2 {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }

    ul {
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }

  @media (max-width: 992px) {
    max-width: 400px;
    padding: ${(props) => props.theme.spacing.medium};

    h2 {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }

    ul {
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: ${(props) => props.theme.spacing.medium};
    margin-top: ${(props) => props.theme.spacing.medium};

    h2 {
      font-size: ${(props) => props.theme.fontSizes.small};
    }

    ul {
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }
`;

export const IngredientPhotosTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-family: ${(props) => props.theme.fonts.playfairDisplay};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spacing.large};
  margin-bottom: ${(props) => props.theme.spacing.medium};

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  @media (max-width: 992px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export const IngredientItem = styled.li`
  margin-bottom: ${(props) => props.theme.spacing.small};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 300;
  color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  position: relative;
  padding-left: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.fonts.poppins};

  &:before {
    content: "";
    width: ${(props) => props.theme.spacing.small};
    height: ${(props) => props.theme.spacing.small};
    border: 2px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  @media (max-width: 992px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const IngredientImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.small};
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.medium};

  @media (max-width: 768px) {
    gap: ${(props) => props.theme.spacing.xsmall};
    margin-top: ${(props) => props.theme.spacing.small};
  }
`;

export const IngredientImage = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: ${(props) => props.theme.borderRadius.small};

  @media (max-width: 768px) {
    max-width: 80px;
  }
`;
