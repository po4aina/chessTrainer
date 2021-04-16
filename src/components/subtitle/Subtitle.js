import subtitleStyle from "./subtitle.module.css";

export default function Subtitle({children}) {
  return (
    <h2 className={subtitleStyle.subtitle}>
      {children}
    </h2>
  )
}