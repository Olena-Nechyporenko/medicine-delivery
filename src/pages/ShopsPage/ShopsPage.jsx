import { ShopsList } from 'components/ShopsList/ShopsList';
import { Wrapper } from './ShopsPage.styled';
import { DrugsCatalog } from 'components/DrugsCatalog/DrugsCatalog';

export default function ShopsPage() {
  return (
    <Wrapper>
      <ShopsList />
      <DrugsCatalog />
    </Wrapper>
  );
}
