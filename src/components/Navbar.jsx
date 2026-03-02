import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">Robin Hood Army</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary'}>Home</NavLink>
            <NavLink to="/drives" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary'}>Drives</NavLink>
            <a href="#about" className="text-gray-700 hover:text-primary">About</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-primary bg-green-50' : 'text-gray-700 hover:text-primary hover:bg-green-50'}`}>Home</NavLink>
            <NavLink to="/drives" onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-primary bg-green-50' : 'text-gray-700 hover:text-primary hover:bg-green-50'}`}>Drives</NavLink>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50">About</a>
          </div>
        </div>
      )}
    </nav>
  );
}