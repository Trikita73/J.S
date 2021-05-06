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