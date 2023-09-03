import React from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'
import { PASSWORD_RESET_URL } from '../../utils/constants'
import {postPasswordReset} from '../../utils/postPasswordReset'
import AppHeader from '../../components/AppHeader';

export function ForgotPasswordPage() {
  const [email, setEmail] = React.useState({ email: ''})
  const dispatch = useDispatch();

  const handleClick = async () => {
    console.log('email', email)
    dispatch(postPasswordReset(PASSWORD_RESET_URL, email));
}

  const onChange = e => {
    setEmail({ email: e.target.value})
  }

  const suggestions = [{ text: 'Вспомнили пароль?', linkText: 'Войти', link: '/' }]
  return (
    <><AppHeader /><AuthForm onClick={handleClick} title='Восстановление пароля' btnTitle='Восстановить' suggestions={suggestions}>
      <EmailInput
        onChange={onChange}
        value={email.email}
        name={'email'}
        isIcon={false}
        placeholder='Укажите e-mail' />

    </AuthForm></>
  );
}
