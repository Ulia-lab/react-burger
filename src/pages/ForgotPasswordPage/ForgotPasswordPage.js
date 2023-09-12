import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'
import { FORGOT_PASSWORD_URL } from '../../utils/constants'
import { postPasswordReset } from '../../utils/postPasswordReset'

import { Navigate } from 'react-router-dom';

export function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState({ email: '' })

  const handleClick = async () => {
    dispatch(postPasswordReset(FORGOT_PASSWORD_URL, email));
  }
  const isEmailSend = useSelector(state => state?.postPasswordReset.data.success);

  if (isEmailSend) {
    return (
      <Navigate
        to={'/reset-password'}
      />
    );
  }

  const onChange = e => {
    setEmail({ email: e.target.value })
  }

  const suggestions = [{ text: 'Вспомнили пароль?', linkText: 'Войти', link: '/login' }]
  return (
    <AuthForm onClick={handleClick} title='Восстановление пароля' btnTitle='Восстановить' suggestions={suggestions}>
      <EmailInput
        onChange={onChange}
        value={email.email}
        name={'email'}
        isIcon={false}
        placeholder='Укажите e-mail' />

    </AuthForm>
  );
}
