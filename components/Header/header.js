import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftNav}>
        <h1>Michael <br/> <span>Guerrero</span></h1>
      </div>
      <div className={styles.rightNav}>
        <ul>
         <a href="#about"><li>About</li></a>
         <a href="#projects"><li>Projects</li></a>
         {/* <a><li>Journey</li></a> */}
         <a href="https://drive.google.com/file/d/1jeqlsNSxGg8CORzw0FYevfFQDPbrUnWK/view?usp=sharing"><li>Resume</li></a>
        </ul>
      </div>
    </div>
  );
}
