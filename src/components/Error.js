import { useRouteError } from "react-router-dom";

const Error = () => {
  const errObj = useRouteError();
  return (
    <div>
      <h1>ERRORRRR</h1>
      <h3>
        {errObj.status}:{errObj.statusText}
      </h3>
    </div>
  );
};

export default Error;
