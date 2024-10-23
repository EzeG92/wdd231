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