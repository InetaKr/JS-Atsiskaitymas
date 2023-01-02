/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btn = document.querySelector('#btn__element');
const state = document.querySelector('#btn__state');

let count = 0;

btn.addEventListener('click', () => {
  count++;
  state.innerHTML = count;
});