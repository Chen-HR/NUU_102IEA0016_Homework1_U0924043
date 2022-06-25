import logo from "../logo.svg";
import styles from "../SolidApp.module.css";
export default function Home() 
  {
    console.log("public/src/page/Home.jsx")
    return (
      <div class={styles.center}>
        <br/>
        <img src={logo} class={styles.logo} alt="logo" />
        <br/>
        <br/>
        <p>
          102IEA0016 網站後端程式設計<br/>
          掛號系統<br/>
          日資工二甲 U0924043 陳皇任
        </p>
        <a
          class={styles.link}
          href="https://365nuu.sharepoint.com/:f:/s/110-2_U0924043_ProjectStorageArea/EiTYwDjwb0lFm3xN7hI4-EQBaE_l9yOmIzNLb6drVZ04Dg?e=V7ibym"
        >
          <code>source code</code>
        </a>
      </div>
    );
  }