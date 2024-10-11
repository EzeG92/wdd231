//add event listener to menu button and nav links
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//add content to footer
const year = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightText = `&copy; ${year} Ezequiel Gimenez - Rosario, Argentina.<br><span class ="last-modified">Last Modification: ${lastModified}</span>`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;


// Grab the entire URL
const currentUrl = window.location.href
console.log(currentUrl)

// Divide the url into two parts
const everything = currentUrl.split('?')
console.log(everything)

// Grab just the second half
let formData = everything[1].split('&')
console.log(formData)

function show(data) {
    console.log(data)
    formData.forEach((element) => {
        console.log(element)
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
    <h2>Thank you for your submission! We will be in touch with you soon.</h2>

    <p>Name: ${show("firstName")} ${show("lastName")}</p>
    <p>Email: ${show("email")}</p>
    <p>Phone: ${show("phone")}</p>
    <p>Bussines: ${show("orgName")}</p>
`;

// Show the timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    // Add leading zeros if necessary
    const formattedMinute = minute < 10 ? `0${minute}` : minute;

    return `${month}/${day}/${year} - ${hour}:${formattedMinute}:${second}`;
}

// Display the timestamp
const timestampDisplay = document.getElementById('timestamp-display');
const timestampValue = show("timestamp");
const formattedTimestamp = formatTimestamp(timestampValue);
timestampDisplay.textContent = `Date: ${formattedTimestamp}`;