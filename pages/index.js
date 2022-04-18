import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

import utilStyle from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utilStyle.headingMd}>
          Next.jsを使用した簡易ブログ。
        </p>

      </section>
      <section>
        <h2 className={utilStyle.headingMd}>📝 記事一覧</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>テストタイトル</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022.01.01</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>テストタイトル</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022.01.01</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>テストタイトル</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022.01.01</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>テストタイトル</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022.01.01</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
