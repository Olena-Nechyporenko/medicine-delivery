import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Wrapper,
  Title,
  List,
  Item,
  Button,
} from './ShopsList.styled';
import { selectShops } from 'redux/drugs/selectors';
import { useEffect, useState } from 'react';
import { fetchDrugs, fetchShops } from 'redux/drugs/operations';

export const ShopsList = () => {
  const [isActive, setIsActive] = useState('');

  const dispatch = useDispatch();
  const shops = useSelector(selectShops);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  const handleClick = data => {
    setIsActive(data.name);
    dispatch(fetchDrugs(data.id));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Shops</Title>
        <List>
          {shops.map(shop => (
            <Item key={shop._id}>
              <Button
                type="button"
                disabled={shop.name === isActive}
                onClick={() => handleClick({ id: shop._id, name: shop.name })}
              >
                {shop.name}
              </Button>
            </Item>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};
