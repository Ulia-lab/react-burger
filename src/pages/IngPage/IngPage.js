import React from 'react';
import AppHeader from '../../components/AppHeader';
import IngredientDetails from '../../components/BurgerIngredients/IngredientDetails';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIngredient } from '../../utils/getIng';

export function IngPage() {

  const selectedCard = useSelector(state => state?.fetchData?.data) || null;

  let { id } = useParams();
  let expCard = getIngredient(selectedCard, id);

  return (
    <><AppHeader />
      <IngredientDetails card={expCard} />
    </>
  );
}