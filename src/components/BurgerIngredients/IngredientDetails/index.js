import React from "react";
import IngredientDetailsStyles from "./IngredientDetails.module.css";
import cn from 'classnames'
import PropTypes from 'prop-types';

function IngredientDetails({ ...props }) {
    return (
        <div className={cn(IngredientDetailsStyles.block, "mt-10 ml-10 mr-10 mb-15")}>
            <p className="text text_type_main-large">Детали игредиента</p>
            <div className={IngredientDetailsStyles.ingredient}>
                <img alt={props.card.name} src={props.card.image_large} className="ml-4 mr-4 mb-1" />
                <div className="mb-4 mt-8"><p className="text text_type_main-medium">{props.card.name}</p></div>
                <div className={IngredientDetailsStyles.value}>
                    <div>
                        <div className="mb-2"><p className="text text_type_main-default text_color_inactive" >Каллории, калл:</p></div>
                        <p className="text text_type_digits-default text_color_inactive">{props.card.calories}</p>
                    </div>
                    <div><div className="mb-2"><p className="text text_type_main-default text_color_inactive">Жиры, г:</p></div>
                        <p className="text text_type_digits-default text_color_inactive">{props.card.fat}</p></div>
                    <div><div className="mb-2"><p className="text text_type_main-default text_color_inactive">Белки, г:</p></div>
                        <p className="text text_type_digits-default text_color_inactive">{props.card.proteins}</p></div>
                    <div><div className="mb-2"><p className="text text_type_main-default text_color_inactive">Углеводы, г:</p></div>
                        <p className="text text_type_digits-default text_color_inactive">{props.card.carbohydrates}</p></div>
                </div>
            </div>
        </div>
    );
}

IngredientDetails.propTypes = {
    props: PropTypes.object.isRequired,
}; 


export default IngredientDetails;