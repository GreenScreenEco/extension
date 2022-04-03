import styles from './Button.module.css'
import {ReactElement, ReactNode} from "react";
import {cx} from "../lib/Classnames";

type Props = {
  href?: string,
  onClick?: () => void,
  disabled?: boolean,
  icon?: ReactNode,
  tooltip?: string,
  children: ReactNode,
}

export default function Button({href, onClick, disabled, icon, tooltip, children}: Props): ReactElement {
  if (href != null) {
    return (
      <a
        href={href}
        onClick={onClick}
        title={tooltip}
        className={cx(styles.button, disabled ? styles.disabled : null)}>
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
        title={tooltip}
        className={cx(styles.button, disabled ? styles.disabled : null)}>
        <span>{children}</span>
        {icon}
      </button>
    )
  }
}