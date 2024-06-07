import React from 'react';

const menuLinks = [
  { id: 1, title: "About", path: "About" },
  { id: 2, title: "Contact", path: "Contact" },
  { id: 3, title: "Table", path: "Table" },
];

const Header = ({ setRoute }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__left">
            <a href="/" onClick={(e) => { e.preventDefault(); setRoute("About"); }}>
              <img
                src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717632000&semt=ais_user"
                alt="logo"
                width={100}
              />
            </a>
            <ul className="header__right">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => setRoute(link.path)}>{link.title}</button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
