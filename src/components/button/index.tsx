import styles from './styles.module.scss'

interface ButtonProps {
  title: string
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button onClick={() => alert('yo!')} className={styles.btn}>
      {title}
    </button>
  )
}
