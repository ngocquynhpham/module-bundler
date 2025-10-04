import '../Assets/about.scss';
export const About = () => {
    return `
        <div class="about-page">
            <header class="about-header">
                <h1 class="about-title">Về CuteShop</h1>
                <p class="about-subtitle">Nơi mỗi món đồ đều mang một câu chuyện đáng yêu</p>
            </header>

            <main class="about-content">
                <section class="content-section">
                    <h3 class="content-title">Câu Chuyện Của Chúng Mình</h3>
                    <p class="content-text">
                        CuteShop được sinh ra từ niềm đam mê bất tận với những vật phẩm nhỏ xinh, những món đồ có thể thắp sáng một ngày của bất kỳ ai. Chúng mình tin rằng, niềm vui đôi khi đến từ những điều giản đơn nhất - một chiếc sticker ngộ nghĩnh, một chú gấu bông mềm mại, hay một cuốn sổ tay xinh xắn. Vì vậy, chúng mình đã tạo ra một không gian, nơi bạn có thể tìm thấy tất cả những niềm vui nhỏ bé đó.
                    </p>
                </section>

                <section class="content-section">
                    <h3 class="content-title">Sứ Mệnh</h3>
                    <p class="content-text">
                        Sứ mệnh của CuteShop là mang đến những sản phẩm chất lượng, độc đáo và đầy cảm hứng, giúp bạn thể hiện cá tính và lan tỏa năng lượng tích cực đến mọi người xung quanh. Mỗi sản phẩm tại shop đều được chúng mình lựa chọn cẩn thận bằng cả trái tim.
                    </p>
                </section>

                <section class="content-section team-section">
                    <h3 class="content-title">Những Người Bạn Đồng Hành</h3>
                    <div class="team-members">
                        <div class="team-member">
                            <img src="https://placehold.co/120x120/f8c3c8/663349?text=Jane" alt="Team Member 1">
                            <h4>Jane</h4>
                            <p>Người sáng lập</p>
                        </div>
                        <div class="team-member">
                            <img src="https://placehold.co/120x120/c7ceea/663349?text=John" alt="Team Member 2">
                            <h4>John</h4>
                            <p>Chăm sóc khách hàng</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    `;
};
