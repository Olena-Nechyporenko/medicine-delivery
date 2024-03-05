import styled from 'styled-components';

import { Field } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  height: 500px;
  background-color: green;
  padding: 15px 50px 15px 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled(Field)`
  height: 40px;
`;
