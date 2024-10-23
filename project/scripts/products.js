const products = [
        {   id: 1,
            img: "images/mother1.webp",
            name: "ROG STRIX Z490-H",
            category: "motherboards",
            price: "USD 399",
            description: "The ROG STRIX Z490-H Gaming motherboard supports Intel 10th Gen processors, dual M.2 slots, and up to 128GB DDR4 RAM. It offers robust power delivery, advanced cooling, and customizable RGB lighting, making it ideal for gaming builds. Key features include USB 3.2 Gen 2, PCIe 3.0, and multi-GPU support."
        },
        {   id: 2,
            img: "images/mother2.webp",
            name: "GIGABYTE AORUS X299",
            category: "motherboards",
            price: "USD 249",
            description:"The GIGABYTE AORUS X299 motherboard supports Intel Core X-series processors, with quad-channel DDR4 RAM and multi-GPU support. It features advanced cooling, dual M.2 slots, USB 3.1 Gen 2, and customizable RGB lighting, making it ideal for high-performance, enthusiast builds."
        },
        {   id: 3,
            img: "images/mother3.webp",
            name: "MSI MPG B550",
            category: "motherboards",
            price: "USD 159",
            description: "The MSI MPG B550 motherboard supports AMD Ryzen processors, PCIe 4.0, and dual M.2 slots. It offers up to 128GB of DDR4 memory, advanced cooling solutions, and USB 3.2 Gen 2 connectivity, making it great for gaming and mid-range builds."
        },
        {   id: 4,
            img: "images/mother4.webp",
            name: "ASUS TUF B450M",
            category: "motherboards",
            price: "USD 120",
            description: "The ASUS TUF GAMING B450M motherboard supports AMD Ryzen processors, up to 128GB DDR4 RAM, and features dual M.2 slots. It includes military-grade components, enhanced cooling, and USB 3.1 Gen 2, making it reliable for gaming and budget-friendly builds."
        },
        {   id: 5,
            img: "images/graphic-card1.webp",
            name: "MSI Ventus RTX 3060",
            category: "graphic",
            price: "USD 259",
            description: "The MSI Ventus RTX 3060 graphics card features 12GB GDDR6 memory, ray tracing, and NVIDIA DLSS technology. It offers excellent 1080p and 1440p gaming performance with efficient cooling, making it a great option for mid-range gaming builds."
        },
        {   id: 6,
            img: "images/graphic-card2.webp",
            name: "ASUS TUF RTX 4090",
            category: "graphic",
            price: "USD 1999",
            description: "The ASUS TUF RTX 4090 graphics card comes with 24GB GDDR6X memory, offering top-tier 4K gaming performance. It features ray tracing, DLSS 3.0, and advanced cooling with a durable build, making it ideal for high-end gaming and demanding workloads."
        },
        {   id: 7,
            img: "images/graphic-card3.webp",
            name: "ASUS RADEON RX6700",
            category: "graphic",
            price: "USD 225",
            description: "The ASUS Radeon RX 6700 graphics card features 12GB GDDR6 memory and delivers excellent performance for 1440p gaming. It supports AMD's FidelityFX and ray tracing, along with efficient cooling solutions, making it a solid choice for gamers looking for high-quality visuals"
        },
        {   id: 8,
            img: "images/graphic-card4.webp",
            name: "SENTEY RADEON RX500",
            category: "graphic",
            price: "USD 139",
            description: "The Sentey Radeon RX 500 graphics card offers solid performance for 1080p gaming with 4GB GDDR5 memory. It supports AMD's FreeSync technology and features efficient cooling, making it a budget-friendly option for casual gamers and multimedia use."
        },
        {   id: 9,
            img: "images/cpu1.webp",
            name: "INTEL CORE I5 12th",
            category: "processors",
            price: "USD 110",
            description: "The Intel Core i5 12th Gen CPU features up to 10 cores and 16 threads, delivering excellent performance for gaming and multitasking. With improved integrated graphics and support for PCIe 5.0 and DDR5 memory, it's an ideal choice for mid-range builds and everyday computing tasks."
        },
        {   id: 10,
            img: "images/cpu2.webp",
            name: "INTEL CORE I7 14th",
            category: "processors",
            price: "USD 310",
            description: "The Intel Core i7 14th Gen CPU features up to 16 cores and 24 threads, offering exceptional performance for gaming, content creation, and multitasking. It supports PCIe 5.0 and DDR5 memory, providing enhanced speed and efficiency for demanding applications and high-performance builds."
        },
        {   id: 11,
            img: "images/cpu3.webp",
            name: "INTEL CORE I9 14th",
            category: "processors",
            price: "USD 450",
            description: "The Intel Core i9 14th Gen CPU features up to 24 cores and 32 threads, delivering outstanding performance for gaming, content creation, and intensive multitasking. It supports PCIe 5.0 and DDR5 memory, making it an excellent choice for high-end builds and demanding applications."
        },
        {   id: 12,
            img: "images/cpu4.webp",
            name: "AMD RYZEN 5",
            category: "processors",
            price: "USD 110",
            description: "The AMD Ryzen 5 CPU offers a balance of performance and efficiency, typically featuring 6 cores and 12 threads. It's ideal for gaming, multitasking, and productivity tasks, supporting advanced technologies like PCIe 4.0 and DDR4 memory, making it a great choice for mid-range builds."
        },
        {   id: 13,
            img: "images/ram1.webp",
            name: "Fury Beast Ddr4 16gb",
            category: "memory",
            price: "USD 39",
            description: "The Fury Beast DDR4 16GB RAM module delivers high-speed performance with speeds up to 3200 MHz. It features a sleek design with a low-profile heat spreader, making it ideal for gamers and content creators looking to enhance system performance in both gaming and multitasking environments."
        },
        {   id: 14,
            img: "images/ram2.webp",
            name: "Vengeance ddr4 32gb",
            category: "memory",
            price: "USD 72",
            description: "The Vengeance DDR4 2 x 16GB RAM kit offers a total of 32GB with speeds up to 3200 MHz, providing excellent performance for gaming and demanding applications. It features high-quality aluminum heat spreaders for effective cooling and is designed for optimal compatibility with various motherboards, making it a reliable choice for high-performance builds."
        },
        {   id: 15,
            img: "images/ram3.webp",
            name: "Adata XPG DDR5 16gb",
            category: "memory",
            price: "USD 62",
            description: "The Adata XPG DDR5 16GB RAM module delivers high-speed performance with data rates starting at 4800 MHz. Designed for gamers and content creators, it features advanced power management and improved bandwidth, ensuring faster load times and enhanced multitasking capabilities in modern systems."
        },
        {   id: 16,
            img: "images/ram4.webp",
            name: "Hyperx DDR4 8Gb",
            category: "memory",
            price: "USD 45",
            description: "The HyperX DDR4 8GB RAM module offers reliable performance with speeds up to 3200 MHz, making it suitable for gaming and everyday computing tasks. It features a stylish heat spreader for effective cooling and is optimized for compatibility with a wide range of motherboards, providing a great balance of performance and value."
        },
        {   id: 17,
            img: "images/monitor1.webp",
            name: 'LG 34" 160hz',
            category: "monitors",
            price: "USD 289",
            description: "The LG UltraGear 34' monitor features a curved display with a 160Hz refresh rate, providing an immersive gaming experience. It offers a WQHD resolution (3440 x 1440) for sharp visuals and supports NVIDIA G-SYNC for smooth gameplay. With a wide color gamut and fast response time, it's ideal for gamers and content creators seeking high-performance visuals."
        },
        {   id: 18,
            img: "images/monitor2.webp",
            name: 'Samsung 24" 75hz',
            category: "monitors",
            price: "USD 89",
            description: "The Samsung 24' monitor features a 75Hz refresh rate, providing smooth visuals for everyday computing and casual gaming. With a Full HD resolution (1920 x 1080), it delivers sharp images and vibrant colors. The monitor also includes eye-care technology to reduce fatigue during long usage, making it a solid choice for home or office environments."
        },
        {   id: 19,
            img: "images/monitor3.webp",
            name: 'odissey g5 27" 165hz',
            category: "monitors",
            price: "USD 219",
            description: "The Samsung Odyssey G5 27' monitor features a 165Hz refresh rate and a QHD resolution (2560 x 1440), offering an immersive gaming experience with smooth motion and detailed visuals. Its curved design enhances depth and field of view, while support for AMD FreeSync ensures tear-free gaming. With a fast response time and vibrant color accuracy, it's an excellent choice for gamers seeking high performance."
        },
        {   id: 20,
            img: "images/monitor4.webp",
            name: 'Asus Tuf 27" 170hz',
            category: "monitors",
            price: "USD 209",
            description: "The ASUS TUF Gaming 27' monitor features a 170Hz refresh rate and a Full HD resolution (1920 x 1080), providing smooth visuals and responsive gameplay. It offers adaptive sync technology for tear-free gaming and has a durable design with robust features for extended use. With enhanced color accuracy and fast response times, this monitor is ideal for competitive gamers looking for performance and reliability."
        },
        {   id: 21,
            img: "images/case1.webp",
            name: 'Msi mag force M100A',
            category: "cases",
            price: "USD 89",
            description: "The MSI MAG Forge M100A case features a sleek design with tempered glass panels and excellent airflow options. It supports up to ATX motherboards and offers ample space for multiple GPUs and cooling solutions. With customizable RGB lighting, a cable management system, and easy access to ports, it’s a great choice for gamers looking to build a stylish and efficient system."
        },
        {   id: 22,
            img: "images/case2.webp",
            name: 'Thermaltake S100',
            category: "cases",
            price: "USD 42",
            description: "The Thermaltake S100 case features a compact design with a tempered glass side panel, providing a stylish view of your build. It supports micro-ATX and mini-ITX motherboards and offers efficient airflow with multiple fan and radiator options. With a convenient cable management system and front I/O ports, it's an excellent choice for users seeking a balance of aesthetics and functionality in a small form factor."
        },
        {   id: 23,
            img: "images/case3.webp",
            name: 'Asus Tuf Gt501',
            category: "cases",
            price: "USD 149",
            description: "The ASUS TUF GT501 case features a robust design with a tempered glass side panel and customizable RGB lighting. It supports ATX motherboards and offers ample space for high-performance components, including multiple GPUs and cooling solutions. With excellent airflow and cable management options, it’s perfect for gamers and enthusiasts looking for a durable and visually striking chassis."
        },
        {   id: 24,
            img: "images/case4.webp",
            name: 'Deepcool Cc560',
            category: "cases",
            price: "USD 59",
            description: "The Deepcool CC560 case features a sleek design with a tempered glass side panel for showcasing your components. It supports ATX and micro-ATX motherboards and offers good airflow with multiple fan mounting options. The case includes a spacious interior for easy installation of hardware, along with a cable management system to keep your build neat. It's an excellent choice for users looking for an affordable yet stylish case for their PC builds."
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


