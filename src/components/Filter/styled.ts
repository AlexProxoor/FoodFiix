import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing.large};
  display: flex;
  gap: ${(props) => props.theme.spacing.large};
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.theme.spacing.small};
  }
`;

export const StyledSelect = styled.select`
  font-family: ${(props) => props.theme.fonts.roboto};
  width: 25%;
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.large};
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  background-color: ${(props) => props.theme.colors.text};
  color: #000;
  font-size: ${(props) => props.theme.fontSizes.medium};

  @media (max-width: 390px) {
    width: 100%;
    margin-bottom: ${(props) => props.theme.spacing.small};
    &:first-child {
      margin-top: ${(props) => props.theme.spacing.large};
    }
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.borderColor};
    outline: none;
    box-shadow: 0 0 5px ${(props) => props.theme.colors.borderColor};
  }
`;

export const StyledOption = styled.option`
  font-family: ${(props) => props.theme.fonts.roboto};
`;
