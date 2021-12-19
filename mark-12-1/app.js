const inputs = document.querySelectorAll('.angle-input');
 const isTriangleBtn = document.querySelector('#is-Triangle-btn');
 const outputE1 = document.querySelector('#output');


function calculatesumofAngles(angle1 , angle2 , angle3) {
   const sumofAngles = angle1 + angle2 + angle3;
    //console.log(sumofAngles);
   return sumofAngles;
}

 function isTriangle(){
      
    const sumofAngles = calculatesumofAngles(Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value));
      
    if(sumofAngles===180){
          
         outputE1.innerText ="yay, The angles from a triangle";
    }else{
         
        outputE1.innerText="oh oh! the angles don't form a triangle";

     }
}

 isTriangleBtn.addEventListener("click", isTriangle)