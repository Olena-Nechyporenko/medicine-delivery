import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  List,
  Item,
  ImgWrapp,
  Img,
  Name,
  Price,
  Button,
} from './OrderedDrugsList.styled';
import { selectInCart } from 'redux/cart/selectors';
import { changeQuantity, removeFromCart } from 'redux/cart/slice';

export const OrderedDrugsList = () => {
  const dispatch = useDispatch();
  const inCart = useSelector(selectInCart);

  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id));
  };

  const handlechangeQuantity = data => {
    dispatch(changeQuantity(data));
  };

  return (
    <Wrapper>
      <List>
        {inCart.map(({ _id, img, name, price, quantity }) => (
          <Item key={_id}>
            <ImgWrapp>
              <Img src={img} alt="" />
            </ImgWrapp>
            <Name>{name}</Name>
            <Price>{price} ₴</Price>
            <input
              type="number"
              value={quantity}
              onChange={e =>
                handlechangeQuantity({
                  id: _id,
                  quantity: Number(e.target.value),
                })
              }
            />
            <Button onClick={() => handleRemoveFromCart(_id)}>
              Remove from ordered
            </Button>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
