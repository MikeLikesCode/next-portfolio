import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
      <div className={styles.container}>
       <div>
        <p>Created with Coffee and Next.js</p>
       </div>
       <div className={styles.icons}>
       <ul>
              <li>
                {" "}
                <a target="_blank" href="https://www.linkedin.com/in/michael-guerrero-3801a0168/">  <FontAwesomeIcon icon={faLinkedin} />{" "} </a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="https://www.instagram.com/mikelikescode/"> <FontAwesomeIcon icon={faInstagram} />{" "}</a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100007482829059"> <FontAwesomeIcon icon={faFacebook} />{" "}</a>
              </li>
            </ul>
       </div>
      </div>
    )
  }
  