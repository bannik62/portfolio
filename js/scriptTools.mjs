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
// 