import Script from 'next/script';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const title = 'Riaz Ahmad Butt | Full Stack Developer';
const description =
  'Riaz Ahmad Butt is a Full Stack Developer (MERN, Next.js, TypeScript) and Software Engineer based in Islamabad, Pakistan, building fast, scalable web applications. Available for freelance and full-time roles.';
const url = 'https://www.engr-riaz.tech/';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: { canonical: '/' },
  keywords: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Riaz Ahmad Butt',
  ],
  creator: 'Riaz Ahmad Butt',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f7f6' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: 'Riaz Ahmad Butt',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Riaz Ahmad Butt — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Riaz Ahmad Butt',
  url,
  image: 'https://www.engr-riaz.tech/images/headshort.jpg',
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Aawaz AI',
    url: 'https://www.aawaz.com.pk/',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  email: 'mailto:engr.riazahmadbutt@gmail.com',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'BSc Software Engineering',
  },
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'Express',
    'NetSuite',
    'MERN Stack',
  ],
  sameAs: [
    'https://github.com/Engr-Riaz-Ahmad-Butt',
    'https://www.linkedin.com/in/riaz-ahmad-butt/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-analytics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className="font-sans bg-gray text-gray-600 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <Providers>
          <Header />
          <main id="main" className="flex min-h-screen w-full flex-col">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
