document.addEventListener('DOMContentLoaded', function() {
    console.log("hello");

    function arrowCalle(){
        const arrowScale = document.querySelector("#arrow")
        console.log(arrowScale);
        arrowScale.classList.add("arrow")
        
    }
    arrowCalle()
    
})