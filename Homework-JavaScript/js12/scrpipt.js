function createStore(reducer) {
    let state = reducer(undefined, {});
    let subscribers = [];
  
    const getState = () => state;
    const subscribe = (cb) => {
      subscribers.push(cb);
      return () => (subscribers = subscribers.filter((c) => c !== cb));
    };
  
    const dispatch = (action) => {
      const newState = reducer(state, action);
      if (newState !== state) {
        state = newState;
        for (let cb of subscribers) cb();
      }
    };
  
    return {
      getState,
      dispatch,
      subscribe,
    };
  }
  
  const initialState = {
    cash: 1000,
    kiosk: {
      beer: { quantity: 100, price: 20 },
      chips: { quantity: 50, price: 15 },
      cigarettes: { quantity: 30, price: 25 },
    },
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "BUY_ITEM":
        const { item, quantity, cost } = action.payload;
        return {
          ...state,
          cash: state.cash + cost,
          kiosk: {
            ...state.kiosk,
            [item]: {
              ...state.kiosk[item],
              quantity: state.kiosk[item].quantity - quantity,
            },
          },
        };
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  
  const buyItem = (item, quantity, money) => {
    const currentState = store.getState();
    const selectedProduct = currentState.kiosk[item];
    if (selectedProduct && selectedProduct.quantity >= quantity) {
      const itemPrice = selectedProduct.price;
      const cost = itemPrice * quantity;
      if (cost <= money) {
        store.dispatch({
          type: "BUY_ITEM",
          payload: {
            item,
            quantity,
            cost
          }
        });
      }
    } else {
      console.log(`Товар ${item} відсутній у баби Зіни.`);
    }
  };
  
  const displayKioskState = () => {
    const state = store.getState();
    kiosk.innerHTML = "";
    Object.entries(state.kiosk).forEach(([item, details]) => {
      const itemElement = document.createElement("div");
      itemElement.innerText = `${item}: ${details.quantity}шт. ${details.price} грн`;
      kiosk.appendChild(itemElement);
    });
  
    kioskInfo.innerText = `Кількість товару: Пивандр: ${
      state.kiosk.beer.quantity
    }, Чіпсони: ${state.kiosk.chips.quantity}, Сіги: ${
      state.kiosk.cigarettes.quantity
    }`;
  
    document.title = `Каса: ${state.cash} грн`;
  };
  
  buy.addEventListener("click", () => {
    const item = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const money = parseInt(document.getElementById("money").value);
    buyItem(item, quantity, money);
  });
  
  const unsubscribe = store.subscribe(displayKioskState);
  displayKioskState();