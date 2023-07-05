export const Error = () => {
  return (
    <section className="ErrorPage">
      <div>
        <h1 className="Error404-title">404</h1>
      </div>
      <div className="Error_link">
        <p>oups! La page que vous demandez n&apos;existe pas</p>
        <a href="/">retourner à la page d&apos;accueil</a>
      </div>
    </section>
  );
};
