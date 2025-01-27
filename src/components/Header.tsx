import CartLogo from "./CartLogo";
import Logo from "./Logo";
import NavInfo from "./NavInfo";
import SearchBlock from "./SearchBlock";

const navItems = [
  { name: "Главная", link: "/" },
  { name: "Каталог", link: "/catalog.html" },
  { name: "О магазине", link: "/about.html" },
  { name: "Контакты", link: "/contacts.html" },
];

export const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo />
            <div className="collapse navbar-collapse" id="navbarMain">
              <NavInfo items={navItems} className="navbar-nav mr-auto" />
              <div>
                <div className="header-controls-pics">
                  <SearchBlock />
                  <CartLogo />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
