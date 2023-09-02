import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import AppHeader from './components/AppHeader';
import appStyles from './app.module.css';

function App() {
  return (
    <div className={appStyles.app}>
    <AppHeader />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/register" element={<CountryPage />} />
        <Route path="/forgot-password" element={<PersonPage />} />
        <Route path="/reset-password" element={<PersonPage />} />
        <Route path="/profile" element={<PersonPage />} />
        <Route path="/ingredients/:id" element={<PersonPage />} /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;