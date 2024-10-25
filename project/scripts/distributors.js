//add event listener to menu button and nav links
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//add content to footer
const year = new Date().getFullYear();
const copyrightText = `&copy; ${year} Ezk Pc Store - All rights reserved.`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;


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
const showInfo = document.querySelector('#thanks');
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




