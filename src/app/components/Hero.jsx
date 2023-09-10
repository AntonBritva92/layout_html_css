import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="intro"
      style={{
        backgroundImage: 'url("./hero_img.svg")',
      }}
    >
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__block">
            <h1 className="intro__title">Roasted coffee best choice</h1>
            <p className="intro__text">
              The coffee is brewed by first roasting the green coffee beans over
              hot coals in a brazier. given an opportunity to sample.
            </p>
            <div className="intro__actions">
              <Link href="/" className="btn btn-main">
                Buy Now
              </Link>
              <Link href="/" className="btn btn-secondary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
