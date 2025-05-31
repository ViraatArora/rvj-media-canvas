
import { Play, Tv, Smartphone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-blue-400">FAST</span> Channels
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-gray-300">
              Content Distribution & Monetization
            </h2>
            <h3 className="text-2xl lg:text-3xl font-medium mb-8 text-blue-300">
              Connected Devices
            </h3>
            <p className="text-xl lg:text-2xl mb-12 text-gray-400 font-light italic">
              Transforming Content Into Connected Revenue Streams
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jassi@rvjmediatech.com&su=Schedule%20a%20Consultation&body=Hi%20Jassi,%0D%0A%0D%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20FAST%20channel%20development.%0D%0A%0D%0AThank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <img 
                src="/lovable-uploads/d6fbf287-3bd3-4639-8643-28e5e96864b2.png"
                alt="Connected TV Technology"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <Tv className="w-8 h-8 text-purple-600" />
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-full p-4 shadow-lg">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
