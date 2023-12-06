import appStyles from '../../app.module.css';
import BurgerConstructor from '../../components/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients';
import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/common/Loading';

export function FeedPage() {

  //@ts-ignore
  const isLoading = useSelector(state => state.fetchData.loading);
  //@ts-ignore
  const error = useSelector(state => state.fetchData.error);

  if (isLoading) {
    return <div><Loading /></div>
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <div className={appStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
    </div>
  );
}