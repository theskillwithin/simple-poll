import css from "./styles.css";

const Home = ({ test }) => {
  console.log({ test });
  return (
    <main className={css.container}>
      <header className={css.header}>
        <h1>♥ VSCode Extentions Poll ♥</h1>
        <h2>
          visit{" "}
          <a
            href="https://marketplace.visualstudio.com/vscode"
            target="__blank"
            rel="nofollow noopener noreferrer"
          >
            https://marketplace.visualstudio.com/vscode
          </a>
        </h2>
        <h2>copy the link of your favorite extentions and submit</h2>
      </header>
      <section>
        <p>Coming soon...</p>
      </section>
      <footer className={css.footer}>
        <p>
          <a
            href="https://marketplace.visualstudio.com/vscode"
            target="__blank"
            rel="nofollow noopener noreferrer"
          >
            https://github.com/theskillwithin/simple-poll
          </a>
        </p>
        <p>created by Austin Peterson</p>
      </footer>
    </main>
  );
};

Home.getInitialProps = async ({ req }) => {
  const { data } = await req;
  if (data) {
    return { test: data };
  }
  return { test: "error" };
};

export default Home;
