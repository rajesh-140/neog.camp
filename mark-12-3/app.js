const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputE1 = document.querySelector('#output');


function calculatesumofsquares(a,b) {
    const sumofsquares = a*a + b*b;
    //console.log(sumofsquares);
    return sumofsquares;
}

function calculateHypotenuse() {
    const sumofsquares = calculatesumofsquares(Number(sides[0].value),Number(sides[1].value));
    const lengthofHypotenuse = Math.sqrt(sumofsquares);
    outputE1.innerText="the length of hypotenuse is " + lengthofHypotenuse
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);