import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Siruvani Foundation - CNET Community in Chennai",
  description:
    "Siruvani Foundation - A thriving community of Coimbatorian families in Chennai. Join us for cultural events, family gatherings, and community service initiatives.",
  keywords:
    "Siruvani Foundation, CNET community, Chennai, cultural events, family gatherings, community service, Tamil Nadu",
  authors: [{ name: "Siruvani Foundation" }],
  openGraph: {
    title: "Siruvani Foundation - CNET Community in Chennai",
    description:
      "A thriving community of Coimbatorian families in Chennai. Join us for cultural events, family gatherings, and community service.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a658a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
