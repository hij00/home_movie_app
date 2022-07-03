import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: #333; */
  padding: 0 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;
const Logo = styled.h3`
  font-size: 28px;
  font-weight: 900;
`;
const MenuWrap = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;
const Menu = styled.li`
  font-size: 22px;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo>
        <Link to="/">Logo</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to="/sub1">menu</Link>
        </Menu>
        <Menu>
          <Link to="/sub2">menu</Link>
        </Menu>
      </MenuWrap>
    </HeaderWrap>
  );
};
