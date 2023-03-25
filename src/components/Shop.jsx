import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBacketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((element) => element.id === item.id);
        if (itemIndex < 0) {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((element, index) => {
                if (index === itemIndex) {
                    return {
                        ...element,
                        quantity: element.quantity + 1,
                    };
                } else {
                    return element;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((element) => element.id !== itemId);
        setOrder(newOrder);
    };

    const increaseQuantityItem = (itemId) => {
        const modifiedOrder = order.map((element) => {
            if (element.id === itemId) {
                return {
                    ...element,
                    quantity: element.quantity + 1,
                };
            }
            return element;
        });
        setOrder(modifiedOrder);
    };

    const decreaseQuantityItem = (itemId) => {
        const modifiedOrder = order.map((element) => {
            if (element.id === itemId) {
                return {
                    ...element,
                    quantity: element.quantity - 1,
                };
            }
            return element;
        });
        setOrder(modifiedOrder.filter((element) => element.quantity !== 0));
    };

    const handleBasketShow = () => {
        setBasketShow(!isBacketShow);
    };

    const closeAlert = () => {
        setAlertName("");
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            method: "GET",
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBacketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    increaseQuantityItem={increaseQuantityItem}
                    decreaseQuantityItem={decreaseQuantityItem}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}

export { Shop };
