import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="about-header">ABOUT THE STORE</div>
          <div className="about-copy">2023© D'SCENTSATION.</div>
          <div className="about-text">
            Welcome to our online perfume store in Nigeria! Since 2012, we have
            been committed to providing our customers with the best online
            shopping experience for authentic designer perfumes. As the best
            online perfume store in Nigeria, we take pride in offering our
            customers the widest selection of perfumes for men and women at
            unbeatable price.
          </div>
          <div className="about-nums">+2349086819339, +2348139180495</div>
        </div>
        <div className="footer-newsletter">
          <div className="news-header">Newsletter</div>
          <div className="news-text">
            Be the first to receive updates on new arrivals, special promos and
            sales.
          </div>
          <div className="news-input-flex">
            <input type="text" placeholder="Your Email" />
            <div className="news-ok">OK</div>
          </div>
        </div>
        <div className="footer-links">
          <div className="links-header">Quick links</div>
          <div className="link">FAQs</div>
          <div className="link">Shipping & Returns</div>
          <div className="link">Contact Us</div>
          <div className="link">Blog</div>
        </div>
      </div>
      <div className="footer-bot-flex">
        <div className="flag">
          <img src="/images/ng.svg" alt="" />
        </div>
        <p>Powered by Shopify</p>
      </div>
    </div>
  );
};

export default Footer;
