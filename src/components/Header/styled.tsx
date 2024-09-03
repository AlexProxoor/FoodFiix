import styled from "styled-components";
import Logo from "assets/logoIcon.svg";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  text-align: left;
  position: relative;
`;

export const Title = styled.h1`
  color: white;
  font-size: 14px;
  font-weight: 400;
  font-family: "Arial", sans-serif;
  margin-left: 100px;
  position: relative; 
  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(${Logo});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%); 
    left: -34px; 
  }

  @media (max-width: 769px) {
    margin-left: 60px;
    font-size: 12px;
  }

  @media (max-width: 360px) {
    margin-left: 10px;
    font-size: 12px;

      &::before {
      width: 16px; 
      height: 16px; 
      left: -20px; 
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  font-size: 14px;
  position: relative;
  margin-right: 50px;

  @media (max-width: 360px) {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background-color: white;
  }

  @media (max-width: 360px) {
    display: flex;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  z-index: 1000;
`;

export const MenuItem = styled.div`
  color: white;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #1f2a45;
  }
`;
