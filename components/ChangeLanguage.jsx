import Link from "next/link";
import { useRouter } from "next/router";

export default function ChangeLanguage() {
  const { pathname, query, asPath, locale } = useRouter();
  return (
    <div>
      <Link href={{ pathname, query }} as={asPath} locale="es" className={locale === "es" ? "active" : "unactive"}>
        <img src="/argentina.png" alt="Argentinian flag" width={20} height={20} />
      </Link>
      <Link href={{ pathname, query }} as={asPath} locale="en" className={locale === "en" ? "active" : "unactive"}>
        <img src="/united-states.png" alt="United States flag" width={20} height={20} />
      </Link>
    </div>
  );
}
