// Table
{
  const persons = [
    {
      Name: "chevrolet chevelle malibu",
      Cylinders: 8,
      Displacement: 307,
      Horsepower: 130,
      Weight_in_lbs: 3504,
      Origin: "USA",
    },
    {
      Name: "buick skylark 320",
      Miles_per_Gallon: 15,
      Cylinders: 8,
      Displacement: 350,
      Horsepower: 165,
      Weight_in_lbs: 3693,
      Acceleration: 11.5,
      Year: "1970-01-01",
    },
    {
      Miles_per_Gallon: 18,
      Cylinders: 8,
      Displacement: 318,
      Horsepower: 150,
      Weight_in_lbs: 3436,
      Year: "1970-01-01",
      Origin: "USA",
    },
    {
      Name: "amc rebel sst",
      Miles_per_Gallon: 16,
      Cylinders: 8,
      Displacement: 304,
      Horsepower: 150,
      Year: "1970-01-01",
      Origin: "USA",
    },
  ];

  let header = [];
  for (i of persons) {
    header.push(...Object.keys(i));
  }

  let col = [];
  for (item of header) {
    if (!col.includes(item)) {
      col.push(item);
    }
  }
  console.log(col);

  let str4 = `<table><tr>`;
  for (item of col) {
    str4 += `<th>${item}&nbsp</th>`;
  }
  str4 += `</tr>`;

  for (obj of persons) {
    str4 += `<tr>`;
    for (keyTrue of col) {
      if (keyTrue in obj) {
        str4 += `<td>${obj[keyTrue]}</td>`;
      } else {
        str4 += `<td></td>`;
      }
    }
    str4 += `</tr>`;
  }

  str4 += `</table>`;

  document.write(str4);
}
