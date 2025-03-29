"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "react-icons/fa";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
  FaGithub,
  FaMedium,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./page.module.css";

import SEOHead from "./components/SEOHead";

const HomeContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/img/logo.gif" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`${styles.menu} ${styles.desktopMenu}`}>
          <Link href="#sec1">About me</Link>
          <Link href="#sec2">Skills</Link>
          <Link href="#sec3">Education</Link>
          <Link href="#sec4">Recent Works</Link>
          <Link href="#sec5">Blog</Link>
          <Link href="mailto:hello@pamal.me">hello@pamal.me</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={styles.menuToggle}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.mobileMenuContent}>
            <Link href="#sec1" onClick={() => setIsMenuOpen(false)}>
              About Me
            </Link>
            <Link href="#sec2" onClick={() => setIsMenuOpen(false)}>
              Skills
            </Link>
            <Link href="#sec3" onClick={() => setIsMenuOpen(false)}>
              Education
            </Link>
            <Link href="#sec4" onClick={() => setIsMenuOpen(false)}>
              Recent Works
            </Link>
            <Link href="#sec5" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link
              href="mailto:hello@pamal.me"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Desktop Hire Button */}
        <Link href="mailto:hello@pamal.me">
          <button
            className={`${styles.hireButton} ${styles.desktopHireButton}`}
          >
            Contact me!
          </button>
        </Link>
      </nav>

      <main className={styles.main} id="sec1">
        <div className={styles.content}>
          <h2 className={styles.title}>I am Pamal Jayasinghe</h2>
          <h1 className={styles.subtitle}>
            Code + Design =<br />
            Impact
          </h1>
          <p className={styles.description}>
            I blend creativity and technology to craft seamless digital
            experiences that inspire and connect.
          </p>
          <div className={styles.actions}>
            <Link href="/img/pamal.pdf" target="_blank" download>
              <button className={styles.downloadBtn}>
                Download CV <span>↓</span>
              </button>
            </Link>
            <div className={styles.socialLinks}>
              <Link href="mailto:hello@pamal.me" aria-label="Mail">
                <FaEnvelope />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pamaljayasinghe/"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://medium.com/@pamaljayasinghe340"
                aria-label="Medium"
              >
                <FaMedium />
              </Link>
              <Link
                href="https://github.com/pamaljayasinghe"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/img/me.png"
            alt="Pamal's profile"
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
    { name: "Photoshop", percentage: "80%", icon: "/icons/photoshop.png" },
    { name: "Java", percentage: "80%", icon: "/icons/java.png" },
    { name: "Python", percentage: "81%", icon: "/icons/python.png" },
    { name: "WordPress", percentage: "90%", icon: "/icons/wordpress.png" },
    { name: "React", percentage: "80%", icon: "/icons/react.png" },
    { name: "MongoDB", percentage: "70%", icon: "/icons/mongodb.png" },
    { name: "JavaScript", percentage: "75%", icon: "/icons/js.png" },
    { name: "Html", percentage: "88%", icon: "/icons/html.png" },
    { name: "CSS", percentage: "88%", icon: "/icons/css.png" },
    { name: "MySql", percentage: "70%", icon: "/icons/mysql.png" },
    { name: "Node.js", percentage: "70%", icon: "/icons/node.png" },
    { name: "Next.js", percentage: "80%", icon: "/icons/next.png" },
    { name: "Spring Boot", percentage: "71%", icon: "/icons/spring.png" },
    { name: "Flutter", percentage: "72%", icon: "/icons/flutter.png" },
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
    <section className={styles.skillsSection} id="sec2">
      <h1 className={styles.skillsTitle}>My Skills</h1>
      <p className={styles.skillsDescription}>
        Turning ideas into seamless digital solutions with expertise in coding
        and design.
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
    <section className={styles.resumeSection} id="sec3">
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
    status: "completed",
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
    status: "completed",
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
    status: "completed",
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
    status: "completed",
    url: "https://fortitudeacademyofexcellence.com/",
    description:
      "Developed a professional and responsive website for Fortitude Academy of Excellence, a premier educational service provider in the United States. The site features detailed service offerings, including NCAA-certified coursework, ACT preparation, K-12 tutoring, and specialized support for students with Individualized Education Programs (IEP) or 504 Plans. It also includes user-friendly navigation, enrollment information, and contact forms to enhance user engagement.",
  },
  {
    id: 5,
    title: "Eco-Friendly Recycling App UI/UX Design",
    category: "UX/UI",
    image: "/img/ux1.png",
    status: "completed",
    url: "https://www.figma.com/design/7spJegU58kXdzA0nB1ZsCm/Untitled?node-id=413-413&t=j2dTS1dxosMVdbw1-1",
    description:
      "A vibrant and intuitive mobile application promoting sustainability and recycling. The design includes a step-by-step onboarding process, feature guides, user engagement for environmental events, and an organized system for tracking recycling efforts.",
  },
  {
    id: 6,
    title: "Fashion Retail Mobile App Design",
    category: "UX/UI",
    image: "/img/ux2.png",
    status: "completed",
    url: "https://www.figma.com/design/pg18sEAw67nDPZ7QXrOEo6/Personal-Mobiles?node-id=0-1&t=jPEj26r5KCbTH79y-1",
    description:
      "A sleek and modern mobile app tailored for fashion retail. This design focuses on user-centric experiences, including client management, personalized shopping, QR code integration, and seamless login and shop navigation.",
  },
  {
    id: 7,
    title: "TreeVital: AI-Powered Tree Health Companion",
    category: "App",
    image: "/img/app1.png",
    status: "ongoing",
    url: "#",
    description:
      "A Python and Flutter-based app using machine learning to identify tree species and diagnose diseases, offering an intuitive tool for tree health monitoring.",
  },
  {
    id: 8,
    title: "3D Interactive Marketing Site",
    category: "Other",
    image: "/img/marketsite.webp",
    status: "completed",
    url: "https://sdgp-marketing-web.vercel.app/",
    description:
      "A dynamic 3D-powered marketing website for our upcoming app. Built with Next.js, React Three Fiber, and Framer Motion to deliver an immersive experience with interactive animations and 3D visuals. 🚀",
  },
  {
    id: 9,
    title: "Timeless Wedding Films by Pinky Promise Weddings",
    category: "webs",
    image: "/img/web5.png",
    status: "completed",
    url: "#",
    description:
      "Pinky Promise Weddings crafts cinematic wedding films that let couples relive their special moments forever. Their professional and approachable team ensures each video becomes a cherished keepsake.",
  },
];

