/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.getElementById('btn');


button.addEventListener('click', () => {
    const output = document.getElementById('output');
    output.innerHTML = '';
    
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const VartotojoCard = document.createElement('div');
            VartotojoCard.classList.add('vartotojo-card');
            
            const VartotojoImage = document.createElement('img');
            VartotojoImage.src = user.avatar_url;
            VartotojoImage.alt = `${user.login}'s avatar`;
            
            const LoginoVardas = document.createElement('p');
            LoginoVardas.textContent = `Login: ${user.login}`;
            
            VartotojoCard.appendChild(VartotojoImage);
            VartotojoCard.appendChild(LoginoVardas);
            output.appendChild(VartotojoCard);
        });
    });
});




