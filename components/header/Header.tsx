import Link from "next/link";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex justify-center items-center">
        <Avatar alt="Foto de perfil" src="/perfil.png" />
        <div className="p-3 justify-items-start">
          <h1 className="text-4xl font-bold w-full max-w-md mx-auto">
            Anderson Santana
          </h1>
          <p className="text-gray-700">Engenheiro de Software</p>
        </div>
      </div>
      <nav className="text-gray-700 text-xl flex justify-between gap-4">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </div>
  );
}
