import '../Assets/products.scss';
import { allProducts } from '../api/ProductsData.js';
export const Products = () => {

    const productCardsHTML = allProducts.map(product => `
        <div class="product-card">
            <a href="/san-pham/${product.id}" data-navigo>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </a>
            <button class="add-to-cart-btn">Thêm vào giỏ</button>
        </div>
    `).join('');

    return `
        <div class="products-page">
            <header class="page-header">
                <h1 class="page-title">Tất Cả Sản Phẩm</h1>
            </header>

            <div class="product-grid">
                ${productCardsHTML}
            </div>
        </div>
    `;
};
