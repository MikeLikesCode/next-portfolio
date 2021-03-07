import Layout from "../components/Layout/layout";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Home() {
  const Cards = [
    {
      name: "Spotify Analysis",
      image: "/spotify-project.png",
      description:
        "With this project I used the Spotify api to call data about a users top songs and display them as well as showing off...",
      github: "https://github.com/MikeLikesCode/spotify-analyzer",
      website: "https://spotify-analysis-next.herokuapp.com/",
    },
    {
      name: "Ip Locator",
      image: "/ip-locator.png",
      description:
        "With this project I used the Spotify api to call data about a users top songs and display them as well as showing off...",
      github: "https://github.com/MikeLikesCode/ip-tracker-project",
      website: "https://ip-tracker-project.vercel.app/",
    },
    {
      name: "Reach (Hackathon)",
      image: "/reach-project.png",
      description:
        "With this project I used the Spotify api to call data about a users top songs and display them as well as showing off...",
      github: "https://github.com/MikeLikesCode/fluffy-octo-train",
      website: "https://reachbusinesses.tech/",
    },
    {
      name: "Next Pokedex",
      image: "/next-pokedex.png",
      description:
        "With this project I used the Spotify api to call data about a users top songs and display them as well as showing off...",
      github: "https://github.com/MikeLikesCode/next-pokedex",
      website: "https://next-pokedex.maikurucodes.vercel.app/",
    },
  ];

  return (
    <Layout>
      <div className={styles.frame}>
        <div className={styles.frame_container}>
          <Image
            className={styles.frame_image}
            layout="fixed"
            width={195}
            height={250}
            src="/profile.png"
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.content_name}>Michael Guerrero</p>
        <h1 className={styles.content_job}>Front-end Developer</h1>
        <p className={styles.content_description}>
          Aspiring Front-end Developer based in New York. Looking for new
          opportunities to learn from.
        </p>
        <a href="#projects">
          {" "}
          <div className={styles.content_button}>My Projects</div>{" "}
        </a>
      </div>

      <div id="about" className={styles.about}>
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
            <a href="mailto:maikurusama@gmail.com">maikurusama@gmail.com</a>{" "}
            <FontAwesomeIcon
              className={styles.arrowRight}
              icon={faArrowRight}
            />
          </span>
          <div className={styles.about_icons}>
            <ul>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/michael-guerrero-3801a0168/"
                >
                  {" "}
                  <FontAwesomeIcon icon={faLinkedin} />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/mikelikescode/"
                >
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100007482829059"
                >
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="projects" className={styles.projects}>
        <div className={styles.projects_head}>
          <h1>My Projects</h1>
          <p>
            These are projects I'm working on with all the new knowledge I'm
            learning along the way in college and on my own.
          </p>
        </div>

        <div className={styles.projects_cards}>
          {Cards.map(({ name, image, website, github }) => (
            <div className={styles.projects_card}>
              <Image layout="fixed" width={350} height={180} src={image} />
              <h1>{name}</h1>

              <div className={styles.projects_card_links}>
                <a target="_blank" href={website}>
                  Website
                </a>
                <a target="_blank" href={github}>
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="journey" className={styles.journey}>
        <div className={styles.journey_heading}>
          <h1 className={styles.journey_head}>Journey</h1>
        </div>
        <div className={styles.journey_cards_container}>
          <div className={styles.journey_cards}>
            <div className={styles.journey_card}>
              <div className={styles.journey_card_number}>01</div>
              <div className={styles.journey_card_description}>
                Started the Software Engineering pathway in High School
              </div>
            </div>
            <div className={styles.journey_card}>
              <div className={styles.journey_card_number}>02</div>
              <div className={styles.journey_card_description}>
                Joined Code Nation Foundation program to learn basics
              </div>
            </div>
            <div className={styles.journey_card}>
              <div className={styles.journey_card_number}>03</div>
              <div className={styles.journey_card_description}>
                Joined Code Nation Fellowship Program to learn advanced JS
              </div>
            </div>
            <div className={styles.journey_card}>
              <div className={styles.journey_card_number}>04</div>
              <div className={styles.journey_card_description}>
                Joined the Google CSSI program during the summer
              </div>
            </div>
            <div className={styles.journey_card}>
              <div className={styles.journey_card_number}>05</div>
              <div className={styles.journey_card_description}>
                Started doing freelance work making JAMstack websites for
                clients
              </div>
            </div>
            <div className={styles.journey_card}>
              <div className={styles.journey_card_number}>06</div>
              <div className={styles.journey_card_description}>
                Seeking new opportunities to expand my experience and 
                show what I have learned.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
