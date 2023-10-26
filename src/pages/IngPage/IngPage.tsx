import React from 'react';
import IngredientDetails from '../../components/BurgerIngredients/IngredientDetails';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIngredient } from '../../utils/getIng';

export function IngPage() {

  //@ts-ignore
  const selectedCard = useSelector(state => state?.fetchData?.data) || null;

  let { id } = useParams();
  let expCard = getIngredient(selectedCard, id);

  return (
    <IngredientDetails card={expCard} />
  );
}