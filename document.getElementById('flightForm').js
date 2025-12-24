document.getElementById('flightForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const departDate = document.getElementById('departDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;
    
    // Appel au serveur (back-end) pour simuler la recherche
    try {
        const response = await fetch('/search-flights', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ departure, arrival, departDate, returnDate, passengers })
        });
        const flights = await response.json();
        
        // Afficher les résultats
        const resultsDiv = document.getElementById('results');
        const flightList = document.getElementById('flightList');
        flightList.innerHTML = '';
        
        flights.forEach(flight => {
            const flightDiv = document.createElement('div');
            flightDiv.className = 'flight';
            flightDiv.innerHTML = `
                <h3>${flight.airline}</h3>
                <p><strong>De :</strong> ${flight.from} <strong>À :</strong> ${flight.to}</p>
                <p><strong>Date :</strong> ${flight.date}</p>
                <p><strong>Durée :</strong> ${flight.duration}</p>
                <p><strong>Prix :</strong> ${flight.price} pour ${passengers} passager(s)</p>
                <button>Réserver</button>
            `;
            flightList.appendChild(flightDiv);
        });
        
        const newLocal_1 = 'block';
        const newLocal = newLocal_1;
        resultsDiv.style.display = newLocal;
    } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        alert('Erreur- de recherche. Vérifiez la console.');
    }
});