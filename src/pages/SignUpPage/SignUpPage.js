import React from 'react';
import { useSelector } from 'react-redux';
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'
import AppHeader from '../../components/AppHeader';
import { useDispatch } from 'react-redux';
import { auth } from './../../utils/auth'
import { SIGN_UP_URL } from './../../utils/constants'
import { Navigate } from 'react-router-dom';

export function SignUpPage() {
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const user = useSelector(state => state.signIn.user)

  if (user) {
    return (
      <Navigate
        to={'/'}
      />
    );
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangeName = e => {
    setName(e.target.value)
  }

  const inputData = {
    email: email,
    password: password,
    name: name
  }

  const handleSignUp = async () => {
    dispatch(auth(SIGN_UP_URL, inputData));
  }
  const suggestions = [{ text: 'Уже зарегистрированы?', linkText: 'Войти', link: '/login' }]
  return (
    <>
      <AppHeader />
      <AuthForm onClick={handleSignUp} title='Регистрация' btnTitle='Зарегистрироваться' suggestions={suggestions}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={onChangeName}
          value={name}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'} />
        <EmailInput
          onChange={onChangeEmail}
          value={email}
          name={'email'}
          isIcon={false} />
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={'password'} />
      </AuthForm>
    </>
  );
}
