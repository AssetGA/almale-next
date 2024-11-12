import Main from "../components/Main";

export default function Home({ params: { lang } }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main lang={lang} />
    </>
  );
}
