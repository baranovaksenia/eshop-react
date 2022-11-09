import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// import icons
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

//import styles
import styles from './Header.module.scss';

// create logo component
const logo = (
  <div className={styles.logo}>
    <Link to='/'>
      <h2>
        e<span>Shop</span>
      </h2>
    </Link>
  </div>
);

// create cart component
const cart = (
  <span className={styles.cart}>
    <Link to='/cart'>
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

// add .active class to active link
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '');

const Header = () => {
  const [scrollPage, setScrollPage] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  // toggle menu function (true/false)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // function that hide the menu
  const hideMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {});

  // add navbar class .fixed
  const fixedNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener('scroll', fixedNavbar);

  return (
    <>
      <header className={scrollPage ? `${styles.fixed}` : null}>
        <div className={styles.header}>
          {logo}
          {/* add class .nav when showMenu - true */}
          <nav
            className={
              showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`
            }
          >
            <div
              className={
                showMenu
                  ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                  : `${styles['nav-wrapper']}`
              }
              onClick={hideMenu}
            />
            <ul onClick={hideMenu}>
              <li className={styles['logo-mobile']}>
                {logo}
                <FaTimes
                  size={22}
                  color='#fff'
                  onClick={hideMenu}
                />
              </li>

              <li>
                {/* className={(state) => console.log(state)} // {isActive: true} */}
                <NavLink
                  to='/'
                  className={activeLink}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  className={activeLink}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div
              className={styles['header-right']}
              onClick={hideMenu}
            >
              <span className={styles.links}>
                <NavLink
                  className={activeLink}
                  to='/login'
                >
                  Login
                </NavLink>
                <NavLink
                  className={activeLink}
                  to='/register'
                >
                  Register
                </NavLink>
                <NavLink
                  className={activeLink}
                  to='order-history'
                >
                  My Orders
                </NavLink>
              </span>
              {cart}
            </div>
          </nav>

          <div className={styles['menu-icon']}>
            {cart}
            <HiOutlineMenuAlt3
              size={28}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
