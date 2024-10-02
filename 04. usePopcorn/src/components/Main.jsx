import { Children } from "react";

function Main({ children }) {
  return (
    <main className="grid gap-5 p-6 md:grid-cols-2 md:gap-5">{children}</main>
  );
}

export default Main;
