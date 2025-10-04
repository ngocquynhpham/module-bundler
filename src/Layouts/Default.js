import '../Assets/style.scss';
export const DefaultLayout = ({ children }) => {
    return (
    `<div>
        <header class="main-header">
            <nav class="main-nav container">
                <div class="logo">
                    <a href="/" class="font-brand">CuteShop</a>
                </div>
                <div class="nav-links">
                    <a href="/" data-navigo >Trang Chủ</a>
                    <a href="/gioi-thieu" data-navigo >Giới Thiệu</a>
                    <a href="/san-pham" data-navigo >Sản Phẩm</a>
                </div>
                <a href="#" class="cart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-5.513c.205-.614-.142-1.285-.806-1.285H4.23z" />
                    </svg>
                </a>
            </nav>
        </header>

        <main class="container main-content">
            ${children}
        </main>

         <footer class="main-footer">
            <div class="container">
                <p class="footer-text" id="copyright">&copy; 2025 CuteShop with ❤️. All rights reserved.</p>
            </div>
        </footer>
    </div>`
    );
};
