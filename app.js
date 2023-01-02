// let minus = document.getElementById('minus');
//     plus = document.getElementById('plus');
//     reset = document.getElementById('reset');
//     result = document.getElementById('result');


// plus.addEventListener("click", ()=>{

//     let value = parseInt(result.innerText);

//     let newValue = value +1;

//     result.innerText = newValue;
    
//     if(newValue > 0){

//         result.style.color = "green";
//     }
//     else if(newValue == 0){

//         result.style.color = "black";
//     }
//     else{

//         result.style.color = "red";
//     }
// })

// minus.addEventListener("click", ()=>{

//     let value = parseInt(result.innerText);

//     let newValue = value - 1;
    
//     result.innerText = newValue;
    
//     if(newValue > 0){

//         result.style.color = "green";
//     }
//     else if(newValue == 0){

//         result.style.color = "black";
//     }
//     else{

//         result.style.color = "red";
//     }
// })

// reset.addEventListener("click", ()=>{

//     result.innerText = 0;
//     result.style.color = "black";
// })



let count = 0;

// gombok és egyébb elemek eltárolása változóban
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// ciklussal végig lépkedünk az eltárolt btn classzú gombokon

btns.forEach((btn)=>{

    // Az összes gomb közül arra kattintok rá, amelyik a ciklus futáskor következik.
    btn.addEventListener("click", (e)=>{

        // Megnézzük, hogy az aktuálisan megkattintott gombon, milyen klasszok vannak még.
        const style = e.currentTarget.classList;
        if(style.contains("decrease")){

            count --;
        }
        else if(style.contains("increase")){

            count ++
        }
        else{

            count = 0;
        }
        // Színek hozzáadása:
        if(count > 0){

            value.style.color = "green";
        }
        else if(count == 0){
    
            value.style.color = "black";
        }
        else{
    
            value.style.color = "red";
        }

        value.innerText = count;
    })
})