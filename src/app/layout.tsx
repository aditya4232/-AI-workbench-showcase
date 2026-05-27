import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Engineering Showcase · ScriptBees Internship",
    template: `%s · AI Engineering Showcase`,
  },
  description:
    "Six production AI systems built during the ScriptBees AI Engineering internship: RAG pipelines, multi-agent frameworks, OCR engines, NLP classifiers, and LLM-powered applications — with detailed case studies, methodology, research references, and learnings.",
  keywords: [
    "AI Engineering",
    "Internship Showcase",
    "ScriptBees",
    "RAG",
    "LLM",
    "NLP",
    "Machine Learning",
    "RAG Pipelines",
    "Multi-Agent Systems",
    "OCR",
    "Python",
    "TypeScript",
    "FastAPI",
    "LangChain",
  ],
  authors: [{ name: "Aditya Shenvi" }],
  creator: "Aditya Shenvi",
  openGraph: {
    title: "AI Engineering Showcase · ScriptBees Internship",
    description:
      "Six production AI systems built during the ScriptBees AI Engineering internship — with detailed case studies, methodology, research papers, and technical learnings.",
    locale: "en_US",
    type: "website",
    siteName: "AI Engineering Showcase",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Showcase · ScriptBees Internship",
    description:
      "Six production AI systems built during the ScriptBees AI Engineering internship — with detailed case studies, methodology, research papers, and technical learnings.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Collection",
    name: "AI Engineering Showcase · ScriptBees Internship",
    description:
      "A detailed showcase of six production AI systems built during the ScriptBees AI Engineering internship — RAG pipelines, multi-agent frameworks, LLM applications, OCR engines, and NLP classifiers — with methodology, research references, and technical learnings.",
    creator: {
      "@type": "Person",
      name: "Aditya Shenvi",
      jobTitle: "AI Engineering Intern",
    },
    about: {
      "@type": "Organization",
      name: "ScriptBees Pvt Ltd",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
