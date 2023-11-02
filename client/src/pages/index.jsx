import Image from 'next/image';
<<<<<<< HEAD
import styles from '../styles/Home.module.css'
// import acmlogo from 'client\src\assets\acmlogo.png'
import logo from '../assets/acmlogo.png'
//import Navbar from '../components/navbar-component/navbar.jsx'
=======
import styles from '../styles/Home.module.css';
import acmLogo from '../assets/acmlogo.png';

>>>>>>> upstream/part4

function Home() {
  return (
<<<<<<< HEAD
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className = {styles.main}>

      <div className = {styles.welcome}>
        <h2> Welcome to HackRacer! </h2>
        {/* Replace the heading, and add a short paragraph about your website here! */}
        <p> This is a typing game that I have definitely not been forced to make </p>
      </div>

      <div className={styles.image}>
        {/* Put the ACM logo here! */}
        {/* Keep in mind that any images you want to use must be imported from the /assets folder */}
        <Image src = {logo} width = {200} height = {200} alt = 'acmlogo'></Image>
=======
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h2>Welcome to HackRacer!</h2>
          <p>You can navigate to <i>Add Sentence</i> button at the top to add a new sentence. 
              Then you can go over to <i>Play Game</i> to start playing the game. 
          </p>
      </div>
      <div className={styles.image}><Image src={acmLogo} width={200} height={200} alt="acmlogo"/>
>>>>>>> upstream/part4
      </div>
    </div>
  );
}

export default Home;
