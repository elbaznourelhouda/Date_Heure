const dateTimeElement = document.getElementById("dateTime");

function fetchDateTime() {
    fetch("/api/datetime")
        .then(response => response.json())
        .then(data => {
            const dateTimeString = data.dateTime;
            if (dateTimeElement) {
                const formattedDateTime = formatDateTime(dateTimeString);
                dateTimeElement.innerText = `Date et Heure : ${formattedDateTime}`;
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération de la date et de l'heure :", error.message);
        });
}


function formatDateTime(dateTimeString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString('fr-FR', options); // Fuseau horaire local sans prendre en compte UTC+1
}

fetchDateTime();
setInterval(fetchDateTime, 1000);
