import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <img src="/images/dshero.jpg" alt="" />
      </div>
      <div className="fav-header">
        <div className="fav-st">Your Favourite</div>
        <div className="fav-lt">Designer Fragrances</div>
        <div className="fav-st2">
          at the best prices you will find online in Nigeria
        </div>
      </div>{" "}
      <div className="best-sellers-text">Best Sellers</div>
      <div className="catalog-container">
        <div className="bs-box">
          <div className="bs-img-container">
            <div className="bs-stock">OUT OF STOCK</div>
            <img src="./images/armafcdn.png" alt="" />
          </div>
          <div className="bs-brand">ARMAF</div>
          <div className="bs-name">
            Armaf Club de Nuit Intense Man Collector's Pride | Parfum | 105ml
          </div>
          <div className="bs-price">₦118,000.00</div>
        </div>
        <div className="bs-box">
          <div className="bs-img-container">
            <div className="bs-stock">20% OFF</div>
            <img src="./images/diesel.jpg" alt="" />
          </div>
          <div className="bs-brand">DIESEL</div>
          <div className="bs-name">Diesel Only The Brave High EDT 125ml</div>
          <div className="bs-price">₦95,500.00</div>
        </div>
        <div className="bs-box">
          <div className="bs-img-container">
            <div className="bs-stock">OUT OF STOCK</div>
            <img src="./images/cartier-declation.jpg" alt="" />
          </div>
          <div className="bs-brand">CARTIER</div>
          <div className="bs-name">Cartier Declaration Parfum 100ml</div>
          <div className="bs-price">₦154,500.00</div>
        </div>
        <div className="bs-box">
          <div className="bs-img-container">
            <div className="bs-stock">OUT OF STOCK</div>
            <img src="./images/arcdn.jpg" alt="" />
          </div>
          <div className="bs-brand">ARMAF</div>
          <div className="bs-name">
            Armaf Club de Nuit Intense For Men EDT 105ml
          </div>
          <div className="bs-price">₦58,500.00</div>
        </div>
        <div className="bs-box">
          <div className="bs-img-container">
            <div className="bs-stock">OUT OF STOCK</div>
            <img src="./images/ABRAAJEnclosure.jpg" alt="" />
          </div>
          <div className="bs-brand">FRAGRANCE WORLD</div>
          <div className="bs-name">ABRAAJ Enclosure</div>
          <div className="bs-price">₦48,500.00</div>
        </div>
        <div className="bs-box">
          <div className="bs-img-container">
            <div className="bs-stock">2% OFF</div>
            <img src="./images/amouage.jpg" alt="" />
          </div>
          <div className="bs-brand">AMOUAGE</div>
          <div className="bs-name">Amouage Interlude 53 Man EDP 100ml</div>
          <div className="bs-price">₦489,500.00</div>
        </div>
      </div>
      <div className="view-collection">VIEW COLLECTION</div>
      <div className="mid-flex">
        <div className="mid-left">
          <img src="/images/acqua.jpg" alt="" />
        </div>
        <div className="mid-right">
          <img src="/images/gift-set.jpg" alt="" />
        </div>
      </div>
      <div className="box-w-grid">
        <div className="box-frag">
          <img src="/images/davidoff.png" alt="" />
        </div>
        <div className="grid-frag">
          <div className="grid-box">
            <img
              src="/images/GivenchyL_interditEauDeParfum2PieceGiftSetEauDeParfum50ml-EauDeParfum10ml.jpg"
              alt=""
            />
          </div>
          <div className="grid-box">
            <img src="/images/101202441_169a.jpg" alt="" />
          </div>
          <div className="grid-box">
            <img src="/images/ArmaniStrongerWithYouAmberEDP100ml.png" alt="" />
          </div>
          <div className="grid-box">
            <img
              src="/images/GiorgioArmaniAcquaDiGioEDP125mlForMen.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="discount-section">
        <div className="discount-black">
          <div className="dbt">
            <div className="discount-black-top">
              Exclusive Designer Perfume Collection
            </div>
            <div className="discount-black-mid">Save Up to 40% Off!!</div>
            <div className="discount-black-midd">
              Indulge in luxury for less with our exclusive designer perfume on
              sale. Discover a world of exquisite scents from renowned brands,
              at unbelievable discounts
            </div>
            <div className="discount-black-link">SHOP NOW</div>
          </div>
        </div>
        <div className="discount-img">
          <img src="/images/discount.png" alt="" />
        </div>
      </div>
      <div className="newarr-header">NEW ARRIVALS</div>
      <div className="newarr-flex">
        <div className="newarr-container">
          <div className="newarr-block">
            <div className="newarr-block-image">
              <img
                src="/images/AcquaDiGioProfondoParfum100mld_scentsation.jpg"
                alt=""
              />
              <div className="newarr-block-brand">Giorgio Armani</div>
              <div className="newarr-block-name">
                Acqua Di Gio Profondo Parfum 100ml
              </div>
              <div className="newarr-price">₦188,000.00</div>
            </div>
          </div>
          <div className="newarr-block">
            <div className="newarr-block-image">
              <img
                src="/images/ralph-lauren-fragrances-polo67-eau-de-toilette-125ml-bottle-packshot.jpg"
                alt=""
              />
              <div className="newarr-block-brand">Ralph Lauren</div>
              <div className="newarr-block-name">
                Ralph Lauren Polo EST 67 EDT 125ml
              </div>
              <div className="newarr-price">₦165,000.00</div>
            </div>
          </div>
          <div className="newarr-block">
            <div className="newarr-block-image">
              <img src="/images/PacoRabanneInvictusParfum100ml.png" alt="" />
              <div className="newarr-block-brand">Paco Rabanne</div>
              <div className="newarr-block-name">
                Paco Rabanne Invictus Parfum 100ml
              </div>
              <div className="newarr-price">₦188,000.00</div>
            </div>
          </div>
          <div className="newarr-block">
            <div className="newarr-block-image">
              <img src="/images/Fragranceworldoudwonder.jpg" alt="" />
              <div className="newarr-block-brand">Fragrance World</div>
              <div className="newarr-block-name">
                Fragrance World Oud Wonder EDP 80ml
              </div>
              <div className="newarr-price">₦21,000.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="newarr-view">VIEW COLLECTION</div>
      <div className="featured-container">
        <div className="featured-left">
          <img src="/images/yslfeatured.jpg" alt="" />
        </div>
        <div className="featured-right">
          <div className="featured-one">
            Massive Discount At Checkout - Deal of The Week
          </div>
          <div className="featured-two">
            Yves Saint Laurent Libre Le Parfum 90ml
          </div>
          <div className="featured-brand">Yves Saint Laurent</div>
          <div className="featured-price">₦254,000.00</div>
          <div className="featured-add">ADD TO CART</div>
          <div className="featured-buy">BUY IT NOW</div>
        </div>
      </div>
      <div className="givenchy-big">
        <img src="/images/gentlemangivenchy.png" alt="" />
      </div>
      <div className="discover-small">DISCOVER</div>
      <div className="give-text">Givenchy Gentleman</div>
      <div className="give-subtext">
        Indulge in the allure of Givenchy Gentleman and elevate
        <br /> your presence with this iconic scent.
      </div>
      <div className="give-shop">SHOP NOW</div>
    </>
  );
};

export default Home;
