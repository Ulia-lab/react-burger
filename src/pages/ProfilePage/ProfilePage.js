import React from 'react';
import ProfileMenu from '../../components/ProfileMenu';
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../../components/AppHeader';
import { useDispatch } from 'react-redux';
import { LOGOUT_URL } from '../../utils/constants';
import { logout } from '../../utils/logout';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProfilePage() {
    const dispatch = useDispatch();

    const user = useSelector(state => state?.auth.user)
    const auth = useSelector(state => state?.auth)

    const [value, setValue] = React.useState('password')
    const onChange = e => {
        setValue(e.target.value)
    }

    const token = {
        token: localStorage.getItem('refreshToken')
    }

    const handleOnClick = () => {
        dispatch(logout(LOGOUT_URL, token))
    }

    console.log('user', user)
    console.log('auth', auth)

    if (!user) {
        return (
            <Navigate
                to={'/login'}
            />
        );
    }

    return (
        <>
            <AppHeader />
            <div className='mt-20' style={{ display: 'flex' }}>
                <ProfileMenu onClick={handleOnClick} />
                <div className='ml-15'>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        disabled={true}
                        extraClass='mb-6' />
                    <EmailInput
                        onChange={onChange}
                        value={value}
                        name={'email'}
                        isIcon={false}
                        disabled={true}
                        extraClass='mb-6' />
                    <PasswordInput
                        onChange={onChange}
                        value={value}
                        name={'password'}
                        disabled={true} />
                </div>
            </div>
        </>
    );
}