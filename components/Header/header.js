import styles from "./header.module.css";
import Head from 'next/head'

export default function Header() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Guerrero</title>


        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173055637-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163332503-1"></script>
              <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-173055637-1');
              </script>
              `,
          }}
        ></script> */}
      </Head>
      <div className={styles.leftNav}>
        <h1>Michael <br/> <span>Guerrero</span></h1>
      </div>
      <div className={styles.rightNav}>
        <ul>
         <a href="#about"><li>About</li></a>
         <a href="#projects"><li>Projects</li></a>
         <a href="#journey"><li>Journey</li></a>
         <a href="https://drive.google.com/file/d/1jeqlsNSxGg8CORzw0FYevfFQDPbrUnWK/view?usp=sharing"><li>Resume</li></a>
        </ul>
      </div>
    </div>
  );
}
