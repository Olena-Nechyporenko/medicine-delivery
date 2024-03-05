import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import {
  Wrapper,
  FormContainer,
  FormWrapper,
  Label,
  Input,
  ErrorWrapper,
  TotalPriceWrapper,
  TotalPrice,
  Button,
} from './CartForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectInCart } from 'redux/cart/selectors';
import { addOrder } from 'redux/orders/operations';
import { OrderedDrugsList } from 'components/OrderedDrugsList/OrderedDrugsList';

const schema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(1, 'Must be at least 1 characters long')
    .max(50, 'Must be no more than 50 characters long'),
  email: Yup.string().email().required(),
  phone: Yup.number().required().typeError('field can only contain numbers'),
  address: Yup.string().required(),
});

export const CartForm = () => {
  const dispatch = useDispatch();
  const inCart = useSelector(selectInCart);

  const handleSubmit = (values, { resetForm }) => {
    const orderData = {
      userData: {
        name: values.name,
        email: values.email,
        phone: values.phone.toString(),
        address: values.address,
      },
      drugs: inCart.map(drug => ({
        _id: drug._id,
        name: drug.name,
        pharmacy: drug.pharmacy,
        quantity: drug.quantity,
      })),
    };
    dispatch(addOrder(orderData));
    resetForm();
  };

  const totalPrice = inCart.reduce((sum, drug) => {
    return sum + parseFloat(drug.price);
  }, 0);

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', address: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <Wrapper>
          <FormContainer>
            <FormWrapper>
              <Label htmlFor="name">
                Name
                <Input type="text" name="name" required />
                <ErrorWrapper>
                  <ErrorMessage name="name" />
                </ErrorWrapper>
              </Label>
              <Label htmlFor="email">
                Email
                <Input
                  type="text"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                />
                <ErrorWrapper>
                  <ErrorMessage name="email" />
                </ErrorWrapper>
              </Label>
              <Label htmlFor="phone">
                Phone
                <Input
                  type="text"
                  name="phone"
                  required
                  placeholder="097XXXXXXX"
                />
                <ErrorWrapper>
                  <ErrorMessage name="phone" />
                </ErrorWrapper>
              </Label>
              <Label htmlFor="address">
                Address
                <Input
                  type="text"
                  name="address"
                  required
                  placeholder="Kyiv, Vasylkivska, 10"
                />
                <ErrorWrapper>
                  <ErrorMessage name="address" />
                </ErrorWrapper>
              </Label>
            </FormWrapper>
          </FormContainer>

          <OrderedDrugsList />
        </Wrapper>

        <TotalPriceWrapper>
          <TotalPrice>Total price: {totalPrice.toFixed(2)}</TotalPrice>
          <Button type="submit">Submit</Button>
        </TotalPriceWrapper>
      </Form>
    </Formik>
  );
};
