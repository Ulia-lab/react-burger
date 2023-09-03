import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'

export function ResetPasswordPage() {
  const [password, setPassword] = React.useState(null)

  const onChangePw = e => {
    setPassword(e.target.value)
  }
  const suggestions = [{ text: 'Вспомнили пароль?', linkText: 'Войти', link: '/' }]
  return (
    <AuthForm title='Восстановление пароля' btnTitle='Сохранить' suggestions={suggestions}>
      <PasswordInput
        onChange={onChangePw}
        value={password}
        name={'password'} />
        <Input
          onChange={onChangePw}
          value={password}
          name={'password'}
          placeholder={'Код из письма'} />
    </AuthForm>
  );
}
