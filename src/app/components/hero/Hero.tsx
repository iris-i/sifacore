import Image from "next/image";

import styles from "./hero.module.css"
import heroImage from "../../../../public/assets/hero.jpg"
import Logo from "./Logo";

const {
  hero,
  hero_title,
  hero_text,
  hero_image_container,
  hero_text_container
} = styles;

const Hero = () => {
  return (
    <header>
      <div className="container">
        <div className={hero}>
          <div className={hero_image_container}>
            <Image
              src={heroImage}
              alt=""
              width={400}
              height={683}
              placeholder="blur"
              objectFit="cover"
            />
          </div>
          <div className={hero_text_container}>
            <Logo variant="header" />
            <h2 className={`text-76 ${hero_title}`}>Enterprise technology solutions</h2>
            <p className={`text-28 ${hero_text}`}>Your partner in cutting-edge IT solutions, cybersecurity, and strategic investments.</p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Hero;
