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
            <span>mail@pamal.me</span>
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
      }, 3000);
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
/* Resume */
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
          <h3>FREELANCE WEB DESIGNER</h3>
          <p>Fiverr.com</p>
        </div>

        <div className={styles.card}>
          <div className={styles.date}>2024 Mar - 2024 May</div>
          <h3>WEBSITE MANAGER</h3>
          <p>USA The Basketball Factory INC</p>
        </div>

        <div className={styles.card}>
          <div className={styles.date}>2024 Mar - 2024 June</div>
          <h3>FREELANCE WEBSITE DESIGNER</h3>
          <p>Upwork.com</p>
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
          <div className={styles.date}>2023 Sep - Present</div>
          <h3>BEng (Hons) Software Engineering</h3>
          <p>University Of Westminster UK</p>
        </div>

        <div className={styles.card}>
          <div className={styles.date}> 2024 Nov </div>
          <h3>Professional Certificate in Machine Learning</h3>
          <p>IIT Professional Development Unit</p>
        </div>

        <div className={styles.card}>
          <div className={styles.date}> 2024 Jan</div>
          <h3>Google Crash Course Python</h3>
          <p>Google</p>
        </div>
      </div>
    </section>
  );
};

/* Previous Work */
const works = [
  {
    id: 1,
    title: "Barbershop Kel: Modern Barber Website Design for a Dutch Client",
    category: "Webs",
    image: "/img/web1.png",
    url: "https://www.barbershopkel.nl/",
    description:
      "Developed a sleek and user-friendly website for Barbershop Kel, a contemporary barbershop in Goor, Netherlands. The site features online booking, service listings, and responsive design to enhance client engagement.",
  },
  {
    id: 2,
    title:
      "Window Cleaning Round Rock TX: Comprehensive Website Design for a UK Client",
    category: "Webs",
    image: "/img/web3.png",
    url: "https://windowcleaningroundrocktx.com/",
    description:
      "Developed a professional and responsive website for Window Cleaning Round Rock TX, a family-owned business offering window cleaning, pressure washing, gutter cleaning, and Christmas lighting services in Round Rock, Texas. The site features service overviews, customer testimonials, and an intuitive contact form to enhance user engagement.",
  },
  {
    id: 3,
    title:
      "NyxLab: Professional IT and Cloud Services Website for a French Client",
    category: "Webs",
    image: "/img/web4.png",
    url: "https://nyxlab.fr/",
    description:
      "Developed a modern and responsive website for NyxLab, a French company specializing in cloud services, IT management, and website creation. The site showcases their service offerings, emphasizes security and scalability, and provides an intuitive user experience to attract and engage potential clients.",
  },
  {
    id: 4,
    title:
      "Fortitude Academy of Excellence: Comprehensive Educational Services Website for a U.S. Client",
    category: "Webs",
    image: "/img/web2.png",
    url: "https://fortitudeacademyofexcellence.com/",
    description:
      "Developed a professional and responsive website for Fortitude Academy of Excellence, a premier educational service provider in the United States. The site features detailed service offerings, including NCAA-certified coursework, ACT preparation, K-12 tutoring, and specialized support for students with Individualized Education Programs (IEP) or 504 Plans. It also includes user-friendly navigation, enrollment information, and contact forms to enhance user engagement.",
  },
  {
    id: 5,
    title: "Eco-Friendly Recycling App UI/UX Design",
    category: "UX/UI",
    image: "/img/ux1.png",
    url: "https://www.figma.com/design/7spJegU58kXdzA0nB1ZsCm/Untitled?node-id=413-413&t=j2dTS1dxosMVdbw1-1",
    description:
      "A vibrant and intuitive mobile application promoting sustainability and recycling. The design includes a step-by-step onboarding process, feature guides, user engagement for environmental events, and an organized system for tracking recycling efforts.",
  },
  {
    id: 6,
    title: "Fashion Retail Mobile App Design",
    category: "UX/UI",
    image: "/img/ux2.png",
    url: "https://www.figma.com/design/pg18sEAw67nDPZ7QXrOEo6/Personal-Mobiles?node-id=0-1&t=jPEj26r5KCbTH79y-1",
    description:
      "A sleek and modern mobile app tailored for fashion retail. This design focuses on user-centric experiences, including client management, personalized shopping, QR code integration, and seamless login and shop navigation.",
  },
];

const categories = ["All", "Webs", "App", "Other", "UX/UI"];

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

  const filteredWorks = works.filter((work) =>
    activeCategory === "All" ? true : work.category === activeCategory
  );

  const openModal = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <section className={styles.worksSection}>
      <h2 className={styles.title}>My Recent Works</h2>

      <div className={styles.filterMenu}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.worksGrid}>
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className={styles.workCard}
            onClick={() => openModal(work)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={work.image}
                alt={work.title}
                width={500}
                height={300}
                className={styles.workImage}
              />
            </div>
            <div className={styles.workInfo}>
              <h3>{work.title}</h3>
              <p>{work.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <div className={styles.modalContent}>
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                width={500}
                height={300}
                className={styles.modalImage}
              />
              <h3>{selectedWork.title}</h3>
              <p className={styles.modalDescription}>
                {selectedWork.description}
              </p>
              <Link href={selectedWork.url} className={styles.viewProjectBtn}>
                View Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default function Home() {
  return (
    <>
      <HomeContainer />
      <SkillsSection />
      <ResumeSection />
      <WorksSection />
    </>
  );
}
