import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../constants';

export const Nav = () => {
  return (
    <NavContainer>
      <Logo>
        <b>CAPA</b> 파트너스
      </Logo>
      <MenuList>
        <li>가공업체</li>
        <li>로그아웃</li>
      </MenuList>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 70px;
  background: ${COLOR.BLUE};
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;

  b {
    color: #fff;
  }
`;

const MenuList = styled.ul`
  display: flex;
  color: #fff;

  li {
    color: #fff;
    cursor: pointer;

    & + li {
      position: relative;
      margin-left: 20px;
      padding-left: 20px;

      &::before {
        content: '';
        width: 1px;
        height: 16px;
        background-color: #fff;
        position: absolute;
        left: 0;
      }
    }
  }
`;
