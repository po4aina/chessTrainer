import headingStyle from "./heading.module.css";

export default function Heading({children}) {
  return (
    <h1 className={headingStyle.heading}>
      {children}
    </h1>
  );
}