import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";
import { FaSearch } from "react-icons/fa";

export const StyledFormContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${(props) => props.theme.spacing.large};

  @media (max-width: 1200px) {
    padding: 0 ${(props) => props.theme.spacing.medium};
  }

  @media (max-width: 768px) {
    padding: 0 ${(props) => props.theme.spacing.small};
  }

  @media (max-width: 480px) {
    padding: 0 ${(props) => props.theme.spacing.small};
  }

  @media (max-width: 390px) {
    padding: 0 ${(props) => props.theme.spacing.xsmall};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  gap: ${(props) => props.theme.spacing.medium};

  @media (max-width: 390px) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.small};
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
  padding-right: 40px;
  border-radius: ${(props) => props.theme.borderRadius.large};
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  background-color: ${(props) => props.theme.colors.text};
  color: #fffff;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts.inter};

  &::placeholder {
    color: #ccc;
    font-size: ${(props) => props.theme.fontSizes.medium};

    @media (max-width: 390px) {
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.borderColor};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.borderColor};
  }

  @media (max-width: 390px) {
    font-size: ${(props) => props.theme.fontSizes.small};
    padding: ${(props) => props.theme.spacing.small};
    margin: 0;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: ${(props) => props.theme.spacing.medium};
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.borderColor};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.medium};

  @media (max-width: 390px) {
    font-size: ${(props) => props.theme.fontSizes.small};
    right: ${(props) => props.theme.spacing.small};
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: ${(props) => props.theme.spacing.xsmall};
  margin-bottom: ${(props) => props.theme.spacing.small};

  @media (max-width: 390px) {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
  }
`;
