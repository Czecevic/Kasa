import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <div>
        <h1 className="Error404-title">404</h1>
      </div>
      <p>oups! La page que vous demandez n`&apos;`existe pas</p>
      <Link to={"/"} />
    </>
  );
};
