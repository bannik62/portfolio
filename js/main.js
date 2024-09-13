document.addEventListener('DOMContentLoaded', function () {
    console.log("hello");

    let content = document.querySelector(".content")
    const h1Moi = document.createElement('h1');

    // Ajoute l'ID 'moi' à l'élément
    h1Moi.id = "moi"
    h1Moi.textContent = 'MOI !';
    h1Moi.style.left = '850px';
    console.log(h1Moi.style.right);

    h1Moi.style.top = '200px';
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
        }, 4000);
    }
    moi()



    function adjustElementPosition() {
        let element = document.querySelector('#moi');
        // console.log("element", element);
        
        let initialLeft =  600
        let elementRect = element.getBoundingClientRect(); // Position actuelle de l'élément
        let screenWidth = window.innerWidth; // Largeur actuelle de la fenêtre
       let newLeft
      
       if (newLeft > initialLeft) {
             newLeft = initialLeft + (screenWidth - elementRect.width) / 1000;

            element.style.left = newLeft + 'px';
            newLeft = Math.trunc(newLeft);

        } else if (newLeft < initialLeft){
            console.log("petit");
             newLeft = initialLeft - (screenWidth - elementRect.width) / 1000;
            newLeft = Math.trunc(newLeft);

            element.style.left = newLeft + 'px';
            console.log("initial :", initialLeft);
            console.log("new :", newLeft);

        }

        // Appliquer la nouvelle valeur
    }

    // Appeler la fonction au chargement de la page et lors du redimensionnement de la fenêtre
    // window.addEventListener('load', adjustElementPosition);
    window.addEventListener('resize', adjustElementPosition);

})