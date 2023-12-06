import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import appStyles from './app.module.css';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { OnlyAfterForgotPage, OnlyAuth, OnlyUnAuth } from './pages/ProtectedElement';
import { useDispatch, useSelector } from 'react-redux';
import { INGREDIENTS_URL } from './utils/constants';
import CardModal from './components/BurgerIngredients/CardModal';
import AppHeader from './components/AppHeader';
import { fetchDataAction } from './services/actions/fetchData';
import { IngPage } from './pages/IngPage/IngPage';
import { openCardModal } from './services/actions/modalngredients';
import { FeedPage } from './pages/FeedPage/FeedPage';

function App() {
  const location = useLocation();
  let state = location.state;

  const dispatch = useDispatch();
  const isIngredientCardModalOpen = JSON.parse((localStorage.getItem('modalIngredientCard')) || '[]');

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchDataAction(INGREDIENTS_URL));
    if (isIngredientCardModalOpen) dispatch(openCardModal(isIngredientCardModalOpen)) 
  }, [])

  //@ts-ignore
  const isOpen = useSelector(state => state.modalIngredients.isOpen);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Routes location={state?.background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
        <Route path="/register" element={<OnlyUnAuth component={<SignUpPage />} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage />} />} />
        <Route path="/reset-password" element={<OnlyAfterForgotPage component={<ResetPasswordPage />} />} />
        {/* @ts-ignore */}
        <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />} />
        {!state?.background && (<Route path="/ingredients/:id" element={<IngPage />} />)}

        <Route path="/feed" element={<FeedPage />} />
        {/* <Route path="/feed/:number" element={<OrderInfoPage />} /> */}
        <Route path="/profile/orders" element={<OnlyUnAuth component={<LoginPage />} />} />
        <Route path="/profile/orders/:number" element={<OnlyUnAuth component={<LoginPage />} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {(state?.background && isOpen) && (
        <Routes>
          <Route path="/ingredients/:id" element={<CardModal />} />
        </Routes>
      )}
    </div>
  )
}

export default App;