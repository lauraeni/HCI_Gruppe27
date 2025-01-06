document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const courseSelect = document.getElementById('course');
    const selectedButton = getCookie('selectedButton');
    
    errorMessage.textContent = '';
    errorMessage.style.color = 'red';

    if (courseSelect.value === "" || !username || !password) {
        errorMessage.textContent = 'Mindestens eine Eingabe fehlt.';
        return;
    }

    if (username && password) {
        // Weiterleitung zur Homepage
        if (selectedButton === 'studentButton') {
            window.location.href = "../Homepage/Homepage_Student.html";
        } else if (selectedButton === 'tutorButton') {
            window.location.href = "../Homepage/Homepage_Tutor.html";
        } else {
            window.location.href = "../Homepage/Homepage_Student.html";
        }
    } else {
        // Fehlermeldung anzeigen
        document.getElementById("errorMessage").textContent = "Benutzername oder Passwort ist falsch!";
    }
/*
    if (username === 'benutzer' && password === 'passwort') {
        alert('Login erfolgreich!');
    } else {
        errorMessage.textContent = 'Ungültiger Benutzername oder Passwort.';
    } */
});


function toggleActive(activeButtonId, inactiveButtonId) {
    const activeButton = document.getElementById(activeButtonId);
    const inactiveButton = document.getElementById(inactiveButtonId);

    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');

    // Auswahl in einem Cookie speichern
    setCookie('selectedButton', activeButtonId, 7); // Cookie hält 7 Tage
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function() {
    // Lade die gespeicherte Auswahl vom Cookie für den aktiven Button
    const savedButtonId = getCookie('selectedButton');
    if (savedButtonId) {
        toggleActive(savedButtonId, savedButtonId === 'studentButton' ? 'tutorButton' : 'studentButton');
    } else {
        // Standardmäßig den Student Button aktivieren
        document.getElementById('studentButton').classList.add('active');
    }
};