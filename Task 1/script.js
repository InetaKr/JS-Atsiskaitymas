/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


function Skaiciuokle(SvorisKilogramais) {
    const SvorisSvarais = SvorisKilogramais * 2.2046;
    const SvorisGramais = SvorisKilogramais / 0.0010000;
    const SvorisUncijomis = SvorisKilogramais * 35.274;
  
    document.querySelector("#Pound").textContent = SvorisSvarais;
    document.querySelector("#Grams").textContent = SvorisGramais;
    document.querySelector("#Ounces").textContent = SvorisUncijomis;
  }
  
  const input = document.querySelector("#Kilograms");
  const calculateButton = document.querySelector("#calculate-button");
  
  
  calculateButton.addEventListener("click", (e) => {
    e.preventDefault();
    Skaiciuokle(input.value);
  });
  