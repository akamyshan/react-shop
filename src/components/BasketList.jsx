import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype } = props;

    const totalCost = order.reduce((sum, element) => {
        return sum + element.price * element.quantity;
    }, 0);
    console.log(totalCost);

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
