import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHeader from './components/AppHeader';
import BurgerConstructor from './components/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <div className='App'>
      <AppHeader />
      <main className='main'>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  </React.StrictMode>
);
