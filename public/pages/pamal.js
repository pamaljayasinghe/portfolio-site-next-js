
import Head from "next/head";
export default function SEOHead({
  title = "Pamal Jayasinghe | Web Developer & Digital Creator",
  description = "Welcome to Pamal Jayasinghe's portfolio - Specialized in web development, UI/UX design, and digital solutions. Explore my projects and professional journey.",
  keywords = [
    "Pamal Jayasinghe",
    "Web Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Portfolio",
    "Digital Creator",
    "Software Engineer",
    "Web Designer",
    "React Developer",
    "Next.js Developer",
  ],
  ogImage = "/img/me.png", // Add your OpenGraph image
}) {
  const baseUrl = "https://pamal.me"; // Replace with your actual domain

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={baseUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={baseUrl} />
    </Head>
  );
}
=======
import Head from "next/head";
export default function SEOHead({
  title = "Pamal Jayasinghe | Web Developer & Digital Creator",
  description = "Welcome to Pamal Jayasinghe's portfolio - Specialized in web development, UI/UX design, and digital solutions. Explore my projects and professional journey.",
  keywords = [
    "Pamal Jayasinghe",
    "Web Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Portfolio",
    "Digital Creator",
    "Software Engineer",
    "Web Designer",
    "React Developer",
    "Next.js Developer",
  ],
  ogImage = "/img/me.png", // Add your OpenGraph image
}) {
  const baseUrl = "https://pamal.me"; // Replace with your actual domain
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={baseUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={baseUrl} />
    </Head>
  );
}
