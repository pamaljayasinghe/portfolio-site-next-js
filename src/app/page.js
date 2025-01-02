"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import styles from "./page.module.css";

const HomeContainer = () => {
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
          <h2 className={styles.title}>I am Pamal Jayasinghe</h2>
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
            src="/img/me.png"
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
};

const SkillsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideInterval = useRef(null);
  const skillsContainerRef = useRef(null);

  const skills = [
    { name: "Photoshop", percentage: "92%", icon: "/icons/photoshop.png" },
    { name: "Java", percentage: "80%", icon: "/icons/java.png" },
    { name: "Python", percentage: "85%", icon: "/icons/python.png" },
    { name: "WordPress", percentage: "99%", icon: "/icons/wordpress.png" },
    { name: "React", percentage: "89%", icon: "/icons/react.png" },
    { name: "MongoDB", percentage: "93%", icon: "/icons/mongodb.png" },
    { name: "JavaScript", percentage: "93%", icon: "/icons/js.png" },
    { name: "Html", percentage: "93%", icon: "/icons/html.png" },
    { name: "CSS", percentage: "93%", icon: "/icons/css.png" },
    { name: "MySql", percentage: "93%", icon: "/icons/mysql.png" },
    { name: "Node.js", percentage: "93%", icon: "/icons/node.png" },
    { name: "Next.js", percentage: "93%", icon: "/icons/next.png" },
    { name: "Spring Boot", percentage: "93%", icon: "/icons/spring.png" },
    { name: "Flutter", percentage: "93%", icon: "/icons/flutter.png" },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const itemsPerSlide = isMobile ? 2 : 7;
  const totalSlides = Math.ceil(skills.length / itemsPerSlide);

  useEffect(() => {
    if (isAutoPlaying) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(slideInterval.current);
  }, [isAutoPlaying, totalSlides]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleSkills = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return skills.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.skillsTitle}>My Skills</h1>
      <p className={styles.skillsDescription}>
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </p>

      <div
        className={styles.sliderWrapper}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div ref={skillsContainerRef} className={styles.skillsContainer}>
          {getVisibleSkills().map((skill, index) => (
            <div key={`${currentSlide}-${index}`} className={styles.skillItem}>
              <div className={styles.skillImageWrapper}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={128}
                  height={128}
                  className={styles.skillIcon}
                />
              </div>
              <p className={styles.skillPercentage}>{skill.percentage}</p>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.dotsContainer}>
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`${styles.dot} ${
                currentSlide === index ? styles.activeDot : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResumeSection = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.section}>
        <div className={styles.header}>
          <img
            src="/icons/job.png"
            alt="Experience Icon"
            className={styles.icon}
          />
          <h2>My Experience</h2>
        </div>

        <div className={styles.card}>
          <div className={styles.date}>2022 - Present</div>
          <h3>LEAD DEVELOPER</h3>
          <p>Blockdots, London</p>
        </div>

        <div className={styles.card}>
          <div className={styles.date}>2021 - 2022</div>
          <h3>FULL STACK WEB DEVELOPER</h3>
          <p>Parsons, The New School</p>
        </div>

        <div className={styles.card}>
          <div className={styles.date}>2020 - 2021</div>
          <h3>UI DESIGNER</h3>
          <p>House of Life, Leeds</p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.header}>
          <img
            src="/icons/edu.png"
            alt="Education Icon"
            className={styles.icon}
          />
          <h2>My Education</h2>
        </div>

        <div className={styles.card}>
          <div className={styles.date}>2020 - 2023</div>
          <h3>PROGRAMMING COURSE</h3>
          <p>Harvard University</p>
        </div>

        <div className={styles.card}>
          <div className={styles.date}>2016 - 2020</div>
          <h3>GRAPHIC DESIGN COURSE</h3>
          <p>University of Denmark</p>
        </div>

        <div className={styles.card}>
          <div className={styles.date}>2012 - 2015</div>
          <h3>WEB DESIGN COURSE</h3>
          <p>University of California</p>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <HomeContainer />
      <SkillsSection />
      <ResumeSection />
    </>
  );
}
