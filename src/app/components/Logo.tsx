import styles from "./logo.module.css"
import logoSvg from "../../../public/assets/logo.svg"

type LogoVariant = 'header' | 'footer';

interface LogoProps {
  logoImg: string;
  variant: LogoVariant;
}

let { logo } = styles;

export default function Logo({ logoImg, variant }: LogoProps) {
  return (
    <h1 className={`all-caps-heading ${logo}`}>
      {/* {logoSvg} */}
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" fill="none"><g clipPath="url(#a)"><path fill="#000" d="M25.959 7.172h-1.92V.2h1.92v6.972Zm0 36.054h-1.92v6.97h1.92v-6.97Zm24.038-18.988h-6.972v1.921h6.972v-1.92Zm-43.025 0H0v1.921h6.972v-1.92ZM43.354 8.201l-1.358-1.358-4.93 4.93 1.358 1.357 4.93-4.93ZM12.931 38.624l-1.358-1.358-4.93 4.93 1.358 1.358 4.93-4.93Zm30.423 3.572-4.93-4.93-1.358 1.358 4.93 4.93 1.358-1.358ZM12.931 11.773 8 6.843 6.643 8.201l4.93 4.93 1.357-1.358Zm23.107-9.024-1.756-.781-2.833 6.37 1.755.78 2.834-6.37Zm-17.49 39.31-1.754-.78-2.834 6.37 1.755.78 2.833-6.37Zm29.68-7.576-6.369-2.834-.78 1.755 6.37 2.833.78-1.755Zm-39.31-17.49-6.37-2.833-.78 1.755 6.37 2.834.78-1.755Zm39.76.136-.689-1.792-6.507 2.5.689 1.792 6.508-2.5ZM8.515 32.56l-.688-1.792-6.508 2.5.688 1.793 6.508-2.5ZM34.86 48.19l-2.5-6.507-1.793.688 2.5 6.508 1.793-.689ZM19.43 8.026l-2.5-6.507-1.793.688 2.5 6.508 1.793-.688Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 .2h50v50H0z" /></clipPath></defs></svg>
      </p>
      <p>Sifacore technology LLC</p>
    </h1>
  );

}
