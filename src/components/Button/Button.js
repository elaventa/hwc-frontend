import styles from "./Button.module.scss"

const Button = ({onClick, content, style}) => {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
        {content}
    </button>
  )
}

export default Button