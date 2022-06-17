//console.log("test");

// HTML-Elemente, die irgendwann im JavaScript ausgelesen, oder verändert werden

const alter = document.getElementById("alter"); // Eingabe Alter (<input>)
const größe = document.getElementById("größe"); // Eingabe Größe (<input>)
const gewicht = document.getElementById("gewicht"); // Eingabe Gewicht (<input>)
const bmi = document.getElementById("bmi"); // Ausgabe BMI (<input>)
const result = document.getElementById("result"); // Ausgabe Gewichtsklasse (<div>)
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll("input");

// Funktion die BMI berechnet und Ergebnis anzeigt

function calcBMI(e) {
    //console.log(e.target);
    e.preventDefault();
    let alterMod;
    if (alter.value >= 19 && alter.value <= 24) {
        alterMod = 0;
    } else if (alter.value >= 25 && alter.value <= 34) {
        alterMod = 1;
    } else if (alter.value >= 35 && alter.value <= 44) {
        alterMod = 2;
    } else if (alter.value >= 45 && alter.value <= 54) {
        alterMod = 3;
    } else if (alter.value >= 55 && alter.value <= 64) {
        alterMod = 4;
    } else if (alter.value >= 65) {
        alterMod = 5;
    } else if (alter.value && alter.value < 19) {
        alert("Alter muss großer als 18");
    }


    if (alter.value && größe.value && gewicht.value) {
        let bmiResult = gewicht.value / (größe.value * größe.value); //größe.value ** 2
        //console.log(bmiResult);
        //console.log(typeof bmiResult);
        bmi.value = bmiResult.toFixed(2);

        // Anzeige von Gewichtsklasse mit entsprechender Hintergrundfarbe
        if (bmiResult < 19 + alterMod) {
            result.textContent = "Untergewicht";
            result.style.backgroundColor = "#66ccff";
        } else if (bmiResult >= 19 + alterMod && bmiResult < 25 + alterMod) {
            result.textContent = "Normalgewicht";
            result.style.backgroundColor = "#00cc00";
        } else if (bmiResult >= 25 + alterMod && bmiResult < 30 + alterMod) {
            result.textContent = "Übergewicht";
            result.style.backgroundColor = "#ff9933";
        } else if (bmiResult >= 30 + alterMod && bmiResult < 40 + alterMod) {
            result.textContent = "Adipositas";
            result.style.backgroundColor = "#ff7e00";
        } else if (bmiResult >= 40 + alterMod) {
            result.textContent = "starke Adipositas";
            result.style.backgroundColor = "#cc0000";
        }
    } else {
        alert("Leeres Eingabefeld");
    }

    Array.from(inputs).forEach(input => {
        input.addEventListener("input", (e) => {
            //console.log(e.target);
            result.textContent = "";
            result.style.backgroundColor = "transparent";
            result.innerHTML = `<span class="placeholder"></span>`
            //console.log(result.children);
        })
    });

}

btn.addEventListener("click", calcBMI);