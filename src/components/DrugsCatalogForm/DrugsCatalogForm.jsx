import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { clearFilter, setFilter } from 'redux/drugs/slice';
import {
  FormWrapper,
  LabelWrapp,
  InputWrapp,
  InputFrom,
  InputTo,
  SearchButton,
  ResetButton,
} from './DrugsCatalogForm.styled';

export const DrugsCatalogForm = () => {
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(setFilter({ from: fromPrice, to: toPrice }));
  };

  const handleResetFilters = () => {
    dispatch(clearFilter());
    setFromPrice('');
    setToPrice('');
  };
  return (
    <>
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
            <ResetButton type="button" onClick={handleResetFilters}>
              Reset
            </ResetButton>
          </FormWrapper>
        </Form>
      </Formik>
    </>
  );
};
