import Head from "next/head";
import { useRouter } from "next/router";
import { AVATAR_URL, SITE_NAME, SITE_URL } from "../utils/site";

const urlFor = (locale, defaultLocale, path) =>
  `${SITE_URL}${locale === defaultLocale ? "" : `/${locale}`}${path}`;

export default function Seo({ title, description, noindex = false }) {
  const { locale, locales = [], defaultLocale, asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0].replace(/\/$/, "");
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = urlFor(locale, defaultLocale, path);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex" : "index, follow"} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />
      {locales.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={urlFor(l, defaultLocale, path)}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={urlFor(defaultLocale, defaultLocale, path)}
      />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={AVATAR_URL} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
