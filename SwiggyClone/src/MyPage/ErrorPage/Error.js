import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="error">
      <h1>Oppss!! Something Went Wrong 😥😭</h1>
      <h1>{err.status} : {err.statusText}</h1>
      <h1>{err.data}</h1>
    </div>
  );
};
export default Error;
