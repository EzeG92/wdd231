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

document.addEventListener('DOMContentLoaded', () => {
    // Benefits modal content
    const benefits = [
        {
            id: "benefit1",
            title: "Exclusive Wholesale Pricing",
            description: "As a distributor, you'll benefit from our wholesale pricing, designed to give you a competitive edge in the market. Whether you're looking to stock high-performance gaming gear or advanced design components, our pricing structure is tailored to maximize your profitability. You'll also receive regular updates on price drops and bulk order incentives to help you get the most value out of your partnership with us.",
        },

        {
            id: "benefit2",
            title: "Priority Support",
            description: "When you become one of our distributors, you're not just getting products—you're getting a full support system. Our priority support team is available to assist you with technical inquiries, order management, and product recommendations to ensure that you're always equipped to meet customer demands. Plus, you'll have access to marketing materials and sales strategies to help drive your business forward.",
        },

        {
            id: "benefit3",
            title: "Early Access to New Releases",
            description: "Stay ahead of your competitors by securing early access to the newest gaming and design components. As a trusted distributor, you’ll be notified in advance of upcoming releases, allowing you to stock cutting-edge products before they hit the general market. This exclusive advantage means your customers will always find the latest and greatest tech when they shop with you.",
        }
    ]

    // Open benefit modal
    const openModal = document.querySelectorAll('.readMore');
    const benefitsDetails = document.getElementById('benefits-details');

    openModal.forEach(button => {
        button.addEventListener('click', () => {
            const card = event.target.parentNode;
            const benefitTitle = card.querySelector('h2').textContent;
            const benefit = benefits.find(benefit => benefit.title === benefitTitle);
            displayBenefitsDetails(benefit);

            benefitsDetails.classList.add('open');
        });
    });

    // Create benefit modal card
    function displayBenefitsDetails(benefit) {
        benefitsDetails.innerHTML = '';
        benefitsDetails.innerHTML = `
            <h2>${benefit.title}<button id="closeButton">X</button></h2>
            <p>${benefit.description}</p>
        `;

        const closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', () => {
            benefitsDetails.classList.remove('open');
            benefitsDetails.close();
        });

        benefitsDetails.showModal();
    }
});




