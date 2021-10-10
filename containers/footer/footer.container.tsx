import styles from './footer.module.sass'
import { Button, Accordion } from '../../components'
import { List } from '../../assets/sample.info'

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Accordion list={List} />
      <div className={styles.action}>
        <Button outlined>App store</Button>
        <Button outlined>Google play</Button>
      </div>
    </div>
  )
}
