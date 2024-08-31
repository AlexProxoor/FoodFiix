import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.large};
  position: relative;
  bottom: 0;
  width: 100%;

  p {
    margin: 0;
    font-size: 14px;
  }
`;
