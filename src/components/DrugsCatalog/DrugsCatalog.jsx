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
import { selectIsLoading, selectfilteredDrugs } from 'redux/drugs/selectors';
import { fetchOneDrugById } from 'redux/cart/operations';
import { Loader } from 'components/Loader/Loader';
import { selectInCart } from 'redux/cart/selectors';
import { DrugsCatalogForm } from 'components/DrugsCatalogForm/DrugsCatalogForm';

export const DrugsCatalog = () => {
  const dispatch = useDispatch();

  const drugs = useSelector(selectfilteredDrugs);
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
        <DrugsCatalogForm />
        {drugs.length === 0 && !isLoading ? (
          <Text>The drugs list is now empty.</Text>
        ) : (
          <>
            {!isLoading && (
              <>
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
              </>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
};
