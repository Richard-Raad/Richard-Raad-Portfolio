import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Richard Raad Profile Pic 2.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Richard_Raads_Resume_2024.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Richard Raad"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Richard
          <br />
          Raad
        </h1>
        <h2>Computer Science Major</h2>
        <span>
          <a href="https://github.com/Richard-Raad" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/richardtraad/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          A dedicated Computer Science student in Virginia Tech's Honors
          College, ranking in the top 5% with a 3.96 GPA. I'm passionate about
          software engineering, app development, and machine learning, with a
          special interest in fitness technology—fueled by my training for an
          upcoming Half Ironman. Looking for Summer 2025 internships where I can
          combine my strong problem solving skills with my drive to learn and
          create impactful solutions.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
