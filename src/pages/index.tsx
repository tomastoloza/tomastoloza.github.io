import Head from 'next/head'
import Profile from '@/Views/Profile'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tomás Toloza',
    url: 'https://tomastoloza.xyz',
    image: 'https://github.com/tomastoloza.png',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'MuleSoft',
      url: 'https://www.salesforce.com/products/integration/overview/',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidad Nacional de Hurlingham',
      url: 'https://unahur.edu.ar/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Buenos Aires',
      addressCountry: 'AR',
    },
    sameAs: [
      'https://github.com/tomastoloza',
      'https://www.linkedin.com/in/tomas-toloza',
    ],
    knowsAbout: [
      'Software Engineering',
      'Distributed Systems',
      'TypeScript',
      'React',
      'Next.js',
      'Java',
      'APIs & Integrations',
      'Cloud Architecture',
    ],
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Tomás Toloza — Software Engineer</title>
        <meta name="title" content="Tomás Toloza — Software Engineer" />
        <meta
          name="description"
          content="Software Engineer at MuleSoft & Computer Science student at UNAHUR. Specializing in high-performance web systems, integrations, and modern frontend architecture."
        />
        <meta
          name="keywords"
          content="Tomás Toloza, Tomas Toloza, Software Engineer, MuleSoft, Full Stack Developer, Frontend, Backend, TypeScript, React, Next.js, Java, UNAHUR, Buenos Aires, Argentina"
        />
        <meta name="author" content="Tomás Toloza" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tomastoloza.xyz" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://tomastoloza.xyz" />
        <meta property="og:title" content="Tomás Toloza — Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer @ MuleSoft • CS Student @ UNAHUR. Explore experience, education, and projects."
        />
        <meta property="og:image" content="https://github.com/tomastoloza.png" />
        <meta property="og:site_name" content="Tomás Toloza" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Tomás" />
        <meta property="profile:last_name" content="Toloza" />
        <meta property="profile:username" content="tomastoloza" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://tomastoloza.xyz" />
        <meta name="twitter:title" content="Tomás Toloza — Software Engineer" />
        <meta
          name="twitter:description"
          content="Software Engineer @ MuleSoft • CS Student @ UNAHUR. Explore experience, education, and projects."
        />
        <meta name="twitter:image" content="https://github.com/tomastoloza.png" />

        {/* Theme & PWA */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className="min-h-screen bg-black text-white w-full selection:bg-[#ff5500] selection:text-black">
        <Profile />
      </main>
    </>
  )
}
