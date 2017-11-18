var button = document.querySelector('button');
var input1 = document.querySelector('#nombre');
var input2 = document.querySelector('#nombre2');
var operateur = document.querySelector('#operateur');
var res = document.querySelector('#resultat');
button.addEventListener('click', function(e){
	e.preventDefault();
	var ope = operateur.value;
	var result;
	switch(ope) {
		case '1':
			ope = '+';
			break;
		case '2':
			ope = '*';
			break;
		case '3':
			ope = '-';
			break;
		case '4':
			ope = '/';
			break;
	}

	if (input1.value === '' || input2.value === '' || ope === '') {
		result = 'aucun champ ne doit etre vide';
		res.innerHTML = result;
		return;
	} else if (ope == '/' && input1.value === '0' || input1.value === '0') {
		result = 'la division par 0 est impossible';
		res.innerHTML = result;
		return;
	} 
		result = input1.value + ope + input2.value;
		res.innerHTML = eval(result)
	
	
})
