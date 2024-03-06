import { Formik, Form } from 'formik';
import {
  FormWrapper,
  LabelWrapp,
  InputWrapp,
  InputFrom,
  InputTo,
  SearchButton,
} from './DrugsCatalogForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/drugs/slice';

export const DrugsCatalogForm = () => {
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(setFilter({ from: fromPrice, to: toPrice }));
    setFromPrice('');
    setToPrice('');
  };

  return (
    <Formik
      onSubmit={handleFilter}
      initialValues={{ from: fromPrice, to: toPrice }}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <InputWrapp>
            <LabelWrapp htmlFor="from">
              Price from
              <InputFrom
                type="number"
                name="from"
                value={fromPrice}
                placeholder="From"
                onChange={e => setFromPrice(e.target.value)}
              />
            </LabelWrapp>
            <LabelWrapp htmlFor="to">
              Price to
              <InputTo
                type="number"
                name="to"
                value={toPrice}
                placeholder="To"
                onChange={e => setToPrice(e.target.value)}
              />
            </LabelWrapp>
          </InputWrapp>
          <SearchButton type="submit">Search</SearchButton>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
