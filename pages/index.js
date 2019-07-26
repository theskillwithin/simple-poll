import css from "./styles.css";

const Home = () => (
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
    <footer className={css.footer}>created by Austin Peterson</footer>
  </main>
);

export default Home;
