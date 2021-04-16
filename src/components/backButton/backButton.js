import backButtonStyle from "./backButton.module.css";
import Link from "next/link";

export default function BackButton() {
  return (
    <>
      <Link href="/">
        <a className={backButtonStyle.wrapper}>
          <img className={backButtonStyle.icon} src="/img/arrow.svg"/>
          Back
        </a>
      </Link>
    </>
  );
}