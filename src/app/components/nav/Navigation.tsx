import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  const { nav_wrapper } = styles;
  return (
    <nav className={`text-20 ${nav_wrapper}`}>
      <ul>
        <li><Link href="#about-us">About Us</Link></li>
        <li><Link href="#solutions">Our Solutions</Link></li>
        <li><Link href="#contact">Contact Us</Link></li>
      </ul>
    </nav>
  )
}