const categories = ["All", "Webs", "App", "Other", "UX/UI"];

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(8);
  const projectsPerPage = 8;

  // Filter works based on category
  const filteredWorks = works.filter((work) =>
    activeCategory === "All" ? true : work.category === activeCategory
  );

  // Get visible projects
  const displayedWorks = filteredWorks.slice(0, visibleProjects);

  // Check if there are more projects to show
  const hasMore = filteredWorks.length > visibleProjects;

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + projectsPerPage);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleProjects(projectsPerPage); // Reset visible projects when changing category
  };

  const openModal = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <section className={styles.worksSection} id="sec4">
      <h2 className={styles.worktitle}>My Recent Works</h2>

      <div className={styles.filterMenu}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.worksGrid}>
        {displayedWorks.map((work) => (
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
              {work.status === "ongoing" && (
                <span className={styles.statusBadge}>Ongoing</span>
              )}
            </div>
            <div className={styles.workInfo}>
              <h3>{work.title}</h3>
              <p>{work.category}</p>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className={styles.viewMoreContainer}>
          <button onClick={handleViewMore} className={styles.viewMoreButton}>
            View More Projects
          </button>
        </div>
      )}

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
              {selectedWork.status === "ongoing" ? (
                <div className={styles.ongoingProject}>Ongoing Project</div>
              ) : (
                <Link href={selectedWork.url} className={styles.viewProjectBtn}>
                  View Project
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CodeRainOverlay = () => {
  const [characters, setCharacters] = useState([]);
  const codeChars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノ></@#$%^&*{}[]+-=";

  // You can adjust these opacity values
  const minOpacity = 0.05; // Minimum opacity (0 to 1)
  const maxOpacity = 0.15; // Maximum opacity (0 to 1)

  useEffect(() => {
    const initialChars = Array.from({ length: 75 }, () => ({
      char: codeChars[Math.floor(Math.random() * codeChars.length)],
      x: Math.random() * 100,
      y: 100 + Math.random() * 50,
      speed: 0.3 + Math.random() * 0.7,
      opacity: minOpacity + Math.random() * (maxOpacity - minOpacity), // Using the opacity range
    }));

    setCharacters(initialChars);

    const animationInterval = setInterval(() => {
      setCharacters((prevChars) =>
        prevChars.map((char) => {
          let newY = char.y - char.speed;

          if (newY < -10) {
            newY = 100 + Math.random() * 20;
            return {
              ...char,
              y: newY,
              x: Math.random() * 100,
              char: codeChars[Math.floor(Math.random() * codeChars.length)],
              opacity: minOpacity + Math.random() * (maxOpacity - minOpacity), // Using the opacity range
            };
          }

          return { ...char, y: newY };
        })
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {characters.map((char, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${char.x}%`,
            top: `${char.y}%`,
            color: "#0f97b7",
            fontFamily: "monospace",
            fontSize: "20px",
            opacity: char.opacity,
            transform: "translate(-50%, -50%)",
            textShadow: "0 0 8px rgba(15, 151, 183, 0.8)",
            animation: "fadeIn 0.5s ease-in",
          }}
        >
          {char.char}
        </div>
      ))}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      category: "CODING",
      title: "Maximizing User Engagement in Spring Boot Applications",
      date: "Jan 03, 2025",
      comments: "No Comments",
      image: "/img/artical1.png",
      link: "https://medium.com/@pamaljayasinghe340/maximizing-user-engagement-in-spring-boot-applications-a-comprehensive-guide-2e5660bce6eb",
    },
    {
      id: 2,
      category: "CODING",
      title: "Mastering Java Threads",
      date: "Jan 03, 2025",
      comments: "No Comments",
      image: "/img/artical2.png",
      link: "#",
    },
    {
      id: 3,
      category: "CODING",
      title: "Here is How I Created and Optimized a 3D Marketing Website",
      date: "Feb 27, 2025",
      comments: "No Comments",
      image: "/img/artical4.png",
      link: "https://medium.com/@pamaljayasinghe340/heres-how-i-created-and-optimized-a-3d-marketing-website-679cb48bf410",
    },
  ];

  return (
    <section className={styles.blogSection} id="sec5">
      <h1 className={styles.blogTitle}>Recent Blogs</h1>
      <p className={styles.blogDescription}>
        Insights and ideas from my latest projects and passions.
      </p>

      <div className={styles.blogGrid}>
        {blogs.map((blog) => (
          <Link href={blog.link} key={blog.id} className={styles.blogCard}>
            <div className={styles.blogImageWrapper}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className={styles.blogImage}
              />
              <span className={styles.blogCategory}>{blog.category}</span>
            </div>
            <div className={styles.blogInfo}>
              <div className={styles.blogMeta}>
                <span>
                  <i className="far fa-calendar"></i> {blog.date}
                </span>
                <span>
                  <i className="far fa-comments"></i> {blog.comments}
                </span>
              </div>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Link href="/">
            <Image
              src="/img/logolight.gif"
              alt="Logo"
              width={200}
              height={40}
              className={styles.logo}
            />
          </Link>
        </div>

        <nav className={styles.footerNav}>
          <Link href="#sec1" className={styles.navLink}>
            About me
          </Link>
          <Link href="#sec2" className={styles.navLink}>
            Skills
          </Link>
          <Link href="#sec3" className={styles.navLink}>
            Education
          </Link>
          <Link href="#sec4" className={styles.navLink}>
            Recent Works
          </Link>
          <Link href="#sec5" className={styles.navLink}>
            Blog
          </Link>
          <Link href="mailto:hello@pamal.me" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        <div className={styles.footerCopyright}>
          © 2025 All Rights Reserved by Pamal Jayasinghe
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="Pamal Jayasinghe | Creative Digital Portfolio"
        description="Welcome to my portfolio showcasing web development, design projects, and professional expertise. Explore my work and let's create something amazing together."
      />
      <CodeRainOverlay />
      <HomeContainer />
      <SkillsSection />
      <ResumeSection />
      <WorksSection />
      <BlogSection />
      <Footer />
    </>
  );
}
