// while confirm
{
  let answer;

  while (!answer) {
    answer = confirm("Купи слона");
  }
}
// array fill
{
  let arr = [];
  let userInput;

  while ((userInput = prompt("Введите елемент:"))) {
    arr.push(userInput);
  }
  console.log(arr);
}
// array fill nopush
{
  let arr = [];
  let userInput;

  while ((userInput = prompt("Введите елемент:"))) {
    arr[arr.length] = userInput;
  }
  console.log(arr);
}
// infinite probability

{
  let i = 0;
  while (Math.random()) {
    i++;
    if (Math.random() > 0.9) {
      break;
    }
  }
  alert(`Кількість ітерацій: ${i}`);
}
// empty loopF
{
  let answer;

  while ((answer = !confirm("Ок или отмена?"))) {}
}
// progression sum
{
  let N = prompt("Введіть число:"); // Запитати у користувача число
  let sum = 0;
  let currentNumber = 1;

  while (currentNumber <= N) {
    sum += currentNumber;
    currentNumber += 3;
  }
  console.log("Сумма арифметической прогрессии от 1 до", N, "с шагом 3:", sum);
}
// chess one line
{
  {
    let lengthLine = prompt("Введіть довжину рядка:");
    let chessLine = "";
    for (let i = 0; i < lengthLine; i++) {
      if (i % 2 === 0) {
        chessLine += "#";
      } else {
        chessLine += ".";
      }
    }
    console.log(chessLine);
  }
}
// numbers
{
  let result = "";

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      result += j;
    }
    result += "\n";
  }

  console.log(result);
}
// chess
{
  const rows = prompt("Введите количество рядков:");
  const columns = prompt("Введите количество колонок:");
  let result = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if ((i + j) % 2 === 0) {
        result += ".";
      } else {
        result += "#";
      }
    }
    result += "\n";
  }

  console.log(result);
}
// cubes
{
  let N = prompt("Введіть кількість елементів:");
  let cubesArr = [];
  for (let i = 0; i < N; i++) {
    cubesArr.push(i ** 3);
  }

  console.log(cubesArr);
}
// multiply table
{
  let multiplyTable = [];
  for (let i = 0; i < 10; i++) {
    multiplyTable[i] = [];
    for (let j = 0; j < 10; j++) {
      multiplyTable[i][j] = (i + 1) * (j + 1);
    }
  }
  console.log(multiplyTable);
}
// read array of objects
function readArrayOfObjects() {
  const arrayOfObjects = [];

  function readObject() {
    const obj = {};
    let key;

    while (
      (key = prompt(
        'Введіть назву ключа (або натисніть "Скасувати" для завершення введення)'
      ))
    ) {
      if (key === null) {
        return null;
      }
      const value = prompt(`Введіть значення для ключа "${key}"`);
      obj[key] = value;
    }
    return obj;
  }

  while (true) {
    const newObj = readObject();
    if (newObj === null) {
      break;
    }
    arrayOfObjects.push(newObj);

    const shouldContinue = confirm("Бажаєте продовжити додавання об'єктів?");
    if (!shouldContinue) {
      break;
    }
  }

  return arrayOfObjects;
}

const result = readArrayOfObjects();
console.log(result);
// Rombik
{
  const rombik = (size) => {
    let strRombik = "";
    const middle = Math.floor(size / 2);
    for (let i = 0; i < size; i++) {
      let dots = Math.abs(middle - i);
      let hashes = size - 2 * dots;
      strRombik += `${".".repeat(dots)}${"#".repeat(hashes)}${".".repeat(
        dots
      )}\n`;
    }
    return strRombik;
  };
  console.log(rombik(+prompt("Введіть розмір ромбу:")));
}
// DOM multiply table/highlight cell&cross
const table = document.createElement("table");

function highlightCross(event) {
  const cell = event.target;
  const row = cell.parentElement;
  const columnIndex = cell.cellIndex;

  row.classList.add("highlighted-row");

  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i]
      .getElementsByTagName("td")
      [columnIndex].classList.add("highlighted-column");
  }
}

function removeHighlightCross(event) {
  const cell = event.target;
  const row = cell.parentElement;
  const columnIndex = cell.cellIndex;

  row.classList.remove("highlighted-row");

  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i]
      .getElementsByTagName("td")
      [columnIndex].classList.remove("highlighted-column");
  }
}

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    cell.innerText = i * j;
    cell.addEventListener("mouseover", highlightCross);
    cell.addEventListener("mouseout", removeHighlightCross);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

document.body.appendChild(table);
