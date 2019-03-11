function login() {
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("senha").value;
    if (!sessionStorage.getItem("user") && !sessionStorage.getItem("password")) {
        sessionStorage.setItem("user", user);
        sessionStorage.setItem("password", password);
    }
    if (user && password) {
        window.location.href = "home.html";
    }
    return false;
}