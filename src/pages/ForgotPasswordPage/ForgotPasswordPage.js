import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'

export function ForgotPasswordPage() {
  const [email, setEmail] = React.useState(null)

  const onChange = e => {
    setEmail(e.target.value)
  }

  const suggestions = [{ text: 'Вспомнили пароль?', linkText: 'Войти', link: '/' }]
  return (
    <AuthForm title='Восстановление пароля' btnTitle='Восстановить' suggestions={suggestions}>
       <EmailInput
        onChange={onChange}
        value={email}
        name={'email'}
        isIcon={false}
        placeholder='Укажите e-mail'
      />

    </AuthForm>
  );
}
