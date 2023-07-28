import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHeader from './components/AppHeader';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <div className='App'>
        <AppHeader/>
        {/* <BurgerConstructor/> 
        <BurgerIngredients/>*/}
    </div>
  </React.StrictMode>
);
