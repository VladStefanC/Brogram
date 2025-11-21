import Grid from "./Grid";

export default function Layout(props) {
  const { children } = props;

  const header = (
    <header>
      <h1 className="text-gradient"> The Brogram!</h1>
      <p>
        <strong>The 30 Simple Workouts</strong>
      </p>
    </header>
  );

  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a href="https://github.com/VladStefanC" target="_blank">
          VladStefanC{" "}
        </a>
        <br />
        Styled with Smol James's{" "}
        <a target="_blank" href="https://www.fantacss.smoljames.com/">
          FantaCSS
        </a>{" "}
      </p>
    </footer>
  );
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
