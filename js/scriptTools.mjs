export function formatDate() {
    const date = new Date();
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()]; // Obtenir le mois sous forme abrégée
    const day = String(date.getDate()).padStart(2, '0'); // Obtenir le jour et ajouter un 0 si besoin
    const year = date.getFullYear(); // Obtenir l'année
    
    const hours = String(date.getHours()).padStart(2, '0'); // Obtenir les heures
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Obtenir les minutes
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Obtenir les secondes

    return `${month} ${day} ${hours}:${minutes}:${seconds} ${year}`;
}

console.log(formatDate());


const canvas = document.getElementById('oscilloscope');
const ctx = canvas.getContext('2d');

// Définir les dimensions du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Couleurs
const backgroundColor = '#00b300'; // Fond vert
let lineColor = '#00ff7f'; // Vert clair

// Variables pour l'oscillation et modulation
let time = 0;
let amplitude = 50; // Amplitude initiale
let frequency = 0.02; // Fréquence initiale

// Fonction pour dessiner l'oscilloscope
function drawOscilloscope() {
    // Effacer le canvas
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;

    const centerY = canvas.height / 2;

    // Dessiner la ligne d'oscillation avec modulation
    for (let x = 0; x < canvas.width; x++) {
        // Modulation de l'amplitude
        const modulatedAmplitude = amplitude * (1 + Math.sin((time + x) * 0.01)); // Variation d'amplitude
        const y = centerY + modulatedAmplitude * Math.sin((x + time) * frequency); // Fonction sinus
        ctx.lineTo(x, y);
    }

    ctx.stroke();
    ctx.closePath();

    // Incrémenter le temps pour faire défiler l'oscillation
    time += 2;

    // Modulation de la fréquence
    frequency += 0.0001; // Variation de fréquence au fil du temps

    // Modulation de la couleur
    // lineColor = `hsl(${(time * 0.5) % 360}, 100%, 50%)`; // Changer la couleur en utilisant HSL

    requestAnimationFrame(drawOscilloscope); // Demander le prochain cadre
}

// Commencer le dessin
drawOscilloscope();
