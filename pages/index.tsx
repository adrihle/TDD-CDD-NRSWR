import { Hello } from '../containers'
import styles from '../styles/pages/index.module.sass'

export const Home = (data: []): JSX.Element => {
  return (
    <div className={styles.container}>
      <Hello {...data} />
    </div>
  )
}

export const getStaticProps = async (): Promise<unknown> => {
  const res = await fetch(process.env.API_URL + 'allPersons')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default Home
