import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import appStyles from './app.module.css';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { OnlyAuth, OnlyUnAuth } from './pages/ProtectedElement';

function App() {
  return (
    <div className={appStyles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<OnlyUnAuth component={<LoginPage/>} />}  />
          <Route path="/register" element={<OnlyUnAuth component={<SignUpPage/>} />}  />
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage/>} />}  />
          <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPasswordPage/>} />} />
          <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />}/>
          {/*<Route path="/ingredients/:id" element={<PersonPage />} /> */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;