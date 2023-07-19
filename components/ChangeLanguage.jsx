import Link from "next/link";
import { useRouter } from "next/router";

export default function ChangeLanguage() {
  const { pathname, query, asPath, locale } = useRouter();
  return (
    <div>
      <Link href={{ pathname, query }} as={asPath} locale="es" className={locale === "es" ? "active" : "unactive"}>
        ES
      </Link>
      <Link href={{ pathname, query }} as={asPath} locale="en" className={locale === "en" ? "active" : "unactive"}>
       EN
      </Link>
    </div>
  );
}
