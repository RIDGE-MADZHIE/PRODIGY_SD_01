

//CELSIUS

let cels;
document.getElementById("celsius").onclick = function(){
    cels = document.getElementById("temp").value;
    console.log(cels);

    document.getElementById("celsius1").textContent = `Fahrenheit: ${Math.round((cels * 9 / 5) + 32)} `;
    document.getElementById("celsius2").textContent = `Kelvin: ${Math.round((cels - 273.15) + 546.30) } `;
}

//FAHRENHEIT

let fah;
document.getElementById("fahrenheit").onclick = function(){
    fah = document.getElementById("temp").value;
    console.log(fah);

    document.getElementById("celsius1").textContent = `Celsius: ${Math.round((fah - 32) * 5 / 9)}`;
    document.getElementById("celsius2").textContent = `Kelvin: ${Math.round((fah - 32) * 5 / 9 + 273.15)}`;
 
}

//KELVIN

let kelv;
document.getElementById("kelvin").onclick = function(){
    kelv = document.getElementById("temp").value;
    console.log(kelv);

    document.getElementById("celsius1").textContent = `Celsius: ${(Math.round(kelv - 273.15))}`;
    document.getElementById("celsius2").textContent = `Fahrenheit: ${Math.round((kelv -  273.15) * 5 / 9 + 32)}`;
 
}


