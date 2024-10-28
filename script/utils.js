/**
 * 
 * @param {*} type 
 * @param  {...any} classi 
 * @returns 
 */
function createNewElement(type, ...classi) {

    let nome = document.createElement(type);

    for (let i = 0; i < classi.length; i++) {
        nome.classList.add(classi[i])
    }


    return nome

}

// funzione custom per creare questa card
/**
 * 
 * @param {Object} element 
 * @returns 
 */
function createFragment(element) {

    const { name, role, email, img } = element;

    //  const { name, role, email, img } = teamMembers[i]; così posso evitare un passaggio

    console.log(name, role, email, img);


    //per ogni ogetto creare la colonna da appendere

    // per ogni ogetto andare a sostituire usare le propietà come variabili nella mia card 

    //<template></template>

    const domElementContenitore = document.createDocumentFragment();

    // col lg-4
    const divElementColLg4 = createNewElement('div', 'col-lg-4');

    //card
    const divElementCard = createNewElement('div', 'card', 'mb-3');

    //row
    const divElementRow = createNewElement('div', 'row', 'g-0');

    //col-4
    const divElementCol4 = createNewElement('div', 'col-md-4');

    //col-8
    const divElementCol8 = createNewElement('div', 'col-md-8');

    // card body
    const divElementCardBody = createNewElement('div', 'card-body');

    // img
    const imgElement = createNewElement('img', 'img-fluid', 'rounded-start');
    imgElement.src = img;

    // card title
    const titleElement = createNewElement('h2', 'card-title');
    titleElement.innerHTML = name;

    // mansione
    const divElementMansione = createNewElement('div', 'card-text');
    divElementMansione.innerHTML = role;

    // email
    const divElementEmail = createNewElement('div', 'card-text', 'email')
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

    return domElementContenitore

}