import Main from "../components/Main";

export default async function Home({ params }) {
  const { lang } = await params;
  return <Main lang={lang} />;
}
