{
    class Store {
        #reducer;
        #state;
        #subscribers = [];

        constructor(reducer) {
            this.#reducer = reducer;
            this.#state = this.#reducer(undefined, {});
        }

        get state() {
            return this.#state;
        }

        subscribe(callback) {
            this.#subscribers.push(callback);
            return () => {
                this.#subscribers = this.#subscribers.filter(cb => cb !== callback);
            };
        }

        dispatch(action) {
            const newState = this.#reducer(this.#state, action);
            if (newState !== this.#state) {
                this.#state = newState;
                this.#subscribers.forEach(cb => cb());
            }
        }
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
            case 'BUY_ITEM':
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

    const store = new Store(reducer);

    const buyItem = (item, quantity, money) => {
        const currentState = store.state;
        const selectedProduct = currentState.kiosk[item];
        if (selectedProduct && selectedProduct.quantity >= quantity) {
            const itemPrice = selectedProduct.price;
            const cost = itemPrice * quantity;
            if (cost <= money) {
                store.dispatch({
                    type: 'BUY_ITEM',
                    payload: {
                        item,
                        quantity,
                        cost,
                    },
                });
            }
        } else {
            console.log(`Товар ${item} відсутній у баби Зіни.`);
        }
    };

    const displayKioskState = () => {
        const state = store.state;
        kiosk.innerHTML = '';
        Object.entries(state.kiosk).forEach(([item, details]) => {
            const itemElement = document.createElement('div');
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

    buy.addEventListener('click', () => {
        const item = document.getElementById('item').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const money = parseInt(document.getElementById('money').value);
        buyItem(item, quantity, money);
    });

    const unsubscribe = store.subscribe(displayKioskState);
    displayKioskState();
}

{
    class Password {
        #open;
        #input;
        #checkBox;
        #onChange;
        #onOpenChange;
    
        constructor(parent, open) {
            this.#open = open;
            this.#input = document.createElement('input');
            this.#input.type = this.#open ? 'text' : 'password';
            parent.appendChild(this.#input);
    
            this.#checkBox = document.createElement('button');
            this.#checkBox.textContent = this.#open ? 'сховати' : 'показати';
            parent.appendChild(this.#checkBox);
    
            this.#input.addEventListener('input', () => {
                if (typeof this.#onChange === 'function') {
                    this.#onChange(this.#input.value);
                }
            });
    
            this.#checkBox.addEventListener('click', () => {
                this.#open = !this.#open;
                this.#input.type = this.#open ? 'text' : 'password';
                this.#checkBox.textContent = this.#open ? 'сховати' : 'показати';
    
                if (typeof this.#onOpenChange === 'function') {
                    this.#onOpenChange(this.#open);
                }
            });
        }
    
        setValue(value) {
            this.#input.value = value;
        }
    
        getValue() {
            return this.#input.value;
        }
    
        setOpen(newState) {
            this.#open = newState;
            this.#input.type = this.#open ? 'text' : 'password';
            this.#checkBox.textContent = this.#open ? 'сховати' : 'показати';
    
            if (typeof this.#onOpenChange === 'function') {
                this.#onOpenChange(this.#open);
            }
        }
    
        getOpen() {
            return this.#open;
        }
    
        set onChange(callback) {
            this.#onChange = callback;
        }
    
        set onOpenChange(callback) {
            this.#onOpenChange = callback;
        }
    }
    
    const loginForm = document.createElement('form');
    document.body.appendChild(loginForm);
    
    const usernameInput = new Password(loginForm, false);
    const passwordInput = new Password(loginForm, true);
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    loginForm.appendChild(submitButton);
    
    function checkInputs() {
        const username = usernameInput.getValue();
        const password = passwordInput.getValue();
        submitButton.disabled = !(username && password);
    }
    
    usernameInput.onChange = checkInputs;
    passwordInput.onChange = checkInputs;
    
    checkInputs();
    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = usernameInput.getValue();
        const password = passwordInput.getValue();
        console.log('Username:', username);
        console.log('Password:', password);
    });
}

