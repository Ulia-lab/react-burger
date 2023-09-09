import React from 'react';
// import { useSelector } from 'react-redux';
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'
import AppHeader from '../../components/AppHeader';
import { useDispatch } from 'react-redux';
import { signUp } from './../../utils/signUp'
import { SIGN_UP_URL } from './../../utils/constants'

export function SignUpPage() {
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangeName = e => {
    setName(e.target.value)
  }

  const user = {
    email: email,
    password: password,
    name: name
  }

  const handleSignUp = async () => {
    dispatch(signUp(SIGN_UP_URL, user));
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
