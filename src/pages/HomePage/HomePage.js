import appStyles from '../../app.module.css';
import BurgerConstructor from '../../components/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import React, { useEffect } from 'react';
import { URL } from '../../utils/constants'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchDataAction } from '../../utils/fetchData'

export function HomePage() {
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
    <main className={appStyles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
}