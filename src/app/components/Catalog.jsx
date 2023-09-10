import Image from "next/image";
import Link from "next/link";

const Catalog = () => {
  return (
    <div className="container">
      <h2 className="block__title">Catalog</h2>
      <div className="products__wrapper">
        <div className="products__block">
          <Link href="/" className="products__item">
            <Image
              src="/product.svg"
              width={97}
              height={199}
              className="products__image"
              alt="coffee photo"
            />
            <h3 className="products__title"> Lavazza coffe</h3>
            <div className="products__footer">
              <div className="products__price">
                $19.99
                <del>$29.99</del>
              </div>
              <button type="button" className="products__favorite">
                <Image
                  src="/favorite_icon.svg"
                  width={27}
                  height={23}
                  alt="favorite icon"
                />
              </button>
            </div>
          </Link>
        </div>

        <div className="products__block">
          <Link href="/" className="products__item">
            <Image
              src="/product.svg"
              width={97}
              height={199}
              className="products__image"
              alt="coffee photo"
            />
            <h3 className="products__title"> Lavazza coffe</h3>
            <div className="products__footer">
              <div className="products__price">
                $19.99
                <del>$29.99</del>
              </div>
              <button type="button" className="products__favorite">
                <Image
                  src="/favorite_icon.svg"
                  alt="favorite icon"
                  width={27}
                  height={23}
                />
              </button>
            </div>
          </Link>
        </div>
        <div className="products__block">
          <Link href="/" className="products__item">
            <Image
              src="/product.svg"
              width={97}
              height={199}
              className="products__image"
              alt="coffee photo"
            />
            <h3 className="products__title"> Lavazza coffe</h3>
            <div className="products__footer">
              <div className="products__price">
                $19.99
                <del>$29.99</del>
              </div>
              <button type="button" className="products__favorite">
                <Image
                  src="/favorite_icon.svg"
                  alt="favorite icon"
                  width={27}
                  height={23}
                />
              </button>
            </div>
          </Link>
        </div>
        <div className="products__block">
          <Link href="/" className="products__item">
            <Image
              src="/product.svg"
              width={97}
              height={199}
              className="products__image"
              alt="coffee photo"
            />
            <h3 className="products__title"> Lavazza coffe</h3>
            <div className="products__footer">
              <div className="products__price">
                $19.99
                <del>$29.99</del>
              </div>
              <button type="button" className="products__favorite">
                <Image
                  src="/favorite_icon.svg"
                  alt="favorite icon"
                  width={27}
                  height={23}
                />
              </button>
            </div>
          </Link>
        </div>
        <div className="products__block">
          <Link href="/" className="products__item">
            <Image
              src="/product.svg"
              width={97}
              height={199}
              className="products__image"
              alt="coffee photo"
            />
            <h3 className="products__title"> Lavazza coffe</h3>
            <div className="products__footer">
              <div className="products__price">
                $19.99
                <del>$29.99</del>
              </div>
              <button type="button" className="products__favorite">
                <Image
                  src="/favorite_icon.svg"
                  alt="favorite icon"
                  width={27}
                  height={23}
                />
              </button>
            </div>
          </Link>
        </div>
        <div className="products__block">
          <Link href="/" className="products__item">
            <Image
              src="/product.svg"
              width={97}
              height={199}
              className="products__image"
              alt="coffee photo"
            />
            <h3 className="products__title"> Lavazza coffe</h3>
            <div className="products__footer">
              <div className="products__price">
                $19.99
                <del>$29.99</del>
              </div>
              <button type="button" className="products__favorite">
                <Image
                  src="/favorite_icon.svg"
                  width={27}
                  height={23}
                  alt="favorite icon"
                />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
