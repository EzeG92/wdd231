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

// Benefits modal content
document.addEventListener('DOMContentLoaded', () => {
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

    // Open modal
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

    // Create modal card
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

// Function to show products based on selected category
function showProducts(category) {
    // Hide all product sections
    const productSections = document.querySelectorAll('.products > div');
    productSections.forEach(section => section.classList.add('hidden'));

    // Show the selected category's products
    document.getElementById(category + '-products').classList.remove('hidden');

    // Show the products container and title
    document.getElementById('products').classList.remove('hidden');
    document.getElementById('product-title').classList.remove('hidden');
}

// Add event listeners to category images
document.addEventListener('DOMContentLoaded', function() {
    const categories = ['category1', 'category2', 'category3', 'category4', 'category5', 'category6'];

    categories.forEach(category => {
        document.getElementById(category).addEventListener('click', function() {
            // Remove 'active' class from all categories
            categories.forEach(cat => {
                document.getElementById(cat).classList.remove('active');
                document.getElementById(cat + '-products').classList.remove('active');
            });

            // Add 'active' class to the clicked category
            document.getElementById(category).classList.add('active');
            document.getElementById(category + '-products').classList.add('active');

            // Shows products from the selected category
            showProducts(category);
            

            // Scroll to the product bin
            document.getElementById('product-title').scrollIntoView({ behavior: 'smooth' });
        });
    });
});


//  Get the data from the API
const url = 'https://api.fxratesapi.com/latest?api_key=fxr_live_6304ed229a999613501abd46016d94c7b452';

//  Get JSON data from API
async  function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

function displayResults (data){
    document.getElementById('convert-button').addEventListener('click', function() {
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('from-currency').value;
        const toCurrency = document.getElementById('to-currency').value;

        const rate = data.rates[toCurrency];
        const result = amount * rate;

        const formattedResult = result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        document.getElementById('conversion-result').textContent = `${amount} ${fromCurrency} = ${formattedResult} ${toCurrency}`;
    });
}

