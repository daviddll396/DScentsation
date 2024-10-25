import "./navbar.css";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-top-flex">
          <div className="navbar-left">
            <img src="/images/ng.svg" alt="" />
          </div>
          <div className="navbar-logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="navbar-right">
            <IoSearch className="nav-icon" />
            <FaRegUser className="nav-icon" />
            {/* <MdOutlineShoppingCart className="nav-icon nav-cart" /> */}
          </div>
        </div>
        <div className="nav-menu">
          <div className="nav-item">BRANDS</div>
          <div className="nav-item">WOMEN'S</div>
          <div className="nav-item">MEN'S</div>
          <div className="nav-item">GIFTING</div>
          <div className="nav-item">COSMETICS</div>
          <div className="nav-item">SALES</div>
          <div className="nav-item">CONTACT US</div>
        </div>
      </div>
      <div className="nav-bottom">
        ✨Contact us on +2349086819339 or +2348139180495
      </div>
    </>
  );
};

export default Navbar;
