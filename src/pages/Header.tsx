import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ヘッダー全体のスタイル
const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px 20px;
`;

// ナビゲーションのスタイル
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

// リストのスタイル
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
`;

// リンクのスタイル
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #f39c12;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <li>
            <StyledLink to="/">App</StyledLink>
          </li>
          <li>
            <StyledLink to="/props">ApPropsp</StyledLink>
          </li>
          <li>
            <StyledLink to="/state">State</StyledLink>
          </li>
          <li>
            <StyledLink to="/modal">Modal</StyledLink>
          </li>
          <li>
            <StyledLink to="/ref">Ref</StyledLink>
          </li>
          <li>
            <StyledLink to="/forwardRef">ForwardRef</StyledLink>
          </li>
          <li>
            <StyledLink to="/effect">Effect</StyledLink>
          </li>
          <li>
            <StyledLink to="/layoutEffect">LayoutEffect</StyledLink>
          </li>
          <li>
            <StyledLink to="/style">Style</StyledLink>
          </li>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
