import Link from "next/link";
import buttonStyle from "./button.module.css";

export default function Button({variant, children}) {
  switch (variant) {
    case 'transparent': {
      return (
        <button className={buttonStyle.wrapperTransparent}>
          {children}
        </button>
      );
    }
    default: { //'primary'
      return (
        <button className={buttonStyle.wrapper}>
          {children}
        </button>
      );
    }
  }
}