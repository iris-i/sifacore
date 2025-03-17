import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Navigation from "./components/nav/Navigation";
import Intro from "./components/intro/Intro";
import Solutions from "./components/solutions/Solutions";
import SolutionsGrid from "./components/solutions/SolutionsGrid";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Navigation />
      <Intro />
      <Solutions />
      <SolutionsGrid />
    </div>
  );
}
