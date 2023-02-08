// Cria o objeto 'meuMapa' na <div> de id 'mapaLeaflet' com a vista centralizada nas coordenadas 0,0 com um zoom inicial de 4.
let meuMapa = L.map('mapaLeaflet').setView([0, 0], 4);

// Cria o mapa usando as imagens ('tiles') do OpenStreetMap (OSM), com a opção de atribuição citando a fonte da base de imagens do OSM.
// Em seguida, o mapa é adicionado ao objeto 'meuMapa' com a função addTo().
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(meuMapa);

L.marker([0, 0]).bindPopup("Coordenadas latitude 0.0 e longitude 0.0").addTo(meuMapa);