import '../Assets/productDetail.scss';
import { allProducts } from '../api/ProductsData.js';

export const ProductDetail = (matchData = {}) => {
  const productId = parseInt(matchData.data?.id || matchData.id, 10);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return `<div class="product-detail-page"><p>Sản phẩm không tồn tại.</p></div>`;
  }
  
  return `<div class="product-detail-page">
            <a href="/san-pham" class="back-to-products-btn" data-navigo>
                &larr; Back
            </a>
            <div class="product-detail-container">
                <div class="product-image-gallery">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h1 class="product-title">${product.name}</h1>
                    <p class="product-price-detail">${product.price}</p>
                    <p class="product-description">${product.description}</p>
                    <div class="product-actions">
                        <div class="quantity-selector">
                            <button>-</button>
                            <input type="text" value="1" readonly>
                            <button>+</button>
                        </div>
                        <button class="add-to-cart-btn-detail">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                </div>
            </div>
        </div>`;
};
