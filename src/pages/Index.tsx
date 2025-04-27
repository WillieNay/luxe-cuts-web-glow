
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import HoursCard from '@/components/HoursCard';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    name: 'Classic Haircut',
    price: '$35',
    description: 'Precision cut with professional styling',
  },
  {
    name: 'Beard Trim',
    price: '$25',
    description: 'Shape and style your beard to perfection',
  },
  {
    name: 'Luxe Package',
    price: '$65',
    description: 'Haircut, beard trim, and hot towel treatment',
  },
];

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fdfcfb] to-[#e2d1c3] pt-16 bg-blend-overlay bg-opacity-90" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container px-4 py-16 text-center backdrop-blur-sm bg-white/30 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in text-gray-800">
            Premium Grooming<br />For The Modern Gentleman
          </h1>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in">
            Experience exceptional service at Los Angeles' finest barbershop
          </p>
          <Button className="bg-gold hover:bg-gold/90 text-white animate-fade-in">
            Book Your Appointment
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-white to-[#fef9d7]">
        <div className="container px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section id="hours" className="py-20 bg-gradient-to-b from-[#e6e9f0] to-[#eef1f5]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <HoursCard />
            
            <div id="location" className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <h3 className="font-playfair text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <MapPin className="h-5 w-5" />
                  Location
                </h3>
                <p className="text-gray-600">
                  2458 Sunset Boulevard<br />
                  Los Angeles, CA 90026<br />
                  (next to Sunset Plaza)
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <h3 className="font-playfair text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <Phone className="h-5 w-5" />
                  Contact
                </h3>
                <p className="text-gray-600">
                  Phone: (323) 555-7890<br />
                  Walk-ins Welcome
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    We accept: Cash, Credit/Debit Cards (Visa, Mastercard, Amex), Apple Pay, Google Pay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container px-4 text-center">
          <p className="font-playfair text-xl mb-4">Luxe Cuts Barbershop</p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Luxe Cuts. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
