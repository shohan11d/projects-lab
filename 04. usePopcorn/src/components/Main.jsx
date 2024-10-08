import { Children } from "react";

function Main({ children }) {
  return (
    <main className="flex flex-col items-center gap-4 p-4 align-top md:flex-row md:justify-center md:items-start">
      {children}
    </main>
  );
}

export default Main;
