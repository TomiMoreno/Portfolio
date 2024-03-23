import Link from "next/link";
import { useRouter } from "next/router";

export default function GalleryProject() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main style={{
      overflow: "hidden",
    }}>
      {/* go back */}
      <Link 
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: "1000",
          width: 20,
          height: 20,
        }}
        href={"/gallery"}
      >
        <img src="/back.svg" alt="Back" />
      </Link>
      <iframe src={
        `/${id}`
      } style={{ width: "100%", height: "100vh", border: "none" }}></iframe>
    </main>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}
