
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-playfair font-bold">
            Luxe Cuts
          </a>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#hours" className="hover:text-gold transition-colors">Hours</a>
            <a href="#location" className="hover:text-gold transition-colors">Location</a>
            <Button className="bg-black text-white hover:bg-gold">
              Book Now
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="hover:text-gold transition-colors">Services</a>
              <a href="#hours" className="hover:text-gold transition-colors">Hours</a>
              <a href="#location" className="hover:text-gold transition-colors">Location</a>
              <Button className="bg-black text-white hover:bg-gold w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
