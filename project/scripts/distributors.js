//add event listener to menu button and nav links
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('#animateme');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//add content to footer
const year = new Date().getFullYear();
const copyrightText = `&copy; ${year} Ezk Pc Store - All rights reserved.`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;

document.addEventListener('DOMContentLoaded', () => {
    //Save page visits to localstorage to show different messages
    const visitDay = localStorage.getItem('visitDay');
    const visitCount = localStorage.getItem('visitCount');
    const lastVisitTime = localStorage.getItem('lastVisitTime');

    if (!visitDay) {
        localStorage.setItem('visitDay', new Date().toLocaleDateString());
    }

    if (!visitCount) {
        localStorage.setItem('visitCount', 1);
        localStorage.setItem('lastVisitTime', new Date().getTime());
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.innerHTML = `Welcome! Complete the form so we can contact you.<br>Let us know if you have any questions.`;
    } else {
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - lastVisitTime;
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

        if (timeDifference < oneDayInMilliseconds) {
            const welcomeMessage = document.getElementById('backSoon');
            welcomeMessage.innerHTML = `You are back soon! Awesome!<br>We are here to help you, complete the form and we will contact you.`;
        } else {
            const daysSinceLastVisit = Math.floor(timeDifference / oneDayInMilliseconds);
            const visitDayMessage = document.getElementById('visitDayMessage');
            if (daysSinceLastVisit === 1) {
                visitDayMessage.innerHTML = `You last visited ${daysSinceLastVisit} day ago. Is there anything we can help you?`;
            } else {
                visitDayMessage.innerHTML = `You last visited ${daysSinceLastVisit} days ago. Is there anything we can help you?`;
            }
            localStorage.setItem('lastVisitTime', currentTime);
        }
    }

    
});

// Grab the entire URL
const currentUrl = window.location.href

// Divide the url into two parts
const everything = currentUrl.split('?')

// Grab just the second half
let formData = everything[1].split('&')

function show(data) {
    formData.forEach((element) => {
        if (element.startsWith(data)) {
            result=element.split('=')[1]
            result=result.replace("+"," ")
            result = decodeURIComponent(result); //Replace automatically characters with their corresponding values
        }
    })
    return (result)
}

// Show the result
const showInfo = document.getElementById('thanks');
showInfo.innerHTML = `
    <h2>Thank You for your interest in becoming a distributor!</h2>
    <h3>We appreciate you taking the time to complete the form.<br>We’ve received your application and are excited about the possibility of working together.</h3>
    <div class="information">
    <p>${show("company-name")}</p>
    <p>${show("email")}</p>
    <p>${show("contact-name")}</p>
    <p>${show("contact-phone")}</p>
    <p>${show("position")}</p>
    </div>
    <p>Our team will review your application and get in touch with you within the next 48 hours to provide more details about the approval process and the next steps.</p>
`;



