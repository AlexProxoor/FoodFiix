import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${(props) => props.theme.spacing.large};
`;

export const FooterWrapper = styled.footer`
  margin-top: auto;
`;

export const TitleSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  @media (max-width: 390px) {
    display: none;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid ${(props) => props.theme.colors.lightGray};
  border-right: 4px solid ${(props) => props.theme.colors.lightGray};
  border-bottom: 4px solid ${(props) => props.theme.colors.lightGray};
  border-left: 4px solid ${(props) => props.theme.colors.borderColor};
  background: transparent;
  width: ${(props) => props.theme.spacing.large};
  height: ${(props) => props.theme.spacing.large};
  border-radius: 50%;
`;

export const CenteredSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.theme.spacing.medium} auto;
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.large};
  cursor: pointer;
  box-shadow: 0 4px 15px #007bff;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 6px 20px #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
