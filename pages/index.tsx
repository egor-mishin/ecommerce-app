import styles from '../styles/Home.module.css'
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";

function Home(menu) {
  return (
    <div className={styles.container}>

    </div>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
  const menu = axios.post('')
  return {
    props: {
      // menu
    }
  }
}
