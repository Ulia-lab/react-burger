import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'

export function LoginPage() {
  const [value, setValue] = React.useState('password')
  const onChange = e => {
    setValue(e.target.value)
  }
  const suggestions = [{ text: 'Вы — новый пользователь?', linkText: 'Зарегистрироваться', link: '/' },
  { text: 'Забыли пароль?', linkText: 'Восстановить пароль', link: '/' }]
  return (
    <AuthForm title='Вход' btnTitle='Войти' suggestions={suggestions}>
      <EmailInput
        onChange={onChange}
        value={value}
        name={'email'}
        isIcon={false}
        extraClass="mb-2"
      />
      <PasswordInput
        onChange={onChange}
        value={value}
        name={'password'}
        extraClass="mb-2"
      />
    </AuthForm>
  );
}
