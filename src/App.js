import React, { useEffect } from 'react';
import appStyles from './app.module.css';
import AppHeader from './components/AppHeader/index.js';
import BurgerConstructor from './components/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients';
import { URL } from './utils/constants'
import fetchData from './utils/fetchData'
import { BurgerConstructorContext } from '../src/services/BurgerConstructorContext';

function App() {
  const [data, setData] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState();

  useEffect(() => {
    fetchData({ url: URL, setData: setData, setIsLoading: setIsLoading, setError: setError });
  }, [])

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <><div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
          <BurgerIngredients data={data} />
          <BurgerConstructorContext.Provider value={data}>
          <BurgerConstructor />
        </BurgerConstructorContext.Provider>
      </main>
    </div></>
  )
}

export default App;