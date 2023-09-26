const products = [
    {
        name: 'HP Essentials 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
        name: 'Dell Inspiron 15',
        price: 699,
        stars: 4.5,
        reviews: 180,
        seller: 'Dell',
        image: 'https://www.notebookcheck.org/uploads/tx_nbc2/DellInspiron15-7577__1__01.JPG'
    },
    {
        name: 'Apple MacBook Air',
        price: 999,
        stars: 4.7,
        reviews: 350,
        seller: 'Apple Store',
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661'
    },
    {
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 1299,
        stars: 4.8,
        reviews: 220,
        seller: 'Lenovo',
        image: 'https://p2-ofp.static.pub/fes/cms/2022/08/12/c0930tuc1yytgw3yt8m94fz91kunue061389.png'
    },
    {
        name: 'ASUS ROG Strix G15',
        price: 1199,
        stars: 4.6,
        reviews: 280,
        seller: 'ASUS',
        image: 'https://m.media-amazon.com/images/I/71xnP70ObwL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: 'Samsung Galaxy Book Pro',
        price: 849,
        stars: 4.4,
        reviews: 150,
        seller: 'Samsung',
        image: 'https://imageservice.asgoodasnew.com/1000/19422/102/title-0000.jpg'
    },
    {
        name: 'HP Pavilion Gaming Laptop',
        price: 799,
        stars: 4.3,
        reviews: 210,
        seller: 'PcComponentes',
        image: 'https://m.media-amazon.com/images/I/810gynDZHzL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: 'Acer Aspire 5',
        price: 529,
        stars: 4.2,
        reviews: 180,
        seller: 'Acer',
        image: 'https://laptopmedia.com/wp-content/uploads/2020/10/1-25-e1603348191559.jpg'
    },
    {
        name: 'Microsoft Surface Laptop 4',
        price: 1299,
        stars: 4.7,
        reviews: 280,
        seller: 'Microsoft Store',
        image: 'https://cdn.idealo.com/folder/Product/201204/9/201204911/s11_produktbild_gross/.jpg'
    },
    // Agrega más productos aquí...
];


const productContainer = document.querySelector('.product-list');

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.classList.add('product-image');
    image.src = product.image;

    const title = document.createElement('div');
    title.classList.add('product-title');
    title.textContent = product.name;

    const price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = `${product.price}€`;

    const stars = document.createElement('div');
    stars.classList.add('product-stars');
    stars.textContent = `Valoración: ${product.stars} estrellas (${product.reviews} reseñas)`;

    const seller = document.createElement('div');
    seller.classList.add('product-seller');
    seller.textContent = `Vendido por ${product.seller}`;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(stars);
    card.appendChild(seller);

    return card;
}

// Obtener vendedores únicos de los productos
const uniqueSellers = [...new Set(products.map((product) => product.seller))];

// Crear opciones para el filtro de vendedores
const sellerFilter = document.getElementById('sellerFilter');
uniqueSellers.forEach((seller) => {
    const option = document.createElement('option');
    option.value = seller;
    option.textContent = seller;
    sellerFilter.appendChild(option);
});

const priceFilter = document.getElementById('priceFilter');
const filterButton = document.getElementById('filterButton');
const clearFiltersButton = document.getElementById('clearFiltersButton');

// Función para aplicar filtros
function applyFilters() {
    const selectedSeller = sellerFilter.value;
    const maxPrice = parseFloat(priceFilter.value);

    const filteredProducts = products.filter((product) => {
        const sellerMatch = selectedSeller === 'Todos' || product.seller === selectedSeller;
        const priceMatch = isNaN(maxPrice) || product.price <= maxPrice;

        return sellerMatch && priceMatch;
    });

    // Limpiar la lista actual de productos
    productContainer.innerHTML = '';

    // Mostrar los productos filtrados
    filteredProducts.forEach((product) => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

// Manejadores de eventos para los filtros y el botón "Limpiar Filtros"
filterButton.addEventListener('click', applyFilters);
clearFiltersButton.addEventListener('click', () => {
    sellerFilter.value = 'Todos';
    priceFilter.value = '';
    applyFilters();
});

// Inicializar la página mostrando todos los productos
products.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
});
