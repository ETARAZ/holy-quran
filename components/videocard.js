import Link from "next/link";
function VideoCard({ title, link }) {
  return (
    <Link href={link} passHref>
      <div className="hover:shadow-lg cursor-pointer p-4 flex justify-center items-center text-2xl bg-opacity-40  text-center bg-purple-500">
        <a className="hover:text-black block">{title}</a>
      </div>
    </Link>
  );
}

export default VideoCard;
