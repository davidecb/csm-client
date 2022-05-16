import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Form, LoginFormContainer, Title } from './styles';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Login } from '../../models/Login';
import { Session } from '../../models/Session';
import { SpanError } from 'app/shared/components/SpanError';
import { SubmitLoginButton } from '../SubmitLoginButton';
import { useFormik } from 'formik';
import { useState } from 'react';

interface LoginFormProps {
  onSubmit: (payload: Login) => Session;
  session: Session;
  initialValues?: FormValues;
}

interface FormValues {
  username: string;
  password: string;
}

const validationSchema = Yup.object().shape<FormValues>({
  username: Yup.string().required('El campo usuario es requerido.'),
  password: Yup.string().required('El campo contraseña es requerido.'),
});

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  session,
  initialValues = {
    username: '',
    password: '',
  },
}) => {
  const [wrongLogin, setWrongLogin] = useState(false);
  const [wrongLoginMsg, setWrongLoginMsg] = useState('');
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const loginStatus = await onSubmit({
      username: values.username,
      password: values.password,
    });
    if (loginStatus.token === 'Error') {
      setWrongLogin(true);
      setWrongLoginMsg(loginStatus.user.message);
    } else {
      setWrongLogin(false);
    }
    //resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <LoginFormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Bienvenido</Title>
        {wrongLogin && <SpanError>{wrongLoginMsg}</SpanError>}
        <Input
          name="username"
          placeholder="Usuario"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.touched.username && formik.errors.username && (
          <SpanError>{formik.errors.username}</SpanError>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <SpanError>{formik.errors.password}</SpanError>
        )}
        <SubmitLoginButton />
      </Form>
    </LoginFormContainer>
  );
};

LoginForm.propTypes = {
  session: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
};
