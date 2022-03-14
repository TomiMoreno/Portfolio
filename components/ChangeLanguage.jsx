import Link from "next/link";
import { useRouter } from "next/router";

export default function ChangeLanguage() {
  const { pathname, query, asPath, locale } = useRouter();
  return (
    <div>
      <Link href={{ pathname, query }} as={asPath} locale="es">
        <a className={locale === "es" ? "active" : "unactive"}>ES</a>
      </Link>
      <Link href={{ pathname, query }} as={asPath} locale="en">
        <a className={locale === "en" ? "active" : "unactive"}>EN</a>
      </Link>
    </div>
  );
}
