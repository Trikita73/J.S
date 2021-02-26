// 1.1 Переменные 
// camelCase
//var name ='Adnrii' // string 
//const firstName = 'Andrey' 
//const lastName = 'Diach' // number

//name = 'Andrey'
//age = 30
//lastNae = Diachenko

//const isProgrammer = true // boolean

//const_private = 'private'
//onst $ = 'some value'

// const if = 'mket' // err
//const withNum7 = '7'
// const 5withNum = 7 //err

//console.log(firstName)

// 1.2 Мутирование

//console.log('Имя Человека: ' + firstName)
//console.log('Имя Человека: ' + ', а возраст человека:' + age)
//console.log(age)
//console.log(age.toString())

//alert('Имя Человека: ' + firstName)


//alert(firstName + ' ' + lastName)

// 3 Операторы 
//const currentYear = 2020
//const birthYear = 1991

//const age = currentYear - birthYear


//alert("Hello")

//let message = 'Hello2'
//alert(message)


// Переменные //

//let admin, name;
//name = "Djon";
//admin = name;
//alert(admin);

//let age;
//alert(age); // выведет "undefined"

//let name = "Ilya";
//alert( `hello ${1}` ); // ?
//alert( `hello ${"name"}` ); // ?
//alert( `hello ${name}` ); // ?

//let isBoss = confirm("Ты здесь главный?");
//alert( isBoss ); // true, если нажата OK

//let age = prompt('Сколько тебе лет?', 100);
//alert(`Тебе ${age} лет!`); // Тебе 100 лет!

//let = prompt("Сколько тебе лет!", "")
 //alert (name)

 //let name = prompt("Write ur name", "");
 //alert (name);


// Операторы if...else

/*
let value = prompt("Oficial name J.S?", '');

 if (value == 'ECMASript') {
	 alert("Right!");
 } else {
	 alert ("No");
 }

/////////////////////////////////////////

 let number = prompt("Write Number", '');

 if (number > 0) {
		alert ("1")
 }else if (number < 0) {
		alert ("- 1");
 }else if (number == 0) {
	 	alert("0");
 }else {
	 alert('something wrong');
 }
*/

//if (age >= 14 && age <= 90);

//if(!(age >==14 && age <==90))

/*
let login = prompt('Введите логин', '');

if(login == 'Admin') {
	let password = prompt('Введите пароль', '');
	if(password == 'I am main') {
		alert("Привет Админ");
	}else if(password == '' || password == null) {
		alert('Отмена');
	}else {
		alert('не верный пароль');
	}
}else if(login == '' || login == null) {
	alert('Отмена');
}else {
	alert('не верный логин');
}
*/

// Оператор <<??>>

/*
let user;
alert(user ?? 'Аноним'); // Аноним 

let user = 'Vasya'
Alert(user ?? 'Аноним'); // Vasya
*/


// Циклы While, do...While, for (дерективы: break, continue)

/*
let i =3;

while (i) {
	alert( i-- ); // 3,2,1
}
*/


/*
let i = 0;

while (++i < 5){
	alert (i); // 1,2,3,4
}
*/

/*
let i = 0;

while (i++ < 5){
	alert (i); // 1,2,3,4,5
}
*/

/*
for (let i = 0; i < 5; i++) {
	alert(i) // 0,1,2,3,4
}
*/

/*
for (let i = 0; i < 5; ++i) {
	alert(i) // 0,1,2,3,4
}
*/

// Вывести четные числа от 2 до 10

/*
for (let i = 2; i <=10; i++) {
	if(i % 2 == 0) { //Для проверки на чётность мы здесь используем оператор получения остатка от деления %.
		alert(i);
	}
}
*/

// Аналог for and while, do...while

/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}` );
}

//----

let i = 0;
	do {
		alert( `number: ${i}` );
		i++;
	}while(i < 3);

//-----

let i = 0;
	while (i < 3) {
		alert( `number ${i}` );
		i++;
	}
*/


// Повторять цикл, пока ввод неверен

/*
let num;

do {
	num = prompt("Введите число больше 100!", '');
}while(num <= 100 && num);

//------

let num 

do { 
	num = prompt("Введите число больше 100!", '');
	if(num > 100 || num == null)break;
}while(num);

*/

// Вывести простые числа

/*
let n = 10

nextPrime:for(i = 2; i <=n; i++) { // Для всех i...
	for (j = 2; j < i; j++) { // проверить, делится ли число..
		if(i % j == 0) continue nextPrime; // не подходит, берём следующее
	}
	alert (i); //простое число
}
*/

// Конструкция Switch

/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

// Аналог Switch - if...else

let browser = prompt('Введите название браузера:', '');

if(browser == 'Edge') {
	alert("You've got the Edge!");
}else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
	alert('Okay we support these browsers too');
}else {
	alert('We hope that this page looks ok!');
}
*/

/*
const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
	case 0:
		alert('Вы ввели число 0');
		break;
	case 1:
		alert('Вы ввели число 1');
		break;
	case 2:
	case 3:
		alert('Вы ввели число 2, а может и 3');
		break;
	default:
		alert('Неверное число!')			
}
*/

// Функции

/*
function checkAge(age) {
	if(a > 18) {
		return true;
	}else {
		return confirm('Родители разрешили?');
	}
}

// Аналог '?' и '||'

// Пример '||'
function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?'); 
}

// Пример '?'
function checkAge(age) {
	return (age >18) ? true : confirm('Родители разрешили?');
}
*/


// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

/*
function getMin(a, b) {
	if(a < b){
		return a;
	}else {
		return b;
	}
}

//Вариант решения с оператором ?:

function getMin(a, b) {
	return a < b ? a : b;
}

//P.S. В случае равенства a == b не имеет значения, что возвращать.
*/

//TUSK
// 1.1. Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// 2.1. Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

/*
//1.1
// 1) pow(3, 2) = 3 * 3 = 9
// 2) pow(3, 3) = 3 * 3 * 3 = 27
// 3) pow(1, 100) = 1 * 1 * ...* 1 = 1

function getPow(x, n) {

		return x ** n;
}

console.log(getPow(2, 3));


function getPow(x, n ) {
	return x ** n;
}

console.log(getPow(3, 3));

function getPow(x, n) {
	return x ** n;
}

console.log(getPow(1, 100));
*/

/*
function getPow(x, n) {
	let result = 1;
	for(let i =1; i < n; i++) {
		result *= x;
  }
	return result;
}
	let x = prompt("Введите число x", '');
	let n = prompt("Введите число n", '');

	if(n <1) {
		alert(`Степень ${n} не поддерживается, используйте натуральное число`);
	} else {
	alert(getPow(x, n));
}
*/

// Функции-стрелки

//Заменитm код Function Expression стрелочной функцией:

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

// Решение

// Пример 1:

/*
let ask  = (question, yes, no) =>  (confirm(question) ? yes() : no());

let yes = () => alert("Вы согласились.");
let no  = () => alert("Вы отменили выполнение.");

ask("Вы согласны?", yes, no);
*/

// Пример 2:

function ask(question, yes, no) {
	if(confirm(question)) yes()
	else no();
}

ask(
	"Вы согласны?",
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение."),
);