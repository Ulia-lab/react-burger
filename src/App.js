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
import { OnlyAuth, OnlyUnAuth } from './pages/ProtectedElement';
import { IngPage } from './pages/IngPage/IngPage';
import { useDispatch } from 'react-redux';
import { fetchDataAction } from './utils/fetchData';
import { URL } from './utils/constants';
import { useSelector } from 'react-redux';

function App() {
  const location = useLocation();
  let state = location.state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction(URL));
  }, [])

//   const data = useSelector(state => state.fetchData.data);
// console.log('state.background', state?.background)
  
  return (
    <div className={appStyles.app}>

        <Routes location={state?.background || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<OnlyUnAuth component={<LoginPage/>} />}  />
          <Route path="/register" element={<OnlyUnAuth component={<SignUpPage/>} />}  />
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage/>} />}  />
          <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPasswordPage/>} />} />
          <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />}/>
          {!state?.background && (<Route path="/ingredients/:id" element={<IngPage />}/>)}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {state?.background && (
        <Routes>
          <Route path="/ingredients/:id" element={<HomePage />} />
        </Routes>
        )}
    </div>
  )
}

export default App;