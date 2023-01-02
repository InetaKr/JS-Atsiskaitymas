/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => {
    data.forEach(Gamintojas => {
      const GamintojoCard = document.createElement('div');
      GamintojoCard.classList.add('Gamintojas-card');

      const GamintojoVardas = document.createElement('h2');
      GamintojoVardas.textContent = Gamintojas.brand;
      GamintojoCard.appendChild(GamintojoVardas);

      const modeliuSarasas = document.createElement('ul');
      Gamintojas.models.forEach(model => {
        const modeliuSarasoLi = document.createElement('li');
        modeliuSarasoLi.textContent = model;
        modeliuSarasas.appendChild(modeliuSarasoLi);
      });
      GamintojoCard.appendChild(modeliuSarasas);

      const output = document.getElementById('output');
      output.appendChild(GamintojoCard);
    });
  })
  .catch(error => {
    console.error(error);
  });


