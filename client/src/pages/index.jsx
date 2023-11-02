import Image from 'next/image';
import styles from '../styles/Home.module.css'
// import acmlogo from 'client\src\assets\acmlogo.png'
import logo from '../assets/acmlogo.png'
//import Navbar from '../components/navbar-component/navbar.jsx'

export default function Home() {
  return (
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
      </div>
    </div>
  )
}
