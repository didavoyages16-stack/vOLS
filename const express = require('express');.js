const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Sert les fichiers statiques (HTML, CSS, JS)

// Route pour la recherche de vols (simulation d'API Amadeus/Wajeez)
app.post('/search-flights', (req, res) => {
    const { departure, arrival, departDate, returnDate, passengers } = req.body;
    
    // Simulation de résultats (remplacez par un vrai appel API Amadeus)
    // Exemple réel : Utilisez fetch ou axios pour appeler https://api.amadeus.com/v2/shopping/flight-offers
    // avec votre clé API. Ici, c'est fictif.
    const flights = [
        {
            airline: "Amadeus Airlines",
            from: departure,
            to: arrival,
            date: departDate,
            price: "€250",
            duration: "8h 30m"
        },
        {
            airline: "Wajeez Flights",
            from: departure,
            to: arrival,
            date: departDate,
            price: "€180",
            duration: "9h 15m"
        }
    ];
    
    if (returnDate) {
        flights.push({
            airline: "Amadeus Airlines",
            from: arrival,
            to: departure,
            date: returnDate,
            price: "€270",
            duration: "8h 45m"
        });
    }
    
    res.json(flights);
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});