{
//  greeting 
let name = prompt ('Пожалуйста, введите ваше имя:');
alert ('Привет,'  + name );
}
//  gopni4ek
{
let inputString = prompt ('Пожалуйста, введите строку:');
let wordsArray = inputString.split(',');
let modifiedString = wordsArray.join (', блин,');
alert(modifiedString);
}
// capitalize
{
let str = prompt('Пожалуйста, введите строку:');
let result = str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
console.log(result)
}
{
// word count 
let str = prompt('Пожалуйста, введите строку:');
let wordsArray = str.split(' ');
let wordCount = wordsArray.length;
console.log('Количество слов в строке:', wordCount);
}
{
// credentials
let lastName = prompt('Введите имя:');
let firstName = prompt('Введите Фамилию:');
let patronymic = prompt('Введите Отчество:');

lastName = lastName.trim().toLowerCase().replace(/^\w|\s\w/g, function (letter) {
    return letter.toUpperCase();
});
firstName = firstName.trim().toLowerCase().replace(/^\w|\s\w/g, function (letter) {
    return letter.toUpperCase();
});
patronymic = patronymic.trim().toLowerCase().replace(/^\w|\s\w/g, function (letter) {
    return letter.toUpperCase();
});

let fullName = lastName + ' ' + firstName + ' ' + patronymic;

console.log(fullName);

}
{
// beer
let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let result = str.split(' ').map(word => word === 'пиво' ? 'чай' : word).join(' ');
console.log(result); 
}
{
// no tag
let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tagStartIndex = str.indexOf('<');
let tagEndIndex = str.indexOf('>');

while (tagEndIndex !== -1 && str[tagEndIndex] !== '>') {
  tagEndIndex = str.indexOf('>', tagEndIndex + 1);
}
if (tagStartIndex !== -1 && tagEndIndex !== -1) {
  result = str.slice(0, tagStartIndex) + str.slice(tagEndIndex + 1);
} else {
  result = str;
}
console.log(result);
}
{
// big tag
let str = "якийсь текст у якому є один тег <br /> і всяке інше";
let tagStartIndex = str.indexOf('<');
let tagEndIndex = str.indexOf('>');

while (tagEndIndex !== -1 && str[tagEndIndex] !== '>') {
  tagEndIndex = str.indexOf('>', tagEndIndex + 1);
}
if (tagStartIndex !== -1 && tagEndIndex !== -1) {
  result = str.slice(0, tagStartIndex) + str.slice(tagStartIndex, tagEndIndex + 1).toUpperCase() + str.slice(tagEndIndex + 1);
} else {
  result = str;
}
console.log(result);
}
{
// new line 
let inputString = prompt('Введите строку. Используйте \\n как маркер нового рядка:');
inputString = inputString.split('\\n').join('\n');
console.log(inputString);
}
{
// youtube
const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
let userInput = prompt('Будь ласка, введіть текст з посиланням на YouTube:');
let match = userInput.match(youtubeRegex);

if (match) {

let videoId = match[1];
let embeddedVideoHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

document.write(embeddedVideoHtml);

} else {
document.write("Посилання на YouTube не знайдено.");
}

}   