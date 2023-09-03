import React from 'react';
import ProfileMenu from '../../components/ProfileMenu';
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

export function ProfilePage() {
    const [value, setValue] = React.useState('password')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <div className='mt-20' style={{ display: 'flex' }}>
            <ProfileMenu />
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
                    extraClass='mb-6'
                />
                <EmailInput
                    onChange={onChange}
                    value={value}
                    name={'email'}
                    isIcon={false}
                    disabled={true}
                    extraClass='mb-6'
                />
                <PasswordInput
                    onChange={onChange}
                    value={value}
                    name={'password'}
                    disabled={true}
                />
            </div>
        </div>
    );
}