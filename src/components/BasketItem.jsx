function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            <div>
                {name} {price} руб. X{quantity} = {quantity * price} руб.
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
