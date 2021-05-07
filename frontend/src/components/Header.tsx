import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto h-full  flex items-center justify-between">
        <h1 className="font-mono text-gray-600 font-black">Rickanmorti</h1>
        <ul className="flex items-center justify-between text-gray-600 font-mono">
          <li>
            <button className="m-5">Favoritos</button>
          </li>
          <li>
            <button className="m-5 border-2 rounded p-2 font-bold">
              Iniciar Sesion
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
