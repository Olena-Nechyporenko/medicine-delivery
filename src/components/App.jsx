import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const ShopsPage = lazy(() => import('../pages/ShopsPage/ShopsPage'));
const ShoppingCartPage = lazy(() =>
  import('../pages/ShoppingCartPage/ShoppingCartPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopsPage />} />
        <Route path="cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<ShopsPage />} />
      </Route>
    </Routes>
  );
};
