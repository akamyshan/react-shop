import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
    const id = props.mainId;
    const name = props.displayName;
    const description = props.displayDescription;
    const price = props.price.regularPrice;
    const full_background = props.displayAssets[0].full_background;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() => {
                        addToBasket({ id, name, price });
                    }}
                >
                    Купить
                </button>
                <span className="right price">{price} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem };
