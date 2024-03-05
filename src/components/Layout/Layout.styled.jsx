import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Header = styled.header`
  padding: 0 15px;
  border-bottom: 1px solid black;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 20px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 25px;
`;

export const ListItem = styled.li`
  position: relative;
`;

export const Link = styled(NavLink)`
  display: block;
  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.1;
  color: var(--accent-color);
  padding: 20px 0;
  transition: all var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }
  &.active {
    color: var(--hover-color);
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--hover-color);
      margin-top: 5px;
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 30px;
  right: -25px;
  width: 25px;
  height: 2px;
  background-color: var(--secondary-text-color);
  transform: rotate(90deg);
`;

export const Container = styled.main`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px;
  }
`;
