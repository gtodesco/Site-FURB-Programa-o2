(function () {
    if (!sessionStorage.getItem("user") && !sessionStorage.getItem("password")) {
        alert("invalid session");
		window.location.href = "login.html"
    }
})();

window.onload = function(e){ 
    if(document.cookie != ""){
		var cookie = document.cookie.split("=");
		document.getElementById(cookie[1]).style.color = "red";
	} 
}

function logout() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.location.href = "login.html";
}

function register() {
    debugger;
    var raca = document.getElementById("raca").value;
    var peso = document.getElementById("peso").value;
    var nome = document.getElementById("nome").value;

    if (raca && peso && nome) {
        localStorage.setItem("raca", raca);
        localStorage.setItem("peso", peso);
        localStorage.setItem("nome", nome);
        document.getElementById("raca").value = "";
        document.getElementById("peso").value = "";
        document.getElementById("nome").value= "";            
        alert("Cadastro feito com sucesso!");
    } else {
        alert("preencha os campos!");
    }
    return false;
}

function carregar() {
    var raca = localStorage.getItem("raca");
    var peso = localStorage.getItem("peso");
    var nome = localStorage.getItem("nome"); 

    document.getElementById("raca").value = raca;
    document.getElementById("peso").value = peso;
    document.getElementById("nome").value= nome;    
       
}

function setCookie(componente){
	document.cookie = "menu=" + componente.id;
}








