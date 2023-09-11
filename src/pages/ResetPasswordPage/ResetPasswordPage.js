import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { AuthForm } from '../../components/AuthForm'
import { PASSWORD_RESET_URL } from '../../utils/constants'
import { postPasswordReset } from '../../utils/postPasswordReset'
import AppHeader from '../../components/AppHeader';
import { passwordSetInitialState } from '../../services/actions/postPasswordReset';

export function ResetPasswordPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(passwordSetInitialState());
  }, [])

  const [password, setPassword] = React.useState({
    password: "",
    token: ""
  })

  const onChangePw = e => {
    setPassword({ ...password, password: e.target.value })
  }

  const onChangeCode = e => {
    setPassword({ ...password, token: e.target.value })
  }

  const handleClick = async () => {
    dispatch(postPasswordReset(PASSWORD_RESET_URL, password));
  }

  const suggestions = [{ text: 'Вспомнили пароль?', linkText: 'Войти', link: '/' }]

  return (
    <><AppHeader /><AuthForm onClick={handleClick}
      title='Восстановление пароля'
      btnTitle='Сохранить'
      suggestions={suggestions}>
      <PasswordInput
        onChange={onChangePw}
        value={password.password}
        name={'password'} />
      <Input
        onChange={onChangeCode}
        value={password.token}
        name={'token'}
        placeholder={'Код из письма'} />
    </AuthForm></>
  );
}
