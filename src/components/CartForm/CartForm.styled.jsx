import styled from 'styled-components';

import { Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  height: 430px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 10px;
  background-color: rgba(71, 201, 39, 0.3);
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 550px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 550px;
    margin-bottom: 0;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 250px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`;

export const Label = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.1;
  color: var(--main-text-color);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled(Field)`
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1;
  color: var(--main-text-color);
  height: 40px;
  border-color: transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 0 10px;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
export const ErrorWrapper = styled.span`
  position: absolute;
  bottom: -20px;
  right: 0;
  font-family: inherit;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.1;
  color: #ff4331;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 70px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 70px;
  }
`;

export const TotalPrice = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.1;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 25px;
    width: 250px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 25px;
    width: 250px;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.1;
  color: var(--main-text-color);
  border: none;
  border-radius: 10px;
  background-color: var(--accent-color);
  padding: 10px 20px;
  cursor: pointer;

  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-color);
  }
`;
