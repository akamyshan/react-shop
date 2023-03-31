import { useContext } from "react";
import { ShopContext } from "../context";
import { BasketItem } from "./BasketItem";

function BasketList() {
    const { order = [], handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const totalCost = order.reduce((sum, element) => {
        return sum + element.price * element.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => {
                    return <BasketItem key={item.id} {...item} />;
                })
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость : {totalCost} руб.
            </li>
            {order.length ? (
                <li className="collection-item">
                    <button className="btn btn-small">Оформить</button>
                </li>
            ) : (
                <li className="collection-item">
                    <button className="btn btn-small disabled">Оформить</button>
                </li>
            )}
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
