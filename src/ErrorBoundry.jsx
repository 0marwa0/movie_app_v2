import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const errrorHandler = () => {
      setHasError(true);
    };
    window.addEventListener("error", errrorHandler);
    return () => {
      window.removeEventListener("error", errrorHandler);
    };
  });
  if (hasError) {
    return <div>Something worng happened!!!</div>;
  }

  return children;
}

export default ErrorBoundary;
