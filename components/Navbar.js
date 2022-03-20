import Link from "next/link";
import Image from "next/image";
const github =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/480px-Octicons-mark-github.svg.png?download";
function Nav_bar() {
  return (
    <header className="bg-gradient-to-l from-yellow-200 via-yellow-400 to-yellow-700 h-16 flex justify-between  !items-center px-2">
      <Link href={"/"}>
        <a>
          <h2 className="text-white md:text-4xl text-2xl">Holy Quran</h2>
        </a>
      </Link>

      <a
        href="https://github.com/ETARAZ"
        className="bg-white h-10 w-10 rounded-full"
      >
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
