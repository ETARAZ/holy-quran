import Footer from "./Footer";
import Nav_bar from "./Navbar";
import React from "react";
export default function Layout({ children }) {
  return (
    <>
      <Nav_bar />
      <main className="mx-auto min-h-[100vh] p-2 w-full max-w-6xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
