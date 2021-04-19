import buttonStyle from "./button.module.css";

const classNames = require('classnames');

export default function Button({variant, children, fullWidth = false, className, onClick}) {
  let btnClasses = classNames({
    [buttonStyle.wrapper]: true,
    [buttonStyle.wrapperTransparent]: variant === 'transparent',
    [className]: true
  })
  return (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
}