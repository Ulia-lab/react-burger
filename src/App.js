import React, { useEffect } from 'react';
import appStyles from './app.module.css';
import AppHeader from './components/AppHeader/index.js';
import BurgerConstructor from './components/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients';

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState();

  const url = 'https://norma.nomoreparties.space/api/ingredients';
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Ошибка fetch(url)')
        }
        const jsonData = await response.json();
        setData(jsonData.data);
        setIsLoading(false);
      }
      catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    fetchData();
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
        <BurgerConstructor data={data} />
      </main>
    </div></>
  )
}

export default App;