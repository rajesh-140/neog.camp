var initialprice= document.querySelector('#initial-price');
var stocksquentity= document.querySelector('#stocks-quentity');
var currentprice= document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-Btn');
var outputBox = document.querySelector('#output-box');

//ex-6
submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = number(stocksQuantity.value);
    var curr = number(currentprice.value);

    calculateprofitAndLoss(ip, qty, curr);
}

//ex-5
function calculateprofitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss=(initial-current)*quantity;
        varlosspercentage=(loss/initial)*100;

         console.log(`Hey the loss is ${loss} and the percent is 
         ${losspercentage}%`);
    } else if (current > initial){
        var profit=(current - initial) * quantity;
        var profitpercentage = (profit/initial)*100;

        console.log(`Hey the profit is ${profit} and the percent is ${profitpercentage}%`);
    } else{
        console.log(`no pain no gain and no gain no pain`);
         
    }

}

function showoutput(message){
    outputBox.innerHTML = message;
}