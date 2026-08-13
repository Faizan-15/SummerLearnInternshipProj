var global_username = localStorage.getItem("global_username") || "Guest";

function setglobalusername(username) {
    global_username = username;
    localStorage.setItem("global_username", username);
}

function fetchglobalusername() {
    document.getElementsByClassName("welcome-message")[0].innerHTML = global_username;
}
