function BasketItem(props) {
    const { id, name, price, quantity } = props;
    return (
        <li className="collection-item">
            <div>
                {name} {price} руб. X{quantity} = {quantity * price} руб.
                <span className="secondary-content">
                    <i className="material-icons basket-delete">close</i>
                </span>
            </div>
        </li>
    );
}

export { BasketItem };
