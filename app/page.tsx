import Image from "next/image";
import Linktree from "./linktree/page";

export default function Home() {
  return (
  

    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <Linktree/>
      <div className="w-full max-w-md mx-auto p-8">
        <div className="text-center">
          <Image
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="./perfil.png"
            alt="Foto de perfil"
            width={100}
            height={100}
            priority
          />

          <h1 className="text-2xl font-bold text-white">Anderson Santana</h1>
          <p className="text-gray-400 mb-8">Engenheiro de Software</p>
        </div>

        <div className="space-y-4">
          <a
            href="https://github.com/andersoninthecode"
            target="_blank"
            className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                clip-rule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andersoninthecode/"
            target="_blank"
            className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/andersoninthecode/"
            target="_blank"
            className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
            </svg>
            Instagram
          </a>
          <a
            href="https://www.facebook.com/oandersonsant/"
            target="_blank"
            className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
            </svg>
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
