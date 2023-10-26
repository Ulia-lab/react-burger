import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'
import { FORGOT_PASSWORD_URL } from '../../utils/constants'
import { Navigate } from 'react-router-dom';
import { postPasswordReset } from '../../services/actions/postPasswordReset';

export function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState({ email: '' })

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(postPasswordReset(FORGOT_PASSWORD_URL, email));
  }
  //@ts-ignore
  const isEmailSend = useSelector(state => state?.postPasswordReset.data.success);

  if (isEmailSend) {
    localStorage.setItem('isEmailSend', 'true')
    return (
      <Navigate
        to={'/reset-password'}
      />
    );
  }

  const onChange = (e: { target: { value: string; }; }) => {
    setEmail({ email: e.target.value })
  }

  const suggestions = [{ text: 'Вспомнили пароль?', linkText: 'Войти', link: '/login' }]
  return (
    <AuthForm onSubmit={handleSubmit} title='Восстановление пароля' btnTitle='Восстановить' suggestions={suggestions}>
      <EmailInput
        onChange={onChange}
        value={email.email}
        name={'email'}
        isIcon={false}
        placeholder='Укажите e-mail' />
    </AuthForm>
  );
}
