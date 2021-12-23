import React, { useState } from 'react';
import './Header.scss';
import Logo from '../../assets/logo.svg';
const Header = () => {
  const HEADER_LIST = [
    {
      id: 1,
      iconClass: 'fas fa-film',
      name: 'Now Playing',
      type: 'now_playing'
    },
    {
      id: 2,
      iconClass: 'fas fa-fire',
      name: 'Popular',
      type: 'popular'
    },
    {
      id: 3,
      iconClass: 'fas fa-star',
      name: 'Top Rated',
      type: 'top_rated'
    },
    {
      id: 4,
      iconClass: 'fas fa-square',
      name: 'Upcoming',
      type: 'upcoming'
    }
  ];

  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setNavClass(!navClass);
    setMenuClass(!menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={Logo}></img>
          </div>
          <div id="header-mobile-menu" className={menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'} onClick={() => toggleMenu()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={navClass ? 'header-nav header-mobile-nav' : 'header-nav'}>
            {HEADER_LIST.map((item) => (
              <li className="header-nav-item" key={item.id}>
                <span className="header-list-name">
                  <i className={item.iconClass}></i>
                </span>
                &nbsp;
                <span>{item.name}</span>
              </li>
            ))}
            <input type="text" className="search-input" placeholder="Search for a movie" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
