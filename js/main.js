document.addEventListener('DOMContentLoaded', function () {
    console.log("hello");

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

})