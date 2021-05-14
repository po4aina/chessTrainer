import styles from "./button.module.css";
import classNames from "classnames";

export default function Button({variant, children, className, onClick}) {
  const btnClasses = classNames(styles.wrapper, className, {
    [styles.wrapperTransparent]: variant === 'transparent',
  })
  return (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
}