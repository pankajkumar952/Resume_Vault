import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  metadataBase: new URL('https://www.resumevault.app'),
  title: "ResumeVault – Share Your Resume With One Permanent Link",
  description: "Create a free resume link with ResumeVault. Share your resume online with one URL and keep the same link every time you update your resume. Built by Er. Pankaj Kumar.",
  keywords: ["resume link generator", "resume link", "free resume link", "online resume link", "create a resume link", "share resume online", "resume URL", "ResumeVault"],
  openGraph: {
    title: "ResumeVault – Share Your Resume With One Permanent Link",
    description: "Create a free resume link with ResumeVault. Share your resume online with one URL and keep the same link when you update your resume.",
    url: "https://www.resumevault.app/",
    siteName: "ResumeVault",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.resumevault.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResumeVault - Create a Resume Link",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumeVault – Share Your Resume With One Permanent Link",
    description: "Create a free resume link with ResumeVault. Share your resume online with one URL and keep the same link when you update your resume.",
    images: ["https://www.resumevault.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.resumevault.app/",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.resumevault.app/#organization",
      "name": "ResumeVault",
      "url": "https://www.resumevault.app/",
      "logo": "https://www.resumevault.app/icon.png"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.resumevault.app/#website",
      "url": "https://www.resumevault.app/",
      "name": "ResumeVault",
      "description": "Create a free resume link with ResumeVault. Share your resume online with one URL.",
      "publisher": {
        "@id": "https://www.resumevault.app/#organization"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.resumevault.app/#software",
      "name": "ResumeVault",
      "url": "https://www.resumevault.app/",
      "description": "Create a permanent resume URL and share your resume online with a simple resume link. Built by Er. Pankaj Kumar.",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
};

import { Geist } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistSans.className} antialiased`}>
        <ThemeProvider>
          <ToastProvider>
            <AuthProvider>{children}</AuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
