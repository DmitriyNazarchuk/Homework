//Literals / Expand / Copy
{
  const dualsense = {
    charger: "type-c",
    color: "white",
    price: "70$",

    [prompt("Введіть додаткову властивість 1: ")]: prompt("введіть значення: "),
    [prompt("Введіть додаткову властивість 2: ")]: prompt("введіть значення: "),
  };
  console.log(dualsense);

  const dualsense2 = { ...dualsense };
  dualsense2[prompt("Введіть ще одну властивість: ")] =
    prompt("введіть значення: ");
  console.log(dualsense2);
}
// html tree
{
  const body = {
    tagName: "body",
    children: [
      {
        tagName: "div",
        children: [
          {
            tagName: "span",
            children: ["Enter a data please:"],
          },
          {
            tagName: "br",
          },
          {
            tagName: "input",
            attrs: {
              type: "text",
              id: "name",
            },
          },
          {
            tagName: "input",
            attrs: {
              type: "text",
              id: "surname",
            },
          },
        ],
      },
      {
        tagName: "div",
        children: [
          {
            tagName: "button",
            attrs: {
              id: "ok",
            },
            children: ["OK"],
          },
          {
            tagName: "button",
            attrs: {
              id: "cancel",
            },
            children: ["Cancel"],
          },
        ],
      },
    ],
  };
  console.log(body.children[1].children[1].children),
    console.log(body.children[0].children[3].attrs.id);

  //Parent
  body.children[0].parent = body;
  body.children[1].parent = body;
  body.children[0].children[0].parent = body.children[0];
  body.children[0].children[1].parent = body.children[0];
  body.children[0].children[2].parent = body.children[0];
  body.children[0].children[3].parent = body.children[0];
  body.children[1].children[0].parent = body.children[1];
  body.children[1].children[1].parent = body.children[1];

  //Change OK
  body.children[1].children[0].attrs[
    prompt("Введіть атрибут щоб додати/змінити: ")
  ] = prompt("Введіть його значення: ");

  //Destructure
  const {
    children: [
      {
        children: [
          {
            children: [span],
          },
        ],
      },
    ],
  } = body;
  const {
    children: [
      ,
      {
        children: [
          ,
          {
            children: [btn2],
          },
        ],
      },
    ],
  } = body;
  const {
    children: [
      {
        children: [
          ,
          ,
          ,
          {
            attrs: { id: idInput2 },
          },
        ],
      },
    ],
  } = body;

  console.log(span, btn2, idInput2);
}
//Destruct array
{
  let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

  let [even1, even2] = arr.filter(
    (item) => typeof item === "number" && item % 2 === 0
  );
  let [odd1, odd2, odd3] = arr.filter(
    (item) => typeof item === "number" && item % 2 === 1
  );
  let [...str] = arr.filter((item) => typeof item === "string");

  console.log(even1, even2, odd1, odd2, odd3);
  console.log(str);
}

//Destruct string
{
  let arr = [1, "abc"];
  let [number, [s1, s2, s3]] = arr;
}

//Destruct 2
{
  let obj = {
    name: "Ivan",
    surname: "Petrov",
    children: [{ name: "Maria" }, { name: "Nikolay" }],
  };

  let {
    children: [{ name: name1 }, { name: name2 }],
  } = obj;
  console.log(name1, name2);
}

//Destruct 3
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 10];
  let { 0: a, 1: b, length } = arr;
  console.log(a, b, length);
}

//Copy delete
{
  const dualsense = {
    color: "white",
    charger: "Type-C",
    price: "70$",
  };

  const keyToDelete = prompt("Введіть ключ, який потрібно видалити з об'єкта:");
  const { [keyToDelete]: deletedKey, ...rest } = dualsense;
  console.log(rest);
}

//Currency real rate
{
  let beforeValuta = prompt("Введіть початкову валюту: ");
  let afterValuta = prompt("Введіть валюту для конвертації: ");
  let summa = +prompt("Введіть суму: ");

  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      let conversionRate =
        data.rates[afterValuta.toUpperCase()] /
        data.rates[beforeValuta.toUpperCase()];
      let result = summa * conversionRate;

      console.log(result.toFixed(2) + " " + afterValuta.toUpperCase());
      console.log(data);
    });
}

//Currency drop down
{
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      let str = "<select>";

      for (key in data.rates) {
        str += `<option>${key}</option>`;
      }

      str += "</select>";

      document.write(str);
      console.log(data);
    });
}

//Currency table
{
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      str2 = "<table>";

      str2 += "<tr><th></th>";
      for (key in data.rates) {
        str2 += `<th>${key}</th>`;
      }
      str2 += "</tr>";

      for (key in data.rates) {
        str2 += `<tr><td style="font-weight: 700">${key}</td>`;
        for (key2 in data.rates) {
          let res = data.rates[key] / data.rates[key2];
          str2 += `<td> ${res.toFixed(2)} </td>`;
        }
        str2 += "</tr>";
      }

      str2 += "</table>";

      document.write(str2);
      console.log(data);
    });
}
// Form
