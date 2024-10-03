import { Children } from "react";

function Main({ children }) {
  return (
    <main className="flex flex-col items-center gap-4 p-4 md:flex-row md:justify-center">
      {children}
    </main>
  );
}

export default Main;
