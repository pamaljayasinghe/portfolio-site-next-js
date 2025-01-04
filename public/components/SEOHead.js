import Head from "next/head";

export default function SEOHead({
  title = "Pamal Jayasinghe - Creative Digital Portfolio",
  description = "Welcome to the official portfolio of Pamal Jayasinghe, featuring cutting-edge web development and design projects. Learn more about Pamal's skills and achievements.",
  keywords = [
    "Pamal",
    "Pamal Jayasinghe",
    "pamaljayasinghe",
    "web developer",
    "digital portfolio",
    "creative developer",
    "frontend developer",
    "UI/UX designer",
  ],
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
