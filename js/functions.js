// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.

// через стрелочную функцию и тернарный оператор
const checkStringLength = (string, lengthNumber) => string.length <= lengthNumber;

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом

function checkPalindrom (string) {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalString.length - 1; i >= 0; i--) {
    reversedString += normalString[i];
  }

  return reversedString === normalString;
}

checkPalindrom('топот'); // true
checkPalindrom('ДовОд'); // true
checkPalindrom('Кекс'); // false
