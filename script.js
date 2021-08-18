console.log("Javascript carregado");

function validaCPF(cpf) {
	if (cpf.length != 11) {
		return false;
	} else {
		var num = cpf.substring(0, 9);
		var dig = cpf.substring(9);
		var soma = 0;

		for (var i = 10; i > 1; i--) {
			//retorna a posição da string na lista;
			soma += num.charAt(10 - i) * i;
		}

		//Operador ternário.
		var result = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		console.log("Resultado da soma " + result);

		if (result != dig.charAt(0)) {
			return false;
		}

		soma = 0;
		num = cpf.substring(0, 10);

		for (var k = 11; k > 1; k--) {
			soma += num.charAt(11 - k) * k;
		}

		result = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		if (result != dig.charAt(1)) {
			return false;
		}

		return true;
	}
}

function validacao() {
	console.log("Iniciando validação CPF");
	document.getElementById('success').style.display = "none";
	document.getElementById('error').style.display = "none";

	//Pega o elemento pelo ID no HTML.
	var cpf = document.getElementById("cpf_digitado").value;
	var resultadoValidacao = validaCPF(cpf);

	if (resultadoValidacao == true) { //Poderia ser if (resultadoValidacao)
		document.getElementById('success').style.display = "block";
	} else {
		document.getElementById('error').style.display = "block";
	}
}