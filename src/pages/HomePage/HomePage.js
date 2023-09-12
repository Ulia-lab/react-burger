import appStyles from '../../app.module.css';
import BurgerConstructor from '../../components/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import React from 'react';
import { useSelector } from 'react-redux';
import AppHeader from '../../components/AppHeader';

export function HomePage() {

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