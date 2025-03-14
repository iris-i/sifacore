import styles from "./page.module.css";
import Hero from "./components/Hero";
import Navigation from "./components/nav/Navigation";
import Intro from "./components/intro/Intro";


export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Navigation />
      <Intro />
    </div>
  );
}
