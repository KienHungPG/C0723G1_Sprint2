import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS module

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}> {/* Sử dụng class từ module */}
      <ul className={styles['navbar-nav']}> {/* Sử dụng class với tên không phải là identifier */}
        <li className={styles['nav-item']}>
          <a href="#" className={styles['nav-link']}>Trang chủ</a>
        </li>
        <li className={`${styles['nav-item']} ${styles.dropdown} ${isDropdownOpen ? 'show' : ''}`}>
          <a href="#" className={`${styles['nav-link']} ${styles['dropdown-toggle']}`} onClick={toggleDropdown}>Thương hiệu</a>
          <div className={`${styles['dropdown-menu']} ${isDropdownOpen ? 'show' : ''}`}>
            <a href="#" className={styles['dropdown-item']}>Thương hiệu A</a>
            <a href="#" className={styles['dropdown-item']}>Thương hiệu B</a>
            <a href="#" className={styles['dropdown-item']}>Thương hiệu C</a>
          </div>
        </li>
        <li className={styles['nav-item']}>
          <a href="#" className={styles['nav-link']}>Sản phẩm A</a>
        </li>
        <li className={styles['nav-item']}>
          <a href="#" className={styles['nav-link']}>Sản phẩm B</a>
        </li>
        <li className={styles['nav-item']}>
          <a href="#" className={styles['nav-link']}>Sản phẩm C</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
