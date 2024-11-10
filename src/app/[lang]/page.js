import Main from "../components/Main";

export const metadata = {
  name: "google-site-verification",
  content: "rn1ZlN9g8g7fHia45p5G5UtdckF8ogxRywzzlJrHY-k",
};

export default function Home({ params: { lang } }) {
  return <Main lang={lang} />;
}
