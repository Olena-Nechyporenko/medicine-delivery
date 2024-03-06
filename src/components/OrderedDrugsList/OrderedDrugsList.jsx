import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectInCart } from 'redux/cart/selectors';
import { changeQuantity, removeFromCart } from 'redux/cart/slice';
import {
  Container,
  Wrapper,
  List,
  Item,
  ImgWrapp,
  Img,
  DescriptionWrapp,
  Name,
  Price,
  InputWrapp,
  Input,
  Button,
  Text,
} from './OrderedDrugsList.styled';

export const OrderedDrugsList = () => {
  const dispatch = useDispatch();

  const inCart = useSelector(selectInCart);

  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id));
    Notify.success('Successfully removed from cart');
  };

  const handlechangeQuantity = data => {
    dispatch(changeQuantity(data));
  };

  return (
    <Container>
      <Wrapper>
        {inCart.length === 0 ? (
          <Text>Your shopping cart is currently empty.</Text>
        ) : (
          <List>
            {inCart.map(({ _id, img, name, price, quantity }) => (
              <Item key={_id}>
                <ImgWrapp>
                  <Img src={img} alt="" />
                </ImgWrapp>
                <DescriptionWrapp>
                  <Name>{name}</Name>
                  <Price>Price: {price} ₴</Price>
                  <InputWrapp>
                    Quantity:
                    <Input
                      type="number"
                      min={0}
                      value={quantity}
                      onChange={e =>
                        handlechangeQuantity({
                          id: _id,
                          quantity: Number(e.target.value),
                        })
                      }
                    />
                  </InputWrapp>
                  <Button onClick={() => handleRemoveFromCart(_id)}>
                    Remove from ordered
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
