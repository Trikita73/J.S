function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("вася") ); // Вася




/*let newStr = str[0].toUpperCase() + str.slice(1);*/
/*Однако есть небольшая проблемка. Если строка пуста, str[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку.*/