// Sprawdzenie, czy strona jest uruchomiona jako PWA i czy jest dodana do ekranu głównego
if (window.matchMedia('(display-mode: standalone)').matches) {
    if (localStorage.getItem("isPwaAdded") !== "true") {
        localStorage.setItem("isPwaAdded", "true");
    }
    if (sessionStorage.getItem("zalogowany") === "true") {
        window.location.href = "index2.html";
    }
} else {
    localStorage.removeItem("isPwaAdded");
    sessionStorage.removeItem("zalogowany");
}

// Funkcja do sprawdzania danych logowania
function sprawdzDane() {
    var login = document.getElementById("login").value;
    var haslo = document.getElementById("haslo").value;

    var users = {
        "chuj": "jeb sie",
    };

    // Weryfikacja danych
    if (users[login] && users[login] === haslo) {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            sessionStorage.setItem("zalogowany", "true");
        }
        window.location.href = "logowanie.html";
    } else {
        window.location.href = "https://bed-deb.github.io/bdb/oszust.html";
    }
}

// Blokowanie prawokliku
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Blokowanie skrótów klawiszowych (F12, Ctrl+U, itp.)
document.addEventListener("keydown", function(event) {
    if (
        event.key === "F12" ||
        (event.ctrlKey && event.key === "U") ||
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "S") ||
        (event.ctrlKey && event.key === "H") ||
        (event.ctrlKey && event.key === "A") ||
        (event.ctrlKey && event.key === "P")
    ) {
        event.preventDefault();
    }
});

// Wykrywanie otwartych narzędzi deweloperskich i automatyczne zamykanie
(function() {
    var before = new Date();
    debugger;
    var after = new Date();
    if (after - before > 100) {
        window.close();
        while (true) {}
    }
})();
