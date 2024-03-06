import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Wrapper,
  List,
  Item,
  ImgWrapp,
  DescriptionWrapp,
  Img,
  Name,
  Group,
  Price,
  Button,
  Text,
} from './DrugsCatalog.styled';
import { selectDrugs, selectIsLoading } from 'redux/drugs/selectors';
import { fetchOneDrugById } from 'redux/cart/operations';
import { Loader } from 'components/Loader/Loader';
import { selectInCart } from 'redux/cart/selectors';

export const DrugsCatalog = () => {
  const dispatch = useDispatch();

  const drugs = useSelector(selectDrugs);
  const inCart = useSelector(selectInCart);
  const isLoading = useSelector(selectIsLoading);

  const handleAddInOrder = id => {
    const isInCart = inCart.find(drug => drug._id === id);
    if (isInCart) {
      Notify.failure('Drug is already in cart!');
      return;
    }
    dispatch(fetchOneDrugById(id));
    Notify.success('Drugs added to cart!');
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <Wrapper>
        {drugs.length === 0 ? (
          <Text>
            A list of available drugs will be displayed here. Please choose a
            shop.
          </Text>
        ) : (
          <List>
            {drugs.map(({ img, name, group, price, _id }) => (
              <Item key={_id}>
                <ImgWrapp>
                  <Img src={img} alt={name} />
                </ImgWrapp>
                <DescriptionWrapp>
                  <Name>{name}</Name>
                  <Group>{group}</Group>
                  <Price>{price} ₴</Price>
                  <Button onClick={() => handleAddInOrder(_id)}>
                    Add to Cart
                  </Button>
                </DescriptionWrapp>
              </Item>
            ))}
          </List>
        )}
      </Wrapper>
    </Container>
  );
};
