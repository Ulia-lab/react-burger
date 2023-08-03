import React from 'react';
import './index.css';
import AppHeader from './components/AppHeader';
import BurgerConstructor from './components/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients';

function App() {
  return(
    <div className='App'>
      <AppHeader />
      <main className='main'>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  )
}

export default App;