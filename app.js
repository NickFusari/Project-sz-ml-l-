let minus = document.getElementById('minus');
    plus = document.getElementById('plus');
    reset = document.getElementById('reset');
    result = document.getElementById('result');


plus.addEventListener("click", ()=>{

    let value = parseInt(result.innerText);

    let newValue = value +1;

    result.innerText = newValue;
    
    if(newValue > 0){

        result.style.color = "green";
    }
    else if(newValue == 0){

        result.style.color = "black";
    }
    else{

        result.style.color = "red";
    }
})

minus.addEventListener("click", ()=>{

    let value = parseInt(result.innerText);

    let newValue = value - 1;
    
    result.innerText = newValue;
    
    if(newValue > 0){

        result.style.color = "green";
    }
    else if(newValue == 0){

        result.style.color = "black";
    }
    else{

        result.style.color = "red";
    }
})

reset.addEventListener("click", ()=>{

    result.innerText = 0;
    result.style.color = "black";
})