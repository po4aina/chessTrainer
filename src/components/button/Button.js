import Link from "next/link";
import buttonStyle from "./button.module.css";

const classNames = require('classnames');

export default function Button({variant, children, fullWidth = false, className, ...props}) {
  let btnClasses = classNames({
    [buttonStyle.wrapper]: true,
    [buttonStyle.wrapperTransparent]: variant === 'transparent',
    [buttonStyle.wrapperOutlined]: variant === 'outlined',
    [buttonStyle.fullWidth]: fullWidth,
    [className]: true
  })
  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
}