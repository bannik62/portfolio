document.addEventListener('DOMContentLoaded', function () {
    console.log("hello");

    let content = document.querySelector(".content")
    const h1Moi = document.createElement('h1');

    // Ajoute l'ID 'moi' à l'élément
    h1Moi.id = "moi"
    h1Moi.textContent = 'MOI !!';
    h1Moi.style.right = '15%';
    h1Moi.style.top = '52%';

    console.log(h1Moi.style.right);

    // h1Moi.style.top = '200px';
    h1Moi.style.position = 'absolute'; // Position fixe par rapport à la fenêtre


    // Ajoute l'élément <h1> au body ou à un autre conteneur spécifique
    content.appendChild(h1Moi);


    function arrowCalle() {
        const arrowScale = document.querySelector("#arrow")
        console.log(arrowScale);
        setTimeout(() => {
            arrowScale.classList.add("arrow")
        }, 1000);


    }
    arrowCalle()

    function moi() {
        const moi = document.querySelector("#moi")
        console.log(moi);
        setTimeout(() => {
            moi.classList.add("moi")
        }, 2000);
    }
    moi()


    function displayPresentation() {
        const containerP = document.querySelector(".presentationMoi")
        console.log(containerP);
       
        setTimeout(() => {
            containerP.classList.add("opacityContainerP")
        }, 4000);
    }
    displayPresentation()



})