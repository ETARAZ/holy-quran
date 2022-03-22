import Link from "next/link";
import Image from "next/image";
const github =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/480px-Octicons-mark-github.svg.png?download";
function Nav_bar() {
  return (
    <header className="navbar">
      <Link href={"/"}>
        <a>
          <h2 className="navbar-brand">Holy Quran</h2>
        </a>
      </Link>

      <a href="https://github.com/ETARAZ" className="navbar-github">
        <Image
          src={github}
          alt="github"
          width={50}
          height={50}
          objectFit="cover"
        />
      </a>
    </header>
  );
}

export default Nav_bar;
