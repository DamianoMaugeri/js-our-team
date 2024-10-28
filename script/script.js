// prendo dal dom l'elemeto in cui appendere le card
const membersfromdom = document.getElementById('members');

// devo ciclare l'array per ogni oggetto

for (let i = 0; i < teamMembers.length; i++) {

  membersfromdom.appendChild(createFragment(teamMembers[i]));

  // prendo l'oggetto

  // const currentElement = teamMembers[i];
  // const card = createFragment(currentElement);
  //membersfromdom.appendChild(card);

}

// aggiundo un menbro con il form 

// prendo i riferimenti dal form 
const formElement = document.getElementById('form-add-info');
const newUserName = document.getElementById('user-name');
const newUserImg = document.getElementById('user-img');
const newUserRole = document.getElementById('user-role');
const newUserEmail = document.getElementById('user-email');






formElement.addEventListener('submit', function (event) {

  //impedirà al form html di essere inviato autonomamente (non ricarico la pagina, non aggiungo query parameters all'url etc etc)
  event.preventDefault();

  //mi creo il nouvo obj
  let newMember = {
    name: newUserName.value,
    role: newUserRole.value,
    email: newUserEmail.value,
    img: newUserImg.value

  }
  //lo pusho nell' array
  teamMembers.push(newMember)
  // aggiungop l'elemento al template 
  membersfromdom.appendChild(createFragment(newMember));


});
