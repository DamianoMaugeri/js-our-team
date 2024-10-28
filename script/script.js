const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// prendo dal dom l'elemeto in cui appendere le card
const membersfromdom = document.getElementById('members');

// devo ciclare l'array per ogni oggetto

for (let i = 0; i < teamMembers.length; i++) {

  // prendo l'oggetto 
  const currentElement = teamMembers[i];

  // prendo le variabili destrutturando l'oggetto

  const { name, role, email, img } = currentElement;

  //  const { name, role, email, img } = teamMembers[i]; così posso evitare un passaggio

  console.log(name, role, email, img);


  //per ogni ogetto creare la colonna da appendere

  // per ogni ogetto andare a sostituire usare le propietà come variabili nella mia card 

  //<template></template>

  const domElementContenitore = document.createDocumentFragment();


  // col lg-4
  const divElementColLg4 = document.createElement('div');
  divElementColLg4.classList.add('col-lg-4');


  //card
  const divElementCard = document.createElement('div');
  divElementCard.classList.add('card');
  divElementCard.classList.add('mb-3');

  //const divElementCardNew = myCreateElement('div', ['card', 'mb-3']);
  //divElementCard.cloneNode

  //row
  const divElementRow = document.createElement('div');
  divElementRow.classList.add('row');
  divElementRow.classList.add('g-0');


  //col-4
  const divElementCol4 = document.createElement('div');
  divElementCol4.classList.add('col-md-4');


  //col-8
  const divElementCol8 = document.createElement('div');
  divElementCol8.classList.add('col-md-8');

  // card body
  const divElementCardBody = document.createElement('div');
  divElementCardBody.classList.add('card-body');


  // img
  const imgElement = document.createElement('img');
  imgElement.classList.add('img-fluid');
  imgElement.classList.add('rounded-start');

  imgElement.src = `./${img}`;

  // card title
  const titleElement = document.createElement('h2');
  titleElement.classList.add('card-title');

  titleElement.innerHTML = name;

  // mansione
  const divElementMansione = document.createElement('div');
  divElementMansione.classList.add('card-text');

  divElementMansione.innerHTML = role;

  // email
  const divElementEmail = document.createElement('div');
  divElementEmail.classList.add('card-text');
  divElementEmail.classList.add('email');

  divElementEmail.innerHTML = email;

  // append

  divElementColLg4.appendChild(divElementCard);
  divElementCard.appendChild(divElementRow);
  divElementRow.appendChild(divElementCol4);
  divElementRow.appendChild(divElementCol8);
  divElementCol4.appendChild(imgElement);
  divElementCol8.appendChild(divElementCardBody);
  divElementCardBody.appendChild(titleElement);
  divElementCardBody.appendChild(divElementMansione);
  divElementCardBody.appendChild(divElementEmail);

  domElementContenitore.appendChild(divElementColLg4);
  membersfromdom.appendChild(domElementContenitore);



}

// aggiundo un menbro con il form 

// prendo i riferimenti dal form 

const newUserName = document.getElementById('user-name');
const newUserLastName = document.getElementById('user-last-name');
const newUserRole = document.getElementById('user-role');
const newUserEmail = document.getElementById('user-email');


