import React from "react";
import IngredientDetailsStyles from "./IngredientDetails.module.css";
import cn from 'classnames'
import { CardProps } from "../interfaces";

function IngredientDetails({ card }: CardProps) {
    return (
        <div className={cn(IngredientDetailsStyles.block, "mt-10 ml-10 mr-10 mb-15")}>
            <p className="text text_type_main-large">Детали игредиента</p>
            <div className={IngredientDetailsStyles.ingredient}>
                <img alt={card?.name} src={card?.image_large} className="ml-4 mr-4 mb-1" />
                <div className="mb-4 mt-8"><p className="text text_type_main-medium">{card?.name}</p></div>
                <div className={IngredientDetailsStyles.value}>
                    <div>
                        <div className="mb-2"><p className="text text_type_main-default text_color_inactive" >Каллории, калл:</p></div>
                        <p className="text text_type_digits-default text_color_inactive">{card?.calories}</p>
                    </div>
                    <div><div className="mb-2"><p className="text text_type_main-default text_color_inactive">Жиры, г:</p></div>
                        <p className="text text_type_digits-default text_color_inactive">{card?.fat}</p></div>
                    <div><div className="mb-2"><p className="text text_type_main-default text_color_inactive">Белки, г:</p></div>
                        <p className="text text_type_digits-default text_color_inactive">{card?.proteins}</p></div>
                    <div><div className="mb-2"><p className="text text_type_main-default text_color_inactive">Углеводы, г:</p></div>
                        <p className="text text_type_digits-default text_color_inactive">{card?.carbohydrates}</p></div>
                </div>
            </div>
        </div>
    );
}

export default IngredientDetails;