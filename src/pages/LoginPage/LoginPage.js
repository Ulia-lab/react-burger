import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'
import AppHeader from '../../components/AppHeader';
import { auth } from '../../utils/auth'
import { SIGN_IN_URL } from './../../utils/constants'
import { Navigate } from 'react-router-dom';

export function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.auth.user)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const inputData = {
    email: email,
    password: password
  }
  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(auth(SIGN_IN_URL, inputData))
  }

  if (user) {
    return (
      <Navigate
        to={'/'}
      />
    );
  }

  const suggestions = [{ text: 'Вы — новый пользователь?', linkText: 'Зарегистрироваться', link: '/register' },
  { text: 'Забыли пароль?', linkText: 'Восстановить пароль', link: '/forgot-password' }]
  return (
    <AuthForm onSubmit={handleSubmit} title='Вход' btnTitle='Войти' suggestions={suggestions}>
      <EmailInput
        autoComplete='on'
        onChange={onChangeEmail}
        value={email}
        name={'email'}
        isIcon={false}
        extraClass="mb-2" />
      <PasswordInput
        autoComplete='on'
        onChange={onChangePassword}
        value={password}
        name={'password'}
        extraClass="mb-2" />
    </AuthForm>
  );
}
