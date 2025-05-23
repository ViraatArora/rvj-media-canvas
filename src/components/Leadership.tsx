
export const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Leadership
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="lg:flex">
              <div className="lg:w-1/3 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                    <img 
                      src="/lovable-uploads/95297af2-a4c0-430f-b15d-a74b4c508948.png"
                      alt="Jaswinder Gandhi Arora"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Jaswinder Gandhi Arora
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg">
                    Founder & CEO
                  </p>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    A seasoned media-tech professional, Jaswinder has led strategic initiatives across 
                    <span className="text-blue-400 font-semibold"> digital video, marketing, and content distribution</span>. 
                    She has held key leadership roles that shaped digital growth across emerging platforms in India.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    With a passion for <span className="text-blue-400 font-semibold">storytelling, partnerships, and scalable innovation</span>, 
                    she brings a strong mix of domain knowledge, executional focus, and ecosystem understanding to the 
                    <span className="text-blue-400 font-semibold"> FAST TV landscape</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
