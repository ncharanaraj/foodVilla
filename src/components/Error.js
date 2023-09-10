import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <>
      <h1>{status}</h1>
      <h2>{statusText}</h2>
    </>
  );
};

export default Error;
