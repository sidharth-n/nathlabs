import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-baseline gap-1">
            <img 
              src="/nathaLogo.png" 
              alt="N Logo"   
              className="h-8 sm:h-10 w-auto"
            />
            <span className="text-xl sm:text-2xl ml-[-3px] relative top-[-2px] font-bold text-slate-900">athalabs</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Products
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              About
            </a>
            <button className="bg-blue-500 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:scale-105">
              Request Demo
            </button>
          </nav> 

          <button 
            className="md:hidden text-slate-600 hover:text-slate-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#products" 
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-all w-full">
                Request Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
