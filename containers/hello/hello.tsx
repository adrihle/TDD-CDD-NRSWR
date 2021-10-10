import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './hello.module.sass'
import Link from 'next/link'
// import { LangContext } from 'contexts';
// import { text } from '../../assets/text';

export const Hello: React.FC<any> = ({ data }): JSX.Element => {
  const [name, setName] = useState('');
  const [lista, setLista] = useState(data);
  // const {lang} = useContext(LangContext);

  // const textPage = text[lang];


  useEffect(() => {
    setLista(filterUsers(data, name))
  }, [name])

  // useEffect(() => {
  //   console.log('Current Idioma: ', lang)
  // },[lang])

  return (
    <div className={styles.body}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="filter"
      />
      <div className={lista.length ? styles.container : styles.empty}>
        {lista.length ? (
          lista.map((user: any) => {
            return (
              <Link href="/[person]" as={`/${user.name}`} key={user.id}>
                <div className={styles.box}>
                  <h2 className={styles.title}>{user.name}</h2>
                </div>
              </Link>
            )
          })
        ) : (
          <div>
            <Image src="/icons-mmm.svg" alt="me" width="64" height="64" />
            <p>Smell like bitch here...</p>
          </div>
        )}
      </div>
      <div className={styles.scroller}>
        <section className={styles.flip}>
          {/* <h3 className={lang === 'es' ? styles.textEs : styles.textEn}>
          <a href="#">{textPage}</a>
          </h3> */}
        </section>
      </div>
    </div>
  )
}

export const filterUsers = (arr: [], name: string): Array<unknown> => {
  return arr.filter((user: any) => {
    return user.name.match(name)
  })
}
