var button = document.querySelector('button');
var input1 = document.querySelector('#nombre');
var input2 = document.querySelector('#nombre2');
var operateur = document.querySelector('#operateur');
var res = document.querySelector('#resultat');
button.addEventListener('click', function(e){
	e.preventDefault();
	var ope = operateur.value;
	switch(ope) {
		case 1:
			ope = '+';
			break;
		case 2:
			ope = '*';
			break;
		case 3:
			ope = '-';
			break;
		case 4:
			ope = '/';
			break;
	}
	var result = input1.value + ope + input2.value;
	res.innerHTML = eval(result);
})
