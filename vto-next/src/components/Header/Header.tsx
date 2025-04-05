'use client';

import './Header.css';

export default function Header() {
  return (
    <header className="header">
      {/* Logo thương hiệu */}
      <div className="logo" aria-label="Virtual Try-On logo">
        VTO
      </div>

      {/* Navigation links */}
      <nav className="nav-links" role="navigation" aria-label="Main navigation">
        <a href="#">More About Us</a>
        <a href="#">Brands Collaboration</a>
        <a href="#">Sign Up / Log in</a>
      </nav>
    </header>
  );
}
