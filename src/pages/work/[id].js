import Head from 'next/head'
import Layout from '@/components/layout'
import Image from 'next/image'
import styles from '@/styles/Works.module.css'

export default function Home ({ data }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout cart=''>
        <h1>All my Works</h1>
        <div className={styles.works}>
          <div key={data.id} className={styles.work}>
            <Image src={data.url} width='600' height='600' alt='My Work' />
            <h2>{data.title}</h2>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let data = await response.json()
    data = data.slice(0, 15)
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
  }
}
export async function getStaticProps ({ params }) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + params.id)
    const data = await response.json()
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}
