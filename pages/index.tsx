import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hundred Knocks</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hundred Knocks</h1>

        <div className={styles.grid}>
          <Link href='/knocks/first'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              First
            </button>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>Knocking ...</footer>
    </div>
  )
}
