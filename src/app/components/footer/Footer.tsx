import Image from 'next/image';
import Logo from '../hero/Logo';
import styles from './footer.module.css';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className={`section-padding ${styles.footer_wrapper}`}>

      <div className={`container`}>
        <Logo variant="footer" />
        <div className={`${styles.footer}`}>
          <div className={`${styles.footer_content}`}>
            <Image
              src="/assets/cityscape.jpg"
              alt=""
              width={648}
              height={399}
            />
          </div>
          <div className={`${styles.footer_contact}`}>
            <h2 className="text-18">Contact us</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
