const products = [
        {   id: 1,
            img: "images/mother1.webp",
            name: "ROG STRIX Z490-H",
            category: "motherboards",
            price: "USD 399",
            description: "ROG STRIX DESCRIPTION TEST"
        },
        {   id: 2,
            img: "images/mother2.webp",
            name: "GIGABYTE AORUS X299",
            category: "motherboards",
            price: "USD 249",
            description:""
        },
        {   id: 3,
            img: "images/mother3.webp",
            name: "MSI MPG B550",
            category: "motherboards",
            price: "USD 159",
            description: ""
        },
        {   id: 4,
            img: "images/mother4.webp",
            name: "ASUS TUF B450M",
            category: "motherboards",
            price: "USD 120",
            description: ""
        },
        {   id: 5,
            img: "images/graphic-card1.webp",
            name: "MSI Ventus RTX 3060",
            category: "graphic",
            price: "USD 259",
            description: ""
        },
        {   id: 6,
            img: "images/graphic-card2.webp",
            name: "ASUS TUF RTX 4090",
            category: "graphic",
            price: "USD 1999",
            description: ""
        },
        {   id: 7,
            img: "images/graphic-card3.webp",
            name: "ASUS RADEON RX6700",
            category: "graphic",
            price: "USD 225",
            description: ""
        },
        {   id: 8,
            img: "images/graphic-card4.webp",
            name: "SENTEY RADEON RX500",
            category: "graphic",
            price: "USD 139",
            description: ""
        },
        {   id: 9,
            img: "images/cpu1.webp",
            name: "INTEL CORE I5 12th",
            category: "processors",
            price: "USD 110",
            description: ""
        },
        {   id: 10,
            img: "images/cpu2.webp",
            name: "INTEL CORE I7 14th",
            category: "processors",
            price: "USD 310",
            description: ""
        },
        {   id: 11,
            img: "images/cpu3.webp",
            name: "INTEL CORE I9 14th",
            category: "processors",
            price: "USD 450",
            description: ""
        },
        {   id: 12,
            img: "images/cpu4.webp",
            name: "AMD RYZEN 5",
            category: "processors",
            price: "USD 110",
            description: ""
        },
        {   id: 13,
            img: "images/ram1.webp",
            name: "Fury Beast Ddr4 16gb",
            category: "memory",
            price: "USD 39",
            description: ""
        },
        {   id: 14,
            img: "images/ram2.webp",
            name: "Vengeance ddr4 32gb",
            category: "memory",
            price: "USD 72",
            description: ""
        },
        {   id: 15,
            img: "images/ram3.webp",
            name: "Adata XPG DDR5 16gb",
            category: "memory",
            price: "USD 62",
            description: ""
        },
        {   id: 16,
            img: "images/ram4.webp",
            name: "Hyperx DDR4 8Gb",
            category: "memory",
            price: "USD 45",
            description: ""
        },
        {   id: 17,
            img: "images/monitor1.webp",
            name: 'LG 34" 160hz',
            category: "monitors",
            price: "USD 289",
            description: ""
        },
        {   id: 18,
            img: "images/monitor2.webp",
            name: 'Samsung 24" 75hz',
            category: "monitors",
            price: "USD 89",
            description: ""
        },
        {   id: 19,
            img: "images/monitor3.webp",
            name: 'odissey g5 27" 165hz',
            category: "monitors",
            price: "USD 219",
            description: ""
        },
        {   id: 20,
            img: "images/monitor4.webp",
            name: 'Asus Tuf 27" 170hz',
            category: "monitors",
            price: "USD 209",
            description: ""
        },
        {   id: 21,
            img: "images/case1.webp",
            name: 'Msi mag force M100A',
            category: "cases",
            price: "USD 89",
            description: ""
        },
        {   id: 22,
            img: "images/case2.webp",
            name: 'Thermaltake S100',
            category: "cases",
            price: "USD 42",
            description: ""
        },
        {   id: 23,
            img: "images/case3.webp",
            name: 'Asus Tuf Gt501',
            category: "cases",
            price: "USD 149",
            description: ""
        },
        {   id: 24,
            img: "images/case4.webp",
            name: 'Deepcool Cc560',
            category: "cases",
            price: "USD 59",
            description: ""
        },
    ];

export function createProducts(category) {
    // Clear all product divs
    const categoryContainers = {
        motherboards: document.getElementById('category1-products'),
        graphic: document.getElementById('category2-products'),
        processors: document.getElementById('category3-products'),
        memory: document.getElementById('category4-products'),
        monitors: document.getElementById('category5-products'),
        cases: document.getElementById('category6-products'),
    };
    
    // Clear all product containers
    Object.values(categoryContainers).forEach(container => container.innerHTML = '');

    // Filter products by category
    const filteredProducts = products.filter(product => product.category === category);

    // Append products to the appropriate category div
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}" data-title="${product.name}" data-description="${product.description ||'Description not available'}" class="product-img-modal">
            <p>${product.name}</p>
            <p>${product.price}</p>
        `;

        // Append to the correct category container
        categoryContainers[product.category].appendChild(productDiv);
    });
}

// Function to show products based on selected category
export function showProducts() {
    // Hide all product sections
    const productSections = document.querySelectorAll('.products > div');
    productSections.forEach(section => section.classList.add('hidden'));

    // Show the products container and title
    document.getElementById('products').classList.remove('hidden');
    document.getElementById('product-title').classList.remove('hidden');
}

export function openProductModal() {
    const productModal = document.querySelectorAll('.product-img-modal');
    productModal.forEach(product => {
        product.addEventListener('click', () => {
            const productTitle = product.getAttribute('data-title');
            const productDescription = product.getAttribute('data-description');
            const productImages = product.getAttribute('src');
            displayProductsDetails(productTitle, productDescription, productImages);
        });
    });
}

export function displayProductsDetails(title, description, imageSrc ) {
    const productTitle = document.getElementById('modal-title');
    const productDescription = document.getElementById('modal-description');
    const productImages = document.getElementById('modal-image');

    productTitle.textContent = title;
    productDescription.textContent = description;
    productImages.src = imageSrc;

    const productsDetails = document.getElementById('products-details');
    productsDetails.classList.add('open');
}

export function setupCloseButton() {
    const closeButton = document.getElementById('closeButton');
    const productsDetails = document.getElementById('products-details');

    if (closeButton && productsDetails) {
        closeButton.addEventListener('click', () => {
            productsDetails.classList.remove('open');
        });
    }
}


