// blocks
{
let a = 10
{
    let b = 20
    {
        let c = 30
        // a=100 b=21 c=30 d=не объявлен
        b++
        a *= 10
    }
    {
        let c = 50
        //a=100 b=521 c=50 d=не объявлен
        b += 500
    }
    {
        const a = 100500
        const d = "value"
        //a=100500 b=521 d="value"
        {
            let a = -50
            b     = 1000
            //a=-50 b=1000 d="value"
        }
        //a=100500 b=1000 d="value"
    }
    //a=10 b=20(c,d=не объявлены)
}
//a=10 (b,c,d=не объявлены)
}
// comparison if
{
let age = + prompt ("Скільки вам років?", "");
if (age <0) {
    alert("скiки?")
}
else if (age < 18) {
    alert("школяр");
}
else if (age > 18 && age < 30){
    alert("молодь");
}
else if (age > 30 && age < 45){
    alert("зрілість");
}
else if (age > 45 && age < 60){
    alert("захід сонця");
}
else if (age > 60) {
    alert("як пенсія?");
}
else {
    alert("чи кіборг, чи KERNESS");
}
}
// switch: sizes
{
const size = prompt("Введите свой размер US");
    switch (size){
        case "10": 
        alert("Ваш международный размер: XS")
        break;
        case "12": 
        alert("Ваш международный размер: S")
        break;
        case "14": 
        alert("Ваш международный размер: M")
        break;
        case "16": 
        alert("Ваш международный размер: L")
        break;
        case "18": 
        alert("Ваш международный размер: XL")
        break;
    }    
}
// switch: if
{
let color = prompt("Введіть колір","");
    if (color === "red" || color=== "black") {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if (color === "blue" || color=== "green"){
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else{
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }   
}
// noSwitch 
{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (cases.hasOwnProperty(key)) {
            caseskey;
        } else if (cases.hasOwnProperty(defaultKey)) {
            casesdefaultKey;
        } else {
            console.log('Невідомий ключ');
        }
    };
    
    const drink = prompt('Що ви любите пити?');
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай() {
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
        },
        пиво: () => console.log('Добре влітку, та в міру'),
        віскі() {
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
        },
        default() {
            console.log('Щось я не зрозумів');
        },
    });
}
// Closure Calc 
{
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {

        const container = document.createElement('div');
        document.body.appendChild(container);

        for (const currency in data.rates) {
            if (data.rates.hasOwnProperty(currency)) {
                const button = document.createElement('button');
                button.innerText = currency; 

                button.onclick = () => {
                    const amount = parseFloat(prompt(`Введіть суму в ${currency}:`));
                    if (!isNaN(amount)) {
                        const convertedAmount = amount / data.rates[currency]; 
                        console.log(`Сума в USD: ${convertedAmount.toFixed(2)}`);
                    } else {
                        console.log('Невірна сума. Спробуйте ще раз.');
                    }
                };

                container.appendChild(button);
            }
        }
    });   

}
// 
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()).then(data => {
        for (const currency in data.rates) {
            const optionFrom = document.createElement('option');
            optionFrom.innerText = currency;
            from.append(optionFrom);
            const optionTo = document.createElement('option');
            optionTo.innerText = currency;
            to.append(optionTo);
        }
        const conversion = () => {
            rate.innerText = `Курс між ${from.value} та ${to.value}: ${(data.rates[to.value] / data.rates[from.value]).toFixed(2)}`;
            const resultAmount = (data.rates[to.value] / data.rates[from.value] * amount.value).toFixed(2);
            result.innerText = `Сума у ${amount.value} ${to.value} дорівнює ${resultAmount} ${from.value}.`
        }
        from.onchange = conversion;
        to.onchange = conversion;
        amount.oninput = conversion;
    })
    }

// Countries and cities

{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
    .then(res => res.json())
    .then(data => {
        for (const country in data) {
            const option = document.createElement('option');
            option.innerText = country;
            countries.append(option);
        }
        countries.onchange = () => {
            cities.innerHTML = '';
            for (const city of data[countries.value]) {
                const option = document.createElement('option');
                option.innerText = city;
                cities.append(option);
            }
        };
        countries.onchange();
    })
    }