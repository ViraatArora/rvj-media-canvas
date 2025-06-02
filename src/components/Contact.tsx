
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let us Collaborate
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              At <span className="text-blue-400 font-semibold">RVJ Media Tech</span>, we help content creators, broadcasters, 
              and platforms launch and scale <span className="text-blue-400 font-semibold">FAST channels</span> across 
              Connected TV, OTT, and digital devices. Whether you're building from scratch or expanding your digital footprint, 
              we bring together technology, research, programming, and monetization expertise to help you win.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 lg:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Contact
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Phone</p>
                    <p className="text-white text-lg font-semibold">+919871116862</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Email</p>
                    <p className="text-white text-lg font-semibold">jassi@rvjmediatech.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Headquarters</p>
                    <p className="text-white text-lg font-semibold">Gurgaon, NCR</p>
                    <p className="text-gray-400 text-sm">Mumbai • Bangalore • Kolkata • Chennai</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-700 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-4">Ready to Start?</h4>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can help you launch and scale your FAST channels.
                </p>
                <a 
                  href="mailto:jassi@rvjmediatech.com?subject=Schedule%20a%20Consultation&body=Hi%20Jassi,%0D%0A%0D%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20FAST%20channel%20development.%0D%0A%0D%0AThank%20you!"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
