import { CartForm } from 'components/CartForm/CartForm';
import { Wrapper } from './ShoppingCartPage.styled';
import { OrderedDrugsList } from 'components/OrderedDrugsList/OrderedDrugsList';

export default function ShoppingCartPage() {
  return (
    <Wrapper>
      <CartForm />
      <OrderedDrugsList />
    </Wrapper>
  );
}
