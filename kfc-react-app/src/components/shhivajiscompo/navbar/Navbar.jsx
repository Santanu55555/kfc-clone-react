import React from "react";
import styles from "../navbar/Navbar.module.css";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.navpar}>
      <div className={styles.bgcl}>
        <div className={styles.subpars}>
          <img
            className={styles.logoofkfc}
            src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
            alt="ddd"
          />
          <div className={styles.fornavmenu}>
            {/* <Link to="">Menu</Link> */}
            Menu
          </div>
          <div className={styles.fornavmenu}>Deals</div>
        </div>
        <div className={styles.subpars}>
          <div className={styles.logoac}>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
              alt="acc"
            />
          </div>
          <div className={styles.forsignin}>Sign in</div>
          <div className={styles.vl}></div>
          <div className={styles.fordigit}>
            <p>₹ 0</p>
          </div>
          <div className={styles.logocart}>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
