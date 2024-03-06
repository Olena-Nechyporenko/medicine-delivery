import styled from 'styled-components';
import { Field } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
  margin-bottom: 10px;
`;

export const LabelWrapp = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  color: var(--secondary-text-color);
`;

export const InputWrapp = styled.div`
  display: flex;
  gap: 10px;
  width: 250px;
`;

export const InputFrom = styled(Field)`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: var(--main-text-color);
  border-radius: 10px;
  border: 1px solid rgba(18, 20, 23, 0.5);
  width: 100px;
  height: 28px;
  background: var(--input-color);
  padding-left: 14px;

  &::placeholder {
    font-family: inherit;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.1;
    color: var(--main-text-color);
  }
`;

export const InputTo = styled(Field)`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: var(--main-text-color);
  border-radius: 10px;
  border: 1px solid rgba(18, 20, 23, 0.5);
  width: 100px;
  height: 28px;
  background: var(--input-color);
  padding-left: 14px;

  &::placeholder {
    font-family: inherit;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.1;
    color: var(--main-text-color);
  }
`;

export const SearchButton = styled.button`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.1;
  color: var(--main-text-color);
  border-radius: 10px;
  border: none;
  width: 120px;
  height: 32px;
  background: var(--accent-color);
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-color);
  }
`;
