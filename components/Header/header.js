import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftNav}>
        <h1>Michael <br/> <span>Guerrero</span></h1>
      </div>
      <div className={styles.rightNav}>
        <ul>
         <li>About</li>
         <li>Projects</li>
         <li>Journey</li>
         <li>Resume</li>
        </ul>
      </div>
    </div>
  );
}
