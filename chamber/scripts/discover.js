//add content to footer
const year = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightText = `&copy; ${year} Ezequiel Gimenez - Rosario, Argentina.<br><span class ="last-modified">Last Modification: ${lastModified}</span>`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;

//add event listener to menu button and nav links
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


//Save page visits to localstorage to show different messages
const visitDay = localStorage.getItem('visitDay');
const visitCount = localStorage.getItem('visitCount');
const lastVisitTime = localStorage.getItem('lastVisitTime');
const visitDayElement = document.getElementById('visitDay');
const visitCountElement = document.getElementById('visitCount');

if (!visitDay) {
    localStorage.setItem('visitDay', new Date().toLocaleDateString());
}

if (!visitCount) {
    localStorage.setItem('visitCount', 1);
    localStorage.setItem('lastVisitTime', new Date().getTime());
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = 'Welcome! Let us know if you have any questions.';

} else {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastVisitTime;
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (timeDifference < oneDayInMilliseconds) {
        const welcomeMessage = document.getElementById('backSoon');
        welcomeMessage.textContent = 'Back so soon! Awesome!';
    } else {
        const daysSinceLastVisit = Math.floor(timeDifference / oneDayInMilliseconds);
        const visitDayMessage = document.getElementById('visitDayMessage');
        if (daysSinceLastVisit === 1) {
            visitDayMessage.textContent = `You last visited ${daysSinceLastVisit} day ago.`;
        } else {
            visitDayMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
        localStorage.setItem('lastVisitTime', currentTime);
    }
    localStorage.setItem('visitCount', parseInt(visitCount) + 1);
}



