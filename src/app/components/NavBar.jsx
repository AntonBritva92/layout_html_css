import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__line">
        <div className="container">
          <div className="header__line-wrapper">
            <div className="header__lng">
              <Link href="/" className="active1">
                UA
              </Link>
              <Link href="/" className="active">
                EN
              </Link>
            </div>
            <Link href="/" className="header__phone">
              +380930000000
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="header__wrapper">
          <div className="header__block">
            <nav className="nav">
              <Link href="/" className="nav__link home__link">
                Home
              </Link>
              <Link href="/" className="nav__link">
                About
              </Link>
              <Link href="/" className="nav__link">
                Menu
              </Link>
              <Link href="/" className="nav__link">
                Resorvation
              </Link>
            </nav>
          </div>
          <Link href="/">
            <Image
              src="/navBarlogo.svg"
              width={58}
              height={54}
              alt="Site logo"
              className="header_logo"
            />
          </Link>
          <div className="header__block right">
            <div className="header__actions">
              <Link href="/" className="header__link">
                <Image
                  src="/user_icon.svg"
                  width={25}
                  height={23}
                  alt="user icon"
                />
              </Link>
              <Link href="/" className="header__link">
                <Image
                  src="/favorite_icon.svg"
                  width={27}
                  height={23}
                  alt="favorite icon"
                />
              </Link>
              <Link href="/" className="header__link">
                <Image
                  src="/cart_icon.svg"
                  width={19}
                  height={23}
                  alt="cart icon"
                />
                <span className="header__link__event"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
