import Link from 'next/link';
import styles from './intro.module.css';
import dots from '../../../../public/assets/dots.svg'

const Intro = () => {
  let {
    intro,
    intro_wrapper,
    intro_button,
    intro_button_wrapper,
    intro_title,
    intro_button_link
  } = styles;

  return (
    <section className={intro_wrapper}>
      <div className={intro}>
        <h2 className={`text-40 ${intro_title}`}>Sifacore is built on our innovative outlook on upcoming technology trends.</h2>
        <p className="text-28">We provide comprehensive technology solutions tailored for forward-thinking enterprises.</p>
        <div className={intro_button_wrapper}>
          <Link href="#contact-us" className={intro_button_link}>
            <button className={`text-24 all-caps-heading ${intro_button}`}>Reach out to get started</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Intro;
