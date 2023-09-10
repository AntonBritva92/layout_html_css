import Link from "next/link";
import Image from "next/image";

const NewsBlock = () => {
  return (
    <div className="container">
      <div className="block__title">News</div>
      <div className="news__wrapper">
        <div className="news__block">
          <Link href="#" className="news__item">
            <Image
              className="news_img"
              src="/news_img.svg"
              width={386}
              height={239}
              alt="Cup of coffee"
            />
            <div className="news__content">
              <h3 className="news__title">Lavazza Coffe</h3>
              <p className="news__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </Link>
        </div>
        <div className="news__block">
          <Link href="#" className="news__item">
            <Image
              className="news_img"
              src="/news_img.svg"
              width={386}
              height={239}
              alt="Cup of coffee"
            />
            <div className="news__content">
              <h3 className="news__title">Lavazza Coffe</h3>
              <p className="news__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </Link>
        </div>
        <div className="news__block">
          <Link href="#" className="news__item">
            <Image
              className="news_img"
              src="/news_img.svg"
              width={386}
              height={239}
              alt="Cup of coffee"
            />
            <div className="news__content">
              <h3 className="news__title">Lavazza Coffe</h3>
              <p className="news__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
  k;
};

export default NewsBlock;
