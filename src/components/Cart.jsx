function Cart(props) {
    const { quantity = 0 } = props;
    return (
        <div className="cart light-green darken-3 white-text">
            <i class="material-icons">local_grocery_store</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
