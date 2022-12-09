import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="index page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hi World!</h1>
      </main>
    </>
  );
}
