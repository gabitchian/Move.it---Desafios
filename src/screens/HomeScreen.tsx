import GithubLoginButton from '../components/GitHubButton';
import styles from '../styles/screens/HomeScreen.module.css';

const HomeScreen = () => (
  <div className={styles.container}>
    <img src="Simbolo.svg" alt="Move.it" className={styles.imgContainer} />
    <div className={styles.moveContainer}>
      <img src="Logo.svg" alt="Move.it - Desafios" />
      <strong>Bem-vindo</strong>
      <div className={styles.githubContainer}>
        <img src="Github.svg" alt="Github" />
        <p>Faça login com seu github para começar</p>
      </div>
      <div className={styles.buttonContainer}>
        <GithubLoginButton />
      </div>
    </div>
  </div>
);
export default HomeScreen;
