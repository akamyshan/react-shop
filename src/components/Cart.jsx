import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
    const { order, handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const quantity = order.length;
    return (
        <div
            className="cart light-green darken-3 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">local_grocery_store</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
