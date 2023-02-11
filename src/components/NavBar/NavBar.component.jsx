import React from 'react' 

export default function NavBar() {
  return (
    <nav className="w-full bg-green-900 shadow mb-2">
      <div className="justify-between md:items-center md:flex px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block text-green">
          <a href="/" className="no-underline">
            <h2 className="text-2xl font-bold text-green-400 object-left-top">
              agino
            </h2>
          </a>
        </div>
        <div className="hidden space-x-4 md:inline-block">

        </div>
      </div>
    </nav>
  );
}