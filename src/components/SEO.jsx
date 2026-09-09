import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  image = "/images/indabo-hero.jpg",
}) {
  const siteName = "Indabo Café";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Indabo Café",
    image: "/images/indabo-hero.jpg",
    telephone: "+250788724292",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "KN 54 St",
        addressLocality: "Kigali",
        addressCountry: "RW",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "11 KG 670 St",
        addressLocality: "Kigali",
        addressCountry: "RW",
      },
    ],
    areaServed: "Kigali, Rwanda",
    sameAs: [
      "https://www.instagram.com/indabo_cafe/",
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default SEO;