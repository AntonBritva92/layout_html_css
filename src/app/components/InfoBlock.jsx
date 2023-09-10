import Image from "next/image";

const InfoBlock = () => {
  return (
    <div className="container">
      <div className="info__block">
        <div className="info__img-wrapper">
          <Image src="/info_block.svg" alt="coffee photo" width={600} height={330} className="info__img" />
        </div>

        <div className="info__item">
          <div className="info__title">Roasted Coffee</div>
          <div className="info__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
