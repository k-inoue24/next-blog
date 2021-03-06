import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';

import utilStyle from '../styles/utils.module.css';
import { getPostsData } from '../lib/post';


// SSG
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData }) {
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
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>

              <Link href={`/posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  className={styles.thumbnailImage}
                  />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article> 
          ))}
        </div>
      </section>
    </Layout>
  )
}
