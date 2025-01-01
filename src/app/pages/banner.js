import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <span>mail@gerolddesign.com</span>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/services">Services</Link>
          <Link href="/works">Works</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button className={styles.hireButton}>Hire me!</button>
      </nav>

      <main className={styles.main}>
        <div className={styles.content}>
          <h2 className={styles.title}>I am Gerold</h2>
          <h1 className={styles.subtitle}>
            Web Developer +<br />
            UX Designer
          </h1>
          <p className={styles.description}>
            I break down complex user experience problems to create integrity
            focussed solutions that connect billions of people
          </p>
          <div className={styles.actions}>
            <button className={styles.downloadBtn}>
              Download CV <span>↓</span>
            </button>
            <div className={styles.socialLinks}>
              <Link href="#" aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </Link>
              <Link href="#" aria-label="Dribbble">
                <FaDribbble />
              </Link>
              <Link href="#" aria-label="GitHub">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/image.png"
            alt="Gerold's profile"
            width={500}
            height={500}
            priority
            className={styles.profileImage}
          />
        </div>
      </main>
    </div>
  );
}
