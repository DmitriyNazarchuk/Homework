//  Temperature
{
  const temperature = (x) => (x * 9) / 5 + 32;
  temperature(25);
}
// RGB
{
  function rgbToHex(r, g, b) {
    const redHex = r.toString(16).padStart(2, "0");
    const greenHex = g.toString(16).padStart(2, "0");
    const blueHex = b.toString(16).padStart(2, "0");

    return `#${redHex}${greenHex}${blueHex}`;
  }

  const colorHex = rgbToHex(255, 0, 0);
  console.log(colorHex); // "#ff0000"
}

// Flats

{
  function findApartmentLocation(
    totalFloors,
    apartmentsPerFloor,
    apartmentNumber
  ) {
    const totalApartments = totalFloors * apartmentsPerFloor;
    const entrance = Math.ceil(apartmentNumber / totalApartments);
    const floor = Math.ceil(
      (apartmentNumber % totalApartments) / apartmentsPerFloor
    );

    return { entrance, floor };
  }

  const result = findApartmentLocation(9, 4, 81); // { entrance: 3, floor: 3 }
  console.log(result);
}
// Credentials
{
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  function getCredentials() {
    const name = prompt("Введіть ваше ім'я:").trim();
    const surname = prompt("Введіть ваше прізвище:").trim();
    const fatherName = prompt("Введіть ваше по батькові:").trim();

    const capitalized_name = capitalize(name);
    const capitalized_surname = capitalize(surname);
    const capitalized_fatherName = capitalize(fatherName);

    const fullName = `${capitalized_name} ${capitalized_surname} ${capitalized_fatherName}`;

    return {
      name: capitalized_name,
      surname: capitalized_surname,
      fatherName: capitalized_fatherName,
      fullName,
    };
  }

  const userCredentials = getCredentials();
  console.log(userCredentials);
}
// New line
{
  {
    const newLine = (x) => x.split(`\\n`).join(`\n`);
    console.log(
      newLine(prompt(`Введіть текст, видділяючи рядки за допомогою \\n:`))
    );
  }
}
// Prompt OR
{
  const age = () => prompt("Введіть свій вік:") || alert("Введіть ще раз:");
  console.log(age());
}
// LoginAndPassword
{
  const loginAndPassword = (login, password) => {
    login = prompt("Введіть логін:");
    password = prompt("Введіть пароль:");
    return login === "admin" && password === "qwerty";
  };
  console.log(loginAndPassword());
}
// For Table
{
  const multiplyTable = (arr) => {
    let str = "<table>";
    for (let arr1 of arr) {
      str +=
        arr.indexOf(arr1) % 2 === 0
          ? "<tr style='background-color: lightblue;'>"
          : "<tr style='background-color: lightyellow;'>";
      for (let element of arr1) {
        str += `<td>${element}</td>`;
      }
      str += "</tr>";
    }
    str += "</table>";
    document.write(str);
    return str;
  };
  multiplyTable([
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16],
  ]);
}
// Filter Lexics
{
  const filterLexics = (string, matuki) => {
    const neMatuk = (word) => {
      return !matuki.includes(word);
    };
    return string.split(" ").filter(neMatuk).join(" ");
  };
  const matuki = ["бляха", "муха", "пляшка", "шабля"];
  const result = filterLexics(prompt("Введить рядок з матюками:"), matuki);
  console.log(result);
}

// Currency Table
{
  function createForum(obj) {
    let str = "<form>";
    for (const keys in obj) {
      str += `<label> ${keys}: <input type="${
        typeof obj[keys] === "number"
          ? "number"
          : typeof obj[keys] === "string"
          ? "text"
          : "checkbox"
      }" value="${obj[keys]}"/></label>`;
    }
    str += "</form>";
    document.write(str);
  }
}
// Form
{
  const car = {
    Name: "chevrolet chevelle malibu",
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Origin: "USA",
    in_production: false,
  };
  createForum(car);
}
// Array of objects sort
{
  function sort(arr, prop, ascending = true) {
    if (!prop) return arr;
    f;
    arr.sort((a, b) => {
      let comparison = 0;
      if (a[prop] > b[prop]) {
        comparison = 1;
      } else if (a[prop] < b[prop]) {
        comparison = -1;
      }
      return ascending ? comparison : comparison * -1;
    });
    return arr;
  }

  let persons = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 35 },
    { name: "Олексій", age: 73 },
    { name: "Яків", age: 12 },
  ];

  console.log(sort(persons.slice(), "age"));
  console.log(sort(persons.slice(), "name", false));
}
// Table
function generateTable(data, sortBy, sortOrder = "asc") {
  const sortedData = [...data];

  sort(sortedData, sortBy, sortOrder === "asc");

  const columns = new Set();
  sortedData.forEach((obj) =>
    Object.keys(obj).forEach((key) => columns.add(key))
  );

  let tableHTML = "<table><thead><tr>";
  columns.forEach((column) => {
    tableHTML += `<th>${column}</th>`;
  });
  tableHTML += "</tr></thead><tbody>";

  sortedData.forEach((obj) => {
    tableHTML += "<tr>";
    columns.forEach((column) => {
      tableHTML += `<td>${obj[column]}</td>`;
    });
    tableHTML += "</tr>";
  });

  tableHTML += "</tbody></table>";

  return tableHTML;
}

const persons = [
  {
    name: "Марія",
    fatherName: "Іванівна",
    surname: "Іванова",
    sex: "female",
  },
  {
    name: "Миколай",
    fatherName: "Іванович",
    surname: "Іванов",
    age: 15,
  },
  {
    name: "Петро",
    fatherName: "Іванович",
    surname: "Іванов",
    married: true,
  },
];

console.log(generateTable(persons, "name"));
console.log(generateTable(persons, "name", "desc"));

// Divide
{
  const calcResult = () => {
    if (
      isNaN(firstNumber.value) ||
      isNaN(secondNumber.value) ||
      secondNumber.value === 0
    ) {
      divisionResult.innerHTML = `<strong>Некоректні дані або ділення на нуль</strong><br/>`;
    } else {
      const result = Math.floor(firstNumber.value / secondNumber.value);
      divisionResult.innerHTML = `<strong>Результат поділу: ${result}</strong><br/>`;
    }
    console.log(
      firstNumber.value,
      secondNumber.value,
      divisionResult.innerHTML
    );
  };
  firstNumber.oninput = secondNumber.oninput = calcResult;
}
// Calc func
{
  const calcFunc = (quantityBread, priceBread, quantityMilk, priceMilk) => {
    const totalPriceBread = quantityBread * priceBread;
    const totalPriceMilk = quantityMilk * priceMilk;
    const totalPrice = { totalPriceBread, totalPriceMilk };
    return totalPrice;
  };
  console.log(calcFunc(5, 20, 6, 35));
}
// Calc Live
{
  const calcLive = () => {
    divisionResult1.innerHTML = `<strong>Загальна сума покупки: ${
      quantityBread.value * priceBread.value +
      quantityMilk.value * priceMilk.value
    } грн.</strong><br/>`;
  };
  quantityBread.oninput =
    priceBread.oninput =
    quantityMilk.oninput =
    priceMilk.oninput =
      calcLive;
}
