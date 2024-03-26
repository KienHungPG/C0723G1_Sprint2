import React from "react";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={`${styles["main-header"]} ${styles["header"]}`}>
      <div className={`${styles["navigationMobile"]} container text-center`}>
        <div className={`${styles["row"]} ${styles["middleHeader"]}`}>
          <div className="col-md-4 col-xs-4 main-left">
            <div className={styles["mobileHeaderIcon"]}>
              <button
                className={styles["btn__login"]}
                title="Đăng nhập"
                aria-label="Đăng nhập"
              >
                <i className="fa-solid fa-user"></i>
              </button>
              <span>Đăng nhập</span>
            </div>
          </div>
          <div className="col-md-4 col-xs-4 siteLogo">
            <a
              href="/"
              title="KWatch"
              className={styles["header-logo"]}
              id="logo"
            ></a>
          </div>
          <div className="col-md-4 col-xs-4 main-right">
            <div className={styles["mobileHeaderIcon"]}>
              <div className="search-container">
                <input type="text" placeholder="Nhập từ khóa..." />
                <button className={`${styles["btn__search"]} search-toggle`}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <Link
                to="/cart"
                className={`${styles["cart"]} ${styles["btn__cart"]} relative`}
                aria-label="Giỏ hàng"
                title="Giỏ hàng"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className={`${styles["counter"]} ${styles["qty-cart"]}`}>
                  1
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
