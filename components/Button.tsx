import styles from './Button.module.css'
import {ReactElement, ReactNode} from "react";

type Props = {
  href?: string,
  onClick?: () => void,
  disabled?: boolean,
  icon?: ReactNode,
  children: ReactNode,
}

export default function Button({href, onClick, disabled, icon, children}: Props): ReactElement {
  if (href != null) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={styles.button}>
        <span>{children}</span>
        {icon}
      </a>
    )
  } else {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={styles.button}>
        <span>{children}</span>
        {icon}
      </button>
    )
  }
}