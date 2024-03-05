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
} from './DrugsCatalog.styled';
import { selectDrugs } from 'redux/drugs/selectors';
import { fetchOneDrugById } from 'redux/cart/operations';

export const DrugsCatalog = () => {
  const dispatch = useDispatch();

  const drugs = useSelector(selectDrugs);

  const handleAddInOrder = id => {
    dispatch(fetchOneDrugById(id));
  };

  return (
    <Container>
      <Wrapper>
        <List>
          {drugs.map(({ img, name, group, price, _id }) => (
            <Item key={_id}>
              <ImgWrapp>
                <Img src={img} alt="" />
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
      </Wrapper>
    </Container>
  );
};
