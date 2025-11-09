import Link from "next/link";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center py-4 md:flex-row md:justify-between lg:px-4"> 
      <div className="w-full flex flex-col items-center text-center md:w-auto md:flex-row md:text-left">
        <Avatar alt="Foto de perfil" src="/perfil.png" />
        <div className="mt-4 md:mt-0 md:ml-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Anderson Santana
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Engenheiro de Software
          </p>
        </div>
      </div>
      <nav className="w-full flex justify-center mt-4 md:w-auto md:mt-0 text-xl gap-6"> 
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
