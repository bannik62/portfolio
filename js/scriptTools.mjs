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