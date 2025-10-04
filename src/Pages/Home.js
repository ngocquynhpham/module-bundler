import '../Assets/home.scss';
import { allProducts } from '../api/ProductsData.js';
export const Home = () => {
  
    const products = allProducts;
    const productCardsHTML = products.map(product => `
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
        <div class="home-page">
            <section class="hero-banner">
                <h1 class="banner-title">Thế Giới Đồ Cute</h1>
                <p class="banner-subtitle">Chào mừng bạn đến với thiên đường của những món đồ xinh xắn và đáng yêu nhất!</p>
            </section>

            <section class="products-section">
                <h2 class="products-section-title">Sản Phẩm Nổi Bật</h2>
                <div class="product-grid">
                    ${productCardsHTML}
                </div>
            </section>
        </div>
    `;
};
