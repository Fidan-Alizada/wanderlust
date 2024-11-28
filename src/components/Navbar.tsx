import { ShoppingCart, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8" />
            <span className="font-bold text-xl">Wanderlust</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-purple-200 transition-colors">
              Home
            </Link>
            <Link to="/tours" className="hover:text-purple-200 transition-colors">
              Tours
            </Link>
            <Link to="/about" className="hover:text-purple-200 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-purple-200 transition-colors">
              Contact
            </Link>
            <Link to="/cart" className="relative hover:text-purple-200 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}