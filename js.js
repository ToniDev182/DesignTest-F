// Inicializar el mapa
var map = L.map('map').setView([37.17189769725392, -3.5916306506436784], 18);

// Capa de OpenStreetMap
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

// Capa de Esri (Imagery)
var esriImageryLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: '© Esri'
});

// Capa de CartoDB Positron
var cartoPositronLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
});

// Agrega la capa por defecto (OpenStreetMap)
osmLayer.addTo(map);

// Control de capas
var baseLayers = {
    "OpenStreetMap": osmLayer,
    "Esri Imagery": esriImageryLayer,
    "CartoDB Positron": cartoPositronLayer
};

L.control.layers(baseLayers).addTo(map);

// Marcador para la tienda en Jaén
var markers = [
    {
        name: "Pedalópolis",
        coords: [37.17189769725392, -3.5916306506436784],
        link: "https://bicicletas-laestacion.blogspot.com/p/novedades-accesorios.html",
        description: "Visita Nuestra tienda C. Molinos, 49, Centro, 18009 Granada",
        image: "tienda.webp"
    }
];

// Añadir marcador al mapa
markers.forEach(function (marker) {
    let popupContent = `
        <strong>${marker.name}</strong><br>
        ${marker.description}<br>
        <a href="${marker.link}" target="_blank">Más información</a><br>
    `;

    if (marker.image) {
        popupContent += `<img src="${marker.image}" alt="${marker.name}" width="150" height="100"><br>`;
    }

    L.marker(marker.coords)
        .addTo(map)
        .bindPopup(popupContent)
        .openPopup();
});
