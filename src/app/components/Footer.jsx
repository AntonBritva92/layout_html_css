import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__block">
            <Link href="/" className="footer__logo">
              <Image
                src="/footer_logo.svg"
                alt="footer logo"
                width={186}
                height={79}
              />
            </Link>
          </div>
          <div className="footer__block">
            <nav className="nav nav-footer">
              <Link href="/" className="nav__link">
                Home
              </Link>
              <Link href="/" className="nav__link">
                About
              </Link>
              <Link href="/" className="nav__link">
                Menu
              </Link>
              <Link href="/" className="nav__link">
                Reservation
              </Link>
            </nav>
          </div>
          <div className="footer__block">
            <nav className="nav nav-footer">
              <Link href="/" className="nav__link">
                Contacts
              </Link>
              <Link href="/" className="nav__link">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
