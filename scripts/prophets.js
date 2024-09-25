const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url); //Store the response from the fetch() method
    const data = await response.json(); //Convert the response to a JSON object
    // console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets); //Calling the function to display the prophets
    
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');

         // Add text content to the heading element
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the image element by setting attributes using setAttribute()
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200'); 
        portrait.setAttribute('height', '250');

        // Add birth date and place to the card
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Add the heading element to the card section
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        // Add the image element to the card section
        card.appendChild(portrait);

        // Add the card section to the #cards element
        cards.appendChild(card);

    });
}