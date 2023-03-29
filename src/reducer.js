export function reducer(state, { type, payload }) {
    switch (type) {
        case "ADD_TO_BASKET": {
            const itemIndex = state.order.findIndex(
                (element) => element.id === payload.item.id
            );

            if (itemIndex < 0) {
                const newItem = { ...payload.item, quantity: 1 };
                return {
                    ...state,
                    order: [...state.order, newItem],
                    alertName: payload.item.name,
                };
            } else {
                const newOrder = state.order.map((element, index) => {
                    if (index === itemIndex) {
                        return {
                            ...element,
                            quantity: element.quantity + 1,
                        };
                    } else {
                        return element;
                    }
                });

                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.item.name,
                };
            }
        }

        case "REMOVE_FROM_BASKET": {
            return {
                ...state,
                order: state.order.filter(
                    (element) => element.id !== payload.id
                ),
            };
        }

        case "INCREASE_QUANTITY_ITEM": {
            return {
                ...state,
                order: state.order.map((element) => {
                    if (element.id === payload.id) {
                        return {
                            ...element,
                            quantity: element.quantity + 1,
                        };
                    }
                    return element;
                }),
            };
        }

        case "DECREASE_QUANTITY_ITEM": {
            return {
                ...state,
                order: state.order.map((element) => {
                    if (element.id === payload.id) {
                        return {
                            ...element,
                            quantity: element.quantity - 1,
                        };
                    }
                    return element;
                }),
            };
        }

        case "HANDLE_BASKET_SHOW": {
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        }

        case "CLOSE_ALERT": {
            return {
                ...state,
                alertName: "",
            };
        }

        default:
            return state;
    }
}
