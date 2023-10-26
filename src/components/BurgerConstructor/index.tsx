import React, { useEffect, useMemo } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from "classnames";
import Modal from "../Modal";
import OrderDetails from "./OrderDetails";
import ConstructorCard from "./constructorCard";
import { ORDER_URL } from "../../utils/constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postOrder, postOrderModal } from "../../services/actions/postOrder";
import { useDrop } from "react-dnd";
import {
  addBCItems,
  clearBCItems,
  getSavedBCItems,
} from "../../services/actions/constructorItems";
import { DropZone } from "./DropZone";
import { getCookie } from "../../utils/getCookie";
import Loading from "../common/Loading";
import { propTypesCard } from "../../utils/prop-types";

function BurgerConstructor() {
  const bunType = "bun";

  const dispatch = useDispatch();
  const getConstructor = localStorage.getItem("constructor") || "[]";
  useEffect(() => {
    const savedCards = JSON.parse(getConstructor);
    dispatch(getSavedBCItems(savedCards));
  }, []);
  //@ts-ignore
  const cards = useSelector((state) => state.constructorItems.items);
  //@ts-ignore
  const isOpen = useSelector((state) => state.postOrder.isOpen);
  //@ts-ignore
  const loading = useSelector((state) => state.postOrder.loading);
  //@ts-ignore
  const error = useSelector((state) => state.postOrder.error);
  //@ts-ignore
  const orderNum = useSelector((state) => state.postOrder.items);

  const isLocked = true;
  const totalPrice = useMemo(() => {
    //@ts-ignore
    return cards.reduce((acc, card) => {
      const price = card.type === bunType ? card.price * 2 : card.price;
      return acc + price;
    }, 0);
  }, [cards]);

  const bunCards = useMemo(() => {
    //@ts-ignore
    const bun = cards.find((item) => item.type === bunType);
    return bun;
  }, [cards]);

  const mainCards = useMemo(() => {
    //@ts-ignore
    const bun = cards.filter((item) => item.type !== bunType);
    return bun;
  }, [cards]);

  const orderId = useMemo(() => {
    return cards.reduce(
      //@ts-ignore
      (acc, card) => {
        acc.ingredients.push(card._id);

        return acc;
      },
      { ingredients: [] }
    );
  }, [cards]);

  const isUserAuth = getCookie("accessToken");

  const handleOpenModal = async () => {
    localStorage.setItem("constructor", JSON.stringify(cards));

    if (!isUserAuth) {
      window.location.href = "/login";
    }
    //@ts-ignore
    dispatch(postOrder(ORDER_URL, orderId));
  };

  const handleCloseModal = () => {
    localStorage.removeItem("constructor");
    dispatch(clearBCItems());
    dispatch(postOrderModal());
  };

  //dnd
  const [, dropItem] = useDrop({
    accept: "item",
    drop(itemId) {
      //@ts-ignore
      dispatch(addBCItems(itemId.card));
    },
  });

  if (loading) {
    return (
      <div className={burgerConstructorStyle.loading}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <>
      <section className={cn("mt-25", burgerConstructorStyle.block)}>
        <div
          ref={dropItem}
          className={cn("ml-4", burgerConstructorStyle.bconstructor)}
        >
          {/* @ts-ignore */}
          {cards.length === 0 ? (
            <div
              className="text text_type_main-medium text_color_inactive"
              /*
                // @ts-ignore */
              style={{ height: "100%", wight: "100%" }}
            >
              Перетащите элементы бургера
            </div>
          ) : (
            <div
              className={cn("ml-4", burgerConstructorStyle.bconstructorActive)}
            >
              {bunCards && (
                <ConstructorCard
                  type="top"
                  card={bunCards}
                  isLocked={isLocked}
                  additionalName=" (верх)"
                />
              )}
              {mainCards.map((card: propTypesCard, index: string) => (
                <DropZone key={card.uniqueId} index={index}>
                  <ConstructorCard
                    type={undefined}
                    key={card.uniqueId}
                    index={index}
                    card={card}
                  />
                </DropZone>
              ))}
              {bunCards && (
                <ConstructorCard
                  type="bottom"
                  card={bunCards}
                  isLocked={isLocked}
                  additionalName=" (низ)"
                />
              )}
            </div>
          )}
        </div>
        <div className={cn("mt-10 ml-4 mr-4", burgerConstructorStyle.total)}>
          <p className="text text_type_digits-default">{totalPrice}</p>
          <div className="mr-10 ml-2">
            <CurrencyIcon type="primary" />
          </div>
          <Button
            onClick={handleOpenModal}
            htmlType="button"
            type="primary"
            size="large"
          >
            Оформить заказ
          </Button>
        </div>
      </section>
      {isOpen && (
        /*
      // @ts-ignore */
        <Modal
          content={<OrderDetails order={orderNum} />}
          closeModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default BurgerConstructor;
