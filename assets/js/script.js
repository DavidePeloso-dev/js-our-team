/* Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg */

const teamMembers =[
    {
        name : 'Wayne Barnett',
        profession : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        profession : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        profession : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        profession : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        profession : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        profession : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(teamMembers);

console.log(teamMembers[1].name)

for(let i = 0; i < teamMembers.length; i++){
    const person = teamMembers[i];
    console.log(person.name);
    console.log(person.profession);
    console.log(person.image);
}

