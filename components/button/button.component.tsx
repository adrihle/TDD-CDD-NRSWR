import styles from './button.module.sass'

export const Button = ({ outlined, children }: Props): JSX.Element => {
  return (
    <a
      className={`${styles.base} ${outlined ? styles.outlined : styles.filled}`}
    >
      {children}
    </a>
  )
}

interface Props {
  outlined?: boolean
  children?: JSX.Element | string
}
