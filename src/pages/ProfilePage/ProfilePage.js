import React, { useEffect } from 'react';
import ProfileMenu from '../../components/ProfileMenu';
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { LOGOUT_URL, USER_URL } from '../../utils/constants';
import { logout } from '../../services/actions/logout';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCookie } from '../../utils/getCookie';
import { getUser, patchUser } from '../../services/actions/user';
import { getToken } from '../../services/actions/token';
import Loading from '../../components/common/Loading';

export function ProfilePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(USER_URL));
    }, [])

    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);

    if (error) {
        dispatch(getToken());
        dispatch(getUser(USER_URL));
    }

    const userEmail = useSelector(state => state?.user?.data?.user?.email) || '';
    const userName = useSelector(state => state?.user?.data?.user?.name) || '';

    const [editEmail, setEditEmail] = React.useState('')
    const [editName, setEditName] = React.useState('')

    useEffect(() => {
        setEditEmail(userEmail);
    }, [userEmail]);

    useEffect(() => {
        setEditName(userName)
    }, [userName]);

    const [isEditDisabled, setEditDisabled] = React.useState(true);
    const handlerEditClick = () => {
        setEditDisabled(!isEditDisabled)
    }

    const isUserAuth = getCookie('accessToken');

    const onChangeName = e => {
        setEditName(e.target.value)
    }
    const onChangeEmail = e => {
        setEditEmail(e.target.value)
    }

    const token = {
        token: localStorage.getItem('refreshToken')
    }

    const handleLogoutOnClick = () => {
        dispatch(logout(LOGOUT_URL, token));
    }

    const handleSubmit = () => {
        dispatch(patchUser(USER_URL, {
            email: editEmail,
            name: editName
        }))
        setEditDisabled(true);
    }

    const handleCancelOnClick = () => {
        setEditDisabled(true);
    }

    if (!isUserAuth) {
        return (
            <Navigate
                to={'/login'}
                replace />
        );
    }

    if (loading) {
        return (<div style={{ display: 'flex', justifyContent: "center"}}><Loading /></div>)
    }

    return (
        <form onSubmit={handleSubmit} className='mt-20' style={{ display: 'flex' }}>
            <ProfileMenu onClick={handleLogoutOnClick} />
            {!loading && <div className='ml-15'>
                <Input
                    icon={'EditIcon'}
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChangeName}
                    value={editName}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    disabled={isEditDisabled}
                    extraClass='mb-6'
                    onIconClick={handlerEditClick}
                />
                <EmailInput
                    icon={'EditIcon'}
                    onChange={onChangeEmail}
                    value={editEmail}
                    name={'email'}
                    disabled={isEditDisabled}
                    extraClass='mb-6'
                    onIconClick={handlerEditClick}
                />
                <PasswordInput
                    icon={'EditIcon'}
                    value='value'
                    name={'password'}
                />
                {!isEditDisabled && <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                    <Button onClick={handleCancelOnClick} htmlType='reset'>Отменить</Button>
                    <Button htmlType='submit'>Сохранить</Button>
                </div>}
            </div>}
        </form>
    );
}