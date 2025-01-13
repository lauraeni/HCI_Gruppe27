
// Beispiel-Daten für erreichte Punkte
const assignments = [
    { name: "Abgabe 1", maxPoints: 10, achievedPoints: 8 },
    { name: "Abgabe 2", maxPoints: 15, achievedPoints: 12 },
    { name: "Abgabe 3", maxPoints: 20, achievedPoints: 18 },
];

// Funktion zum Laden der Tabelle
function loadPointsTable() {
    const tableBody = document.querySelector("#pointsTable tbody");
    let totalAchieved = 0;

    // Fülle die Tabelle mit Daten
    assignments.forEach((assignment) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = assignment.name;

        const maxPointsCell = document.createElement("td");
        maxPointsCell.textContent = assignment.maxPoints;

        const achievedPointsCell = document.createElement("td");
        achievedPointsCell.textContent = assignment.achievedPoints;

        // Korrektur Button Zelle
        const correctionCell = document.createElement("td");
        const correctionButton = document.createElement("button");
        correctionButton.textContent = "Download";
        correctionButton.onclick = () => alert(`Korrektur für ${assignment.name} erfolgreich heruntergeladen.`);
        correctionCell.appendChild(correctionButton);

        row.appendChild(nameCell);
        row.appendChild(maxPointsCell);
        row.appendChild(achievedPointsCell);
        row.appendChild(correctionCell);

        tableBody.appendChild(row);

        // Gesamtsumme der erreichten Punkte berechnen
        totalAchieved += assignment.achievedPoints;
    });

    // Gesamtpunkte anzeigen
    document.getElementById("totalPoints").textContent = `Gesamtpunkte: ${totalAchieved}`;
}

// Lade die Tabelle nach dem Laden der Seite
window.onload = loadPointsTable;

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function() {
    window.location.href = "../Homepage/Homepage_Student.html"; // Pfad zur Homepage anpassen
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}