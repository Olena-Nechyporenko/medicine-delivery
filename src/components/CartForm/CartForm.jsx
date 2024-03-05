import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { FormWrapper, Label, Input } from './CartForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectInCart } from 'redux/cart/selectors';
import { addOrder } from 'redux/orders/operations';

const schema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(1, 'Must be at least 1 characters long')
    .max(50, 'Must be no more than 50 characters long'),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
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
        phone: values.phone,
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
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', address: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" required />
            <span>
              <ErrorMessage name="name" />
            </span>
          </Label>
          <Label htmlFor="email">
            Email
            <Input type="text" name="email" required />
            <span>
              <ErrorMessage name="email" />
            </span>
          </Label>
          <Label htmlFor="phone">
            Phone
            <Input type="text" name="phone" required />
          </Label>
          <Label htmlFor="address">
            Address
            <Input type="text" name="address" required />
          </Label>
          {/* <Button type="submit">Search</Button> */}
        </FormWrapper>

        <h2>Total price</h2>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
