function clickApresentacao(){
	document.getElementById("titulo").innerHTML = "ADMINISTRAÇÃO";
	document.getElementById("localAtual").innerHTML = "Apresentação";
	document.getElementById("apresentacao").classList.add("selected");
	document.getElementById("infraestrutura").classList.remove("selected");
}

function clickInfraestrutura(){
	document.getElementById("titulo").innerHTML = "INFRAESTRUTURA";
	document.getElementById("localAtual").innerHTML = "Infraestrutura";
	document.getElementById("infraestrutura").classList.add("selected");
	document.getElementById("apresentacao").classList.remove("selected");
}

function clickBusca(){
	var input = document.getElementById("textoBusca");
	var busca = input.value.trim();
	
	if(busca == "Etevi")
		alert("Maconha");
	else{
		if(busca.length > 3)
			alert("Busca realizada com sucesso.");
		else
			alert("Preencha o campo busca.");
	}
}