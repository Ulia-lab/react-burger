import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'

export function SignUpPage() {
  const [value, setValue] = React.useState('password')
  const onChange = e => {
    setValue(e.target.value)
  }
  const suggestions = [{ text: 'Уже зарегистрированы?', linkText: 'Войти', link: '/login' }]
  return (
    <AuthForm title='Регистрация' btnTitle='Зарегистрироваться' suggestions={suggestions}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={e => setValue(e.target.value)}
        value={value}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
      />
      <EmailInput
        onChange={onChange}
        value={value}
        name={'email'}
        isIcon={false}
      />
      <PasswordInput
        onChange={onChange}
        value={value}
        name={'password'}
      />
    </AuthForm>
  );
}
