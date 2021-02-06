import Layout from "../components/Layout/layout";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  const Cards = [
    {
     'name': "Spotify Analysis",
     'image': "/spotify-project.png",
     'description': 'With this project I used the Spotify api to call data about a users top songs and display them as well as showing off...',
     'github':'https://github.com/MikeLikesCode/spotify-analyzer',
     'website':'https://spotify-analysis-next.herokuapp.com/'
    },
    {
      'name': "Ip Locator",
      'image': "/ip-locator.png",
      'description': 'With this project I used the Spotify api to call data about a users top songs and display them as well as showing off...',
      'github':'https://github.com/MikeLikesCode/ip-tracker-project',
      'website':'https://ip-tracker-project.vercel.app/'
    },
    {
      'name': "Reach (Hackathon)",
      'image': "/reach-project.png",
      'description': 'With this project I used the Spotify api to call data about a users top songs and display them as well as showing off...',
      'github':'https://github.com/MikeLikesCode/fluffy-octo-train',
      'website':'https://reachbusinesses.tech/'
    },
    {
      'name': "Next Pokedex",
      'image': "/next-pokedex.png",
      'description': 'With this project I used the Spotify api to call data about a users top songs and display them as well as showing off...',
      'github':'https://github.com/MikeLikesCode/next-pokedex',
      'website':'https://next-pokedex.maikurucodes.vercel.app/'
    }
  ]

  return (
    <Layout>
      <div className={styles.frame}>
        <img src="/profile.png" />
      </div>

      <div className={styles.content}>
        <p className={styles.content_name}>Michael Guerrero</p>
        <h1 className={styles.content_job}>Front-end Developer</h1>
        <p className={styles.content_description}>
          I help companies get their brand out by making websites that users can
          use and enjoy.
        </p>
        <div className={styles.content_button}>My Projects</div>
      </div>

      <div className={styles.about}>
        <div className={styles.about_learning}>
          <span className={styles.about_head}>About Me</span>
          <h1>
            Learning is hard at times. Though keeping the right mindset helps a
            long way.
          </h1>
          <p>
            I'm currently a Computer Science major that goes to CUNY Queens
            College. I've been developing websites and web apps personally and
            in programs throughout my high school years and have become more
            interested in learning more.
          </p>
          <div className={styles.about_experince}>
            <span>4</span>{" "}
            <p>
              {" "}
              Years of <br /> Experince
            </p>
          </div>
        </div>
        <div className={styles.about_socials}>
          <h1>Any Type of Query & Discussion.</h1>
          <p>
            Need to ask me what type of toast I like or a business related
            question? Feel free to contact me below.{" "}
          </p>

          <span className={styles.about_email}>
            mike@mikelikescode.com{" "}
            <FontAwesomeIcon
              className={styles.arrowRight}
              icon={faArrowRight}
            />
          </span>
          <div className={styles.about_icons}>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faLinkedin} />{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faFacebook} />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.projects_head}>
          <h1>My Projects</h1>
          <p>
            These are projects I'm working on with all the new knowledge I'm
            learning along the way in college and on my own.
          </p>
          </div>

          <div className={styles.projects_cards}>
            {Cards.map(({name,image,website,github}) => (
              <div className={styles.projects_card}>
                <img src={image}/>
                <h1>{name}</h1> 

                <div className={styles.projects_card_links}>
                  <a target="_blank" href={website}>Website</a>
                  <a target="_blank" href={github}>Github</a>
                </div>
              </div>
            ))}
          </div>
       
      </div>
    </Layout>
  );
}
