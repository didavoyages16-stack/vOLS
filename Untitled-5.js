const fetch = require('node-fetch'); // Installez avec npm install node-fetch
// ...
const apiKey = 'F39LWuKzexIEytIt6yc1CPQGp1D9Tv0h'; // Obtenez-la sur leur site
const response = await fetch(`https://api.amadeus.com/v2/shopping/flight-offers?origin=${departure}&destination=${arrival}&departureDate=${departDate}`, {
    headers: { 'Authorization': `Bearer ${apiKey}` }
});
const data = await response.json();
// Traitez les données et renvoyez-les