import React, { useEffect } from "react";

const ErrorBoundaryPage = () => {
  useEffect(() => {
    throw new Error("Error boundary test");
  }, []);
  return (
    <main className="flex flex-col items-center">
      <div>This page will not be shown</div>
    </main>
  );
};

export default ErrorBoundaryPage;