{
    class RGB {
        #r;
        #g;
        #b;
    
        constructor(r = 0, g = 0, b = 0) {
            this.r = r;
            this.g = g;
            this.b = b;
        }
    
        get r() {
            return this.#r;
        }
    
        set r(value) {
            if (typeof value !== 'number' || value < 0 || value > 255) {
                throw new RangeError('The value of "r" must be a number in the range 0 to 255.');
            }
            this.#r = value;
        }
    
        get g() {
            return this.#g;
        }
    
        set g(value) {
            if (typeof value !== 'number' || value < 0 || value > 255) {
                throw new RangeError('The value of "g" must be a number in the range 0 to 255.');
            }
            this.#g = value;
        }
    
        get b() {
            return this.#b;
        }
    
        set b(value) {
            if (typeof value !== 'number' || value < 0 || value > 255) {
                throw new RangeError('The value of "b" must be a number in the range 0 to 255.');
            }
            this.#b = value;
        }
    
        get rgb() {
            return `rgb(${this.#r},${this.#g},${this.#b})`;
        }
    
        set rgb(value) {
            const regex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
            const match = value.match(regex);
            if (!match) {
                throw new SyntaxError('Invalid rgb format.');
            }
            this.r = parseInt(match[1]);
            this.g = parseInt(match[2]);
            this.b = parseInt(match[3]);
        }
    
        get hex() {
            return `#${this.#r.toString(16).padStart(2, '0')}${this.#g.toString(16).padStart(2, '0')}${this.#b.toString(16).padStart(2, '0')}`;
        }
    
        set hex(value) {
            const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
            const match = value.match(regex);
            if (!match) {
                throw new SyntaxError('Invalid hex format.');
            }
            this.#r = parseInt(match[1], 16);
            this.#g = parseInt(match[2], 16);
            this.#b = parseInt(match[3], 16);
        }
    }
    
    const rgb = new RGB();
    rgb.r = 15;
    rgb.g = 128;
    rgb.b = 192;
    console.log(rgb.hex); //#0F80C0
    console.log(rgb.rgb); //rgb(15,128,192)
    rgb.hex = '#2030FF';
    console.log(rgb.rgb); //rgb(32, 48, 255)
    rgb.rgb = 'rgb(100, 90, 50)';
    console.log(rgb.r, rgb.g, rgb.b); //100, 90, 50
    
    try {
        rgb.hex = 'діч'; //SyntaxError
    } catch (error) {
        console.error(error.message);
    }
    
    try {
        rgb.r = 1000;   //RangeError
    } catch (error) {
        console.error(error.message);
    }
}

{
    class RGB {
        constructor(r = 0, g = 0, b = 0) {
            this._r = r;
            this._g = g;
            this._b = b;
        }
    
        get r() {
            return this._r;
        }
    
        set r(value) {
            this._r = this._validateColor(value);
        }
    
        get g() {
            return this._g;
        }
    
        set g(value) {
            this._g = this._validateColor(value);
        }
    
        get b() {
            return this._b;
        }
    
        set b(value) {
            this._b = this._validateColor(value);
        }
    
        get hex() {
            return `#${this._componentToHex(this._r)}${this._componentToHex(this._g)}${this._componentToHex(this._b)}`;
        }
    
        set hex(hexValue) {
            const { r, g, b, a } = this._parseHex(hexValue);
            this._r = r;
            this._g = g;
            this._b = b;
            this._a = a;
        }
    
        get rgba() {
            return `rgba(${this._r},${this._g},${this._b},${this._a})`;
        }
    
        _parseHex(hex) {
            hex = hex.replace(/^#/, '');
            if (hex.length === 8) {
                return {
                    r: parseInt(hex.substring(0, 2), 16),
                    g: parseInt(hex.substring(2, 4), 16),
                    b: parseInt(hex.substring(4, 6), 16),
                    a: parseInt(hex.substring(6, 8), 16) / 255
                };
            } else if (hex.length === 6) {
                return {
                    r: parseInt(hex.substring(0, 2), 16),
                    g: parseInt(hex.substring(2, 4), 16),
                    b: parseInt(hex.substring(4, 6), 16),
                    a: 1
                };
            } else {
                throw new Error('Invalid hex format');
            }
        }
    
        _componentToHex(c) {
            const hex = c.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }
    
        _validateColor(value) {
            if (value < 0 || value > 255 || isNaN(value)) {
                throw new Error('Invalid color component');
            }
            return value;
        }
    }
    
    class RGBA extends RGB {
        constructor(r = 0, g = 0, b = 0, a = 1) {
            super(r, g, b);
            this._a = a;
        }
    
        get a() {
            return this._a;
        }
    
        set a(value) {
            if (value < 0 || value > 1 || isNaN(value)) {
                throw new Error('Invalid alpha value');
            }
            this._a = value;
        }
    
        get hex() {
            return super.hex + this._componentToHex(Math.round(this._a * 255));
        }
    
        set hex(hexValue) {
            const { r, g, b, a } = this._parseHex(hexValue);
            this._r = r;
            this._g = g;
            this._b = b;
            this._a = a;
        }
    
        set color(value) {
            if (value.startsWith('#')) {
                this.hex = value;
            } else if (value.startsWith('rgba(')) {
                const rgbaValues = value.substring(5, value.length - 1).split(',');
                this._r = parseInt(rgbaValues[0]);
                this._g = parseInt(rgbaValues[1]);
                this._b = parseInt(rgbaValues[2]);
                this._a = parseFloat(rgbaValues[3]);
            } else if (value.startsWith('rgb(')) {
                const rgbValues = value.substring(4, value.length - 1).split(',');
                this._r = parseInt(rgbValues[0]);
                this._g = parseInt(rgbValues[1]);
                this._b = parseInt(rgbValues[2]);
            } else {
                throw new Error('Invalid color format');
            }
        }
    
        get rgba() {
            return `rgba(${this._r},${this._g},${this._b},${this._a})`;
        }
    }
    
    const rgba = new RGBA();
    rgba.hex = '#80808080';
    console.log(rgba.a); // 0.5019607843137255
    console.log(rgba.rgba); // rgba(128,128,128,0.5019607843137255)
    rgba.r = 192;
    rgba.a = 0.25;
    console.log(rgba.hex); // #C0808040
    rgba.color = 'rgba(1,2,3,0.70)';
    rgba.b *= 10;
    console.log(rgba.hex); // #01021EB3
}