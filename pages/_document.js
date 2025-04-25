import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Jou Nutsman Pty Ltd – your one-stop handyman for home & business. We do maintenance, electrical, solar installations, security, IT & more. Get it done right!" />
        <meta name="keywords" content="handyman, maintenance, solar installation, CCTV, electric fencing, security systems, Jou Nutsman, IT support, electrician, plumbing" />
        <meta name="author" content="Stephan Kruger" />
        <meta name="google-site-verification" content="CyLTz8pT5WRU0NtUMx3x8-mbDhrhcZ7_JpvTC9nSehU" />

        {/* OpenGraph for social media */}
        <meta property="og:title" content="Jou Nutsman | Maintenance, Solar & Security Services" />
        <meta property="og:description" content="Reliable handyman services, solar installations, and security setups in South Africa. Get a quote today!" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://jounutsman.co.za" />
        <meta property="og:type" content="website" />

        {/* Favicon and other meta can go here too */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
