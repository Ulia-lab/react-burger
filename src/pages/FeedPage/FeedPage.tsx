import appStyles from "../../app.module.css";
import BurgerConstructor from "../../components/BurgerConstructor";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/common/Loading";
import OrdersList from "../../components/OrdersList";
import OrdersStatus from "../../components/OrdersStatus";

export function FeedPage() {
  //@ts-ignore
  const isLoading = useSelector((state) => state.fetchData.loading);
  //@ts-ignore
  const error = useSelector((state) => state.fetchData.error);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className={appStyles.main} style={{ flexDirection: "column" }}>
      <h1 className="text text_type_main-large mb-4">Лента заказов</h1>
      <div style={{ display: 'flex', flexDirection: "row" }}>
        <OrdersList />
        <OrdersStatus />
      </div>
    </div>
  );
}
