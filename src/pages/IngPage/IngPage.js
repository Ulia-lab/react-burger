import React, { useEffect } from 'react';
import AppHeader from '../../components/AppHeader';
import IngredientDetails from '../../components/BurgerIngredients/IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDataAction } from '../../utils/fetchData';
import { URL } from '../../utils/constants';

export function IngPage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchDataAction(URL));
  // }, [dispatch])

  const selectedCard = useSelector(state => state?.fetchData?.data) || null;

  let { id } = useParams();
  let expCard = getIngredient(id);

  function getIngredient(id) {
    const ing = selectedCard.find((card) => {
      return card._id === id
    })
    return ing
  }
  return (
    <><AppHeader />
      <IngredientDetails card={expCard} />
    </>
  );
}