import classNames from 'classnames';
import styles from './button.module.css';

export default function Button({
  variant, children, className, onClick,
}) {
  const btnClasses = classNames(styles.wrapper, className, {
    [styles.wrapperTransparent]: variant === 'transparent',
  });
  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
}
