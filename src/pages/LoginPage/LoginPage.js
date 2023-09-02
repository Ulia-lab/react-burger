import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import loginStyle from "./login.module.css";
import { Link } from "react-router-dom";
import cn from 'classnames'

export function LoginPage() {
  const [value, setValue] = React.useState('password')
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div className={loginStyle.block}>
      <div className={cn('mb-20 mt-20', loginStyle.gap)}>
        <h2 className="text text_type_main-medium">Вход</h2>
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
        <Button htmlType="button" type="primary" size="large">
          Войти
        </Button>
      </div>
      <div className={cn("text text_type_main-default text_color_inactive", loginStyle.suggestions)}>
        <div className={loginStyle.suggestion}><p>Вы — новый пользователь?</p><Link className={loginStyle.link} to='/'>Зарегистрироваться</Link></div>
        <div className={loginStyle.suggestion}><p>Забыли пароль?</p><Link className={loginStyle.link} to='/'>Восстановить пароль</Link></div>
      </div>
    </div>
  );
}