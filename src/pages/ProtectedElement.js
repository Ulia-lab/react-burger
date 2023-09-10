import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../utils/getCookie";

const ProtectedElement = ({ onlyUnAuth = false, component }) => {
  // isAuthChecked это флаг, показывающий что проверка токена произведена
  // при этом результат этой проверки не имеет значения, важно только,
  // что сам факт проверки имел место.
  const isAuth = getCookie("accessToken");
  const location = useLocation();

  console.log('onlyUnAuth && isAuth', onlyUnAuth && isAuth)
  console.log('!onlyUnAuth && !isAuth', !onlyUnAuth && !isAuth)

  if (onlyUnAuth && isAuth) {
    // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
    // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !isAuth) {
    return <Navigate to="/login" />;
  }

  // !onlyUnAuth && user Пользователь авторизован и роут для авторизованного пользователя

  return component;
};

export const OnlyAuth = ProtectedElement;
export const OnlyUnAuth = ({ component }) => (
  <ProtectedElement onlyUnAuth={true} component={component} />
);
