import { useContext } from 'react';
import { LangContext } from '../../contexts';
import styles from './nav.module.sass'
import Link from 'next/link'
import Image from 'next/image';

export const Nav = (): JSX.Element => {
  const {lang, setLang} = useContext(LangContext);
  const flagUrl = `/images/${lang}.png`;
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link href="/">Home</Link>
        <Link href="/page2">Page 2</Link>
        <Link href="/page3">Page 3</Link>
      </div>
      <section>
        <button onClick={setLang} >
          <Image
            src={flagUrl}
            alt='language'
            width='64'
            height='64'
          />
        </button>
      </section>
    </div>
  )
}
