import Footer from "./footer";
import Nav_bar from "./navbar";
export default function Layout({ children }) {
  return (
    <>
      <Nav_bar />
      <main className="main-app">{children}</main>
      <Footer />
    </>
  );
}
