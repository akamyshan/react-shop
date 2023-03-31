import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";

import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
    const { loading, order, isBacketShow, alertName, setGoods } =
        useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            method: "GET",
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.shop);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBacketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}

export { Shop };
