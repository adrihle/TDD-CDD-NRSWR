import styles from './accordion.module.sass'
import { useState } from 'react'

export const Accordion = ({ list }: data): JSX.Element => {
  const [lista, setLista] = useState(list)

  const handleClick = (e): any => {
    setLista(
      lista.map((faq, i) => {
        if (i === e) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }

        return faq
      })
    )
  }

  return (
    <div className={styles.container}>
      {list?.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.item} onClick={() => handleClick(index)}>
              {item.title}
              <span>
                <img
                  src="/icons/arrow.svg"
                  alt="arrow"
                  className={`${styles.icon} ${item.open && styles.open}`}
                />
              </span>
            </div>
            <div
              className={`${item.open && styles.contentOpen} ${styles.content}`}
            >
              {item.desc}
            </div>
          </div>
        )
      })}
    </div>
  )
}

interface questions {
  title: string
  desc: string
  open: boolean
}
interface data {
  list?: Array<questions>
}
