import React, { useEffect } from 'react';
import appStyles from './app.module.css';
import AppHeader from './components/AppHeader/index.js';
import BurgerConstructor from './components/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients';
import { URL } from './utils/constants'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchDataAction } from './utils/fetchData'
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction(URL));
  }, [dispatch])

  const isLoading = useSelector(state => state.fetchData.loading);
  const error = useSelector(state => state.fetchData.error);

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
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    </div></>
  )
}

export default App;