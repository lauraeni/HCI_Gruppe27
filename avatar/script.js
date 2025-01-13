document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const profilePicture = document.getElementById('profilePicture');

    fileInput.addEventListener('change', event => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = e => {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const courseSelect = document.getElementById('courseSelect');
    const progressBar = document.getElementById('progress');

    courseSelect.addEventListener('change', () => {
        const selectedValue = courseSelect.value;
        progressBar.style.width = selectedValue + '%';
    });
});

document.getElementById('passwordChangeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var currentPassword = document.getElementById('current-password').value;
    var newPassword = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Das neue Passwort und die Bestätigung stimmen nicht überein.');
    } else {
        alert('Passwort wird geändert...');
    }
});

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const infoText = button.nextElementSibling;

        // Alle anderen Abschnitte schließen
        document.querySelectorAll('.info-text').forEach(section => {
            if (section !== infoText) {
                section.style.display = 'none';
            }
        });

        // Aktuellen Abschnitt umschalten
        infoText.style.display = infoText.style.display === 'block' ? 'none' : 'block';
    });
});

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function() {
    window.location.href = "../Homepage/Homepage_Student.html"; // Pfad zur Homepage anpassen
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}
