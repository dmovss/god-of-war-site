import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:p-6">
        <Link to="/" className="text-xl font-bold tracking-wide text-gold">GOD OF WAR</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="#" className="hover:text-gold">Features</Link>
          <Link to="#" className="hover:text-gold">Media</Link>
          <Link to="#" className="hover:text-gold">Characters</Link>
          <button className="bg-gold text-black px-4 py-2 rounded font-semibold">Buy Now</button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(v => !v)} aria-label="menu" className="p-2">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 p-6">
          <Link to="#" className="block py-2 text-lg">Features</Link>
          <Link to="#" className="block py-2 text-lg">Media</Link>
          <Link to="#" className="block py-2 text-lg">Characters</Link>
          <button className="mt-4 w-full bg-gold text-black px-4 py-2 rounded font-semibold">Buy Now</button>
        </div>
      )}
    </header>
  );
}
