import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  Header,
  NavList,
  ListItem,
  Line,
  Container,
  Link,
  Wrapper,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <nav>
            <NavList>
              <ListItem>
                <Link to="/">Shop</Link>
                <Line />
              </ListItem>
              <ListItem>
                <Link to="/cart">Shopping Cart</Link>
              </ListItem>
            </NavList>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </Wrapper>
    </>
  );
};
