import backButtonStyle from "./backButton.module.css";
import Link from "next/link";

export default function BackButton() {
  return (
    <>
      <Link href="/">
        <a className={backButtonStyle.content}>
          <img className={backButtonStyle.icon} src="/img/arrow.svg"/>
          Back
        </a>
      </Link>
    </>
  )
}