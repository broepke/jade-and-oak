import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-serif font-bold text-green-800">
              Jade & Oak
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="font-medium hover:text-green-800">Home</a>
            <a href="/events" className="font-medium hover:text-green-800">Events</a>
            <a href="/shop" className="font-medium hover:text-green-800">Shop</a>
            <a href="/blog" className="font-medium hover:text-green-800">Blog</a>
            <a href="/about" className="font-medium hover:text-green-800">About</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-green-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="font-medium hover:text-green-800">Home</a>
              <a href="/events" className="font-medium hover:text-green-800">Events</a>
              <a href="/shop" className="font-medium hover:text-green-800">Shop</a>
              <a href="/blog" className="font-medium hover:text-green-800">Blog</a>
              <a href="/about" className="font-medium hover:text-green-800">About</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;