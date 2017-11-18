var button = document.querySelector('button');
var input1 = document.querySelector('#nombre');
var input2 = document.querySelector('#nombre2');
var operateur = document.querySelector('#operateur');
var res = document.querySelector('#resultat');
button.addEventListener('click', function(e){
	e.preventDefault();
	if (operateur.value == 1) {
		operateur = '+';
	} else if (operateur.value == 2) {
		operateur = '*';
	}
	var result = input1.value + operateur + input2.value;
	res.innerHTML = eval(result);
})
