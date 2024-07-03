// 1.	Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const number = parseInt(prompt('Введите число от 0 до 9:'));
  if (isNaN(number)) {
    alert('Введено не число.');
  } else if (number < 0 || number > 9) {
    alert('Введите число от 0 до 9.');
  } else if (isNaN(number) || number < 0 || number > 9); {
  switch (number) {
  case 0:
    alert('!');
    break;
  case 1:
    alert('@');
    break;
  case 2:
    alert('#');
    break;
  case 3:
    alert('$');
    break;
  case 4:
    alert('%');
    break;
  case 5:
    alert('^');
    break;
  case 6:
    alert('&');
    break;
  case 7:
    alert('*');
    break;
  case 8:
    alert('(');
    break;
  case 9:
    alert(')');
    break;
  default:
    alert('Введено неверное число.');
}
}

// 2. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
function checkThreeDigitNumbers (number2) // Number2 - это аргумент, который принимает данная функция, то есть number - это то число, которое мы хотим проверить на наличие одинаковых цифр
{
   //Проверка на трехзначность
  if(number2 < 100 || number2 > 999) {
console.error("Введено не трехзначное число!!!")
return false; 
}
//Извлечение цифр
const hundredsDigit = Math.floor(number2 / 100); //Math.floor округляет полученное число вниз до ближайшего целого.
const tensDigit = Math.floor((number2 % 100) / 10); //используем для получения десятков
const unitsDigit = number2 % 10; 
//данные переменные содержат значения сотен, десятков и единиц 

//Для проверки на наличие одинаковых цифр используется тернарный оператор, работающее так: условие ? значение1 :значение2 ;
const hasMatchiningDigits = 
hundredsDigit === tensDigit || hundredsDigit === unitsDigit || tensDigit === unitsDigit;
alert(hasMatchiningDigits ? "В числе есть одинаковые цифры" : "В числе нет одинаковых цифр");
return hasMatchiningDigits;
}

// Запрашиваем число у пользователя
const userInput = prompt("Введите трехзначное число:");
const number2 = parseInt(userInput);

const hasMatchiningDigits = checkThreeDigitNumbers(number2);

if (hasMatchiningDigits) {
  alert("В числе есть одинаковые цифры");
} else {
  alert("В числе нет одинаковых цифр");
}


// 4.	Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.



// 5.	Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.  
const amountInput = document.querySelector('.task5 .input');
const button5 = document.querySelector('.task5 .button5');
const resultElement = document.querySelector('.task5 .result5');

button5.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  if(isNaN(amount) || amount <= 0){
    resultElement.textContent = 'Неверная сумма!';
    return;
  }

  let discountRate = 0;
  let totalAmount = amount;

  if (amount >= 200 && amount < 300) {
    discountRate = 3;
  } else if (amount >= 300 && amount < 500) {
    discountRate = 5;
  } else if (amount >= 500) {
    discountRate = 7;
  }
  if (discountRate > 0) {
    const discountAmount = amount * discountRate / 100;
    totalAmount = amount - discountAmount;
    resultElement.textContent = `
          Сумма покупки: ${amount};
          Скидка: ${discountRate}%;
          Сумма к оплате: ${totalAmount.toFixed(2)};
        `;
  } else {
    resultElement.textContent = `
          Сумма покупки: ${amount}
          Скидка не предусмотрена.
          Сумма к оплате: ${amount.toFixed(2)}
        `;
  }
} );
//В самом начале мы используем функцию document.querySelector(), чтобы получить доступ к элементам HTML.
const input1 = document.querySelector('.task6 .input1');
const input2 = document.querySelector('.task6 .input2');
const button6 = document.querySelector('.task6 .button6');
const result = document.querySelector('.task6 .result6');

//Далее мы используем метод addEventListener(),чтобы "повесить" функцию на кнопку button. Эта функция будет вызываться, когда пользователь кликнет на кнопку.
button6.addEventListener('click', () => {
  //внутри код который будет выполняться при клике на кнопку 
  const circumference = parseFloat(input1.value); //используем parseFloat(),чтобы приобразовать значения из текстовых строк в числа
  const perimeter = parseFloat(input2.value);
  const sideLenght = perimeter / 4; //делим периметр на 4, чтобы получить длину стороны квадрата(sideLenght)
  const radius = circumference /(2 * Math.PI); //расчет радиуса окружности

  //используем тернарный оператор для проверки 
  //fits- это переменная которая будет true, если окружность поместится, и false - если нет.
  const fits = radius <= sideLenght; //используем оператор <=(меньше или равно), так как радиус должен быть меньше или равен стороне, чтобы поместиться

  //message - это переменная в которую записываем сообщение, которое будет отображаться в зависимости от fits 
  const message = fits ? 'Окружность поместится в квадрат.' : 'Окружность не поместится в квадрат.';

  //используем result.textContent, чтобы изменить содеримое элемента result на message
  result.textContent = message;
}
);

const questions = [
  { question: 'Что такое "Википедия"?', options: ['Сайт', 'Библиотека', 'Справочник'], correctAnswer: 0 },
  { question: 'Растение, которое знает практически все', options: ['Морковь', 'Хрен', 'Огурец'], correctAnswer: 1 },
  { question: 'Сколько программистов нужно, чтобы починить микроволновку?', options: ['Один', 'Четыре', 'Ни одного'], correctAnswer: 2 },
];

// Получаем ссылки на элементы HTML
const answers1 = document.getElementById("answers1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const submitButton = document.getElementById("submit-button");
const res = document.querySelector(".result7");

// Устанавливаем начальное значение для количества баллов
let score = 0;

// Добавляем обработчик события "click" для кнопки
submitButton.addEventListener("click", () => {
  // Проверяем ответ на первый вопрос
  if (answers1.value === "0") {
    score += 2;
  }

  // Проверяем ответ на второй вопрос
  if (answer2.value === "1") {
    score += 2;
  }

  // Проверяем ответ на третий вопрос
  if (answer3.value === "2") {
    score += 2;
  }

  // Выводим результат
  res.textContent = `Количество набранных баллов: ${score}`;
console.log(res)
});

const inputDate = document.querySelector('.input');
const buttonLast = document.querySelector('.button8');
const lastElement = document.querySelector('.result8');

buttonLast.addEventListener('click', () => {
  const selectedDate = new Date(inputDate.value);
  const nextDate = getNextDate(selectedDate);

  lastElement.textContent = `Следующая дата: ${nextDate.toLocaleDateString()}`;
});

function getNextDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let nextDay = day + 1;
  let nextMonth = month;
  let nextYear = year;

  // Check for end of month
  if (nextDay > getDaysInMonth(month, year)) {
    nextDay = 1;
    nextMonth++;
  }

  // Check for end of year
  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear++;
  }

  return new Date(nextYear, nextMonth, nextDay);
}

function getDaysInMonth(month, year) {
  if (month === 1 && isLeapYear(year)) {
    return 29;
  } else {
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  }
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

