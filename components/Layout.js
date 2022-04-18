import Head from "next/head";
import styles from "./layout.module.css"
import utlilsStyle from "../styles/utils.module.css"

const name = 'The Blog'
export const siteTiele = 'The Blog'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        link
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.jpg" className={utlilsStyle.borderCircle}/>
        <h1 className={utlilsStyle.heading2Xl}>{name}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
