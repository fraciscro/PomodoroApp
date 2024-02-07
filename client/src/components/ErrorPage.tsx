import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-center p-5">Oops!</h1>
      <p className="text-center p-5">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center p-5">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
