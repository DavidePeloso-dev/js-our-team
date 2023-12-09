/* Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg */

const teamMembers = [
    {
        name: 'Wayne Barnett',
        profession: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        profession: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        profession: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        profession: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        profession: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        profession: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

const memberRowEl = document.getElementById('member_row');

console.log(teamMembers);

console.log(teamMembers[1].name)

for (let i = 0; i < teamMembers.length; i++) {
    const person = teamMembers[i];
    console.log(person.name);
    console.log(person.profession);
    console.log(person.image);

    createDomCardEl(memberRowEl,person);

}




/* 
<div class="col">
    <div class="card">
        <img src="" class="card-img-top" alt="person">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div> 
*/


/**
 * ## Genarate a card to append in the DOM
 * @param {HTMLElement} HtmlEl insert the DOM element you want to append the card
 * @param {Object} object insert the object you wanto to populate the card
 */
function createDomCardEl(HtmlEl,object){
//create the col element
const colEl = document.createElement('div');
colEl.classList.add('col', 'py-3');
//create the card element
const cardEl = document.createElement('div');
cardEl.classList.add('card')
//create the img element
const imgEl = document.createElement('img');
imgEl.classList.add('card-img-top');
imgEl.src = './assets/img/'+ object.image;
imgEl.alt = object.name;
//create the card body
const cardBodyEl = document.createElement('div');
cardBodyEl.classList.add('card-body');
//create the card title
const cardTitleEl = document.createElement('h4');
cardTitleEl.classList.add('card-title');
cardTitleEl.innerText = object.name;
//create the card text
const cardTextEl = document.createElement('h6');
cardTextEl.classList.add('card-text');
cardTextEl.innerText = object.profession;
//concatenate various element
cardBodyEl.append(cardTitleEl,cardTextEl);
cardEl.append(imgEl,cardBodyEl);
colEl.append(cardEl);
//attached the card to the Dom
HtmlEl.insertAdjacentElement('beforeend', colEl);
console.log(colEl);
}