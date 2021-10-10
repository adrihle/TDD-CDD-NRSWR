import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'

const PersonPage = ({ data }: Person): JSX.Element => {
  const router = useRouter()

  return (
    <section>
      <style jsx>{`
        section {
          padding-top: 75px;
        }
      `}</style>
      <div>{router.query.person} Page (desde front)</div>
      <div>{data.name} Page (desde server)</div>
    </section>
  )
}

export default PersonPage

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<unknown> => {
  let data: Record<string, string>

  const requestOp = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: ctx.query.person }),
  }

  console.time('TIMER')
  await fetch(process.env.API_URL + 'person', requestOp)
    .then((res) => res.json())
    .then((res) => {
      data = res[0]
    })
  console.timeEnd('TIMER')

  return {
    props: {
      data,
    },
  }
}

interface Person {
  data: Record<string, string>
}
