 let input = document.getElementById("input");
 let runProgram = document.getElementById("runProgram")
 let output = document.getElementById("output");

 

 let h = () => {
     let p = document.createElement("p");
     p.innerText = "Hello World";
     output.appendChild(p)
    }

let q = () => {
    let stringCode = input.value.toString();
    let p = document.createElement("p")
    p.innerText = stringCode;
    output.appendChild(p);
}

let numb9 = () => {
    for(let k=99; k>0 ; k--){
        let p = document.createElement("p")
        p.innerText = `${k} bottles of beer on the wall, ${k} bottles of beer.
        Take one down and pass it around, ${k-1} bottles of beer on the wall.`;
        output.appendChild(p);
    }
}

let plusSymbol = ()=>{

}

let counter = [0]

 runProgram.addEventListener("click", () => {
    output.innerHTML="";
    let arr = input.value.split("");
    for(let i=0; i<arr.length; i++){
        if(arr[i] == "h"){
            h();
        } else if (arr[i] == "q"){
            q();
        } else if(arr[i] == "9"){
            numb9();
        } else if (arr[i] == "+"){
            counter++;
            console.log(counter)
        }
    }
 })
 /*RESPECTO AL COUNTER, ESTO ES LO QUE ENTENDÍA QUE TENIA QUE HACER. ACUMULAR EN COUNTER CUANDO EL USUARIO ESCRIBIERA UN PLUS*/