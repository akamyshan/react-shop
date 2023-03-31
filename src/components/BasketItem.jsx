import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
    const { id, name, price, quantity } = props;

    const { removeFromBasket, increaseQuantityItem, decreaseQuantityItem } =
        useContext(ShopContext);

    return (
        <li className="collection-item">
            <div>
                {name} {price} руб.{" "}
                <i
                    className="tiny material-icons quantity-change"
                    onClick={() => {
                        decreaseQuantityItem(id);
                    }}
                >
                    remove
                </i>{" "}
                X{quantity}{" "}
                <i
                    className="tiny material-icons quantity-change"
                    onClick={() => {
                        increaseQuantityItem(id);
                    }}
                >
                    add
                </i>{" "}
                = {quantity * price} руб.
                <span
                    className="secondary-content"
                    onClick={() => removeFromBasket(id)}
                >
                    <i className="material-icons basket-delete">close</i>
                </span>
            </div>
        </li>
    );
}

export { BasketItem };
