
export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 p-8 lg:p-12 rounded-2xl shadow-xl">
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              <span className="font-semibold text-white">RVJ Media Tech LLP</span> is a media-tech company specializing in 
              <span className="text-blue-400 font-semibold"> FAST channel development</span> and digital content distribution across 
              India and South Asia. Headquartered in <span className="text-blue-400">Gurgaon (National Capital Region)</span>, 
              we have representative presence in Mumbai, Bangalore, Kolkata, and Chennai.
            </p>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Our focus is on leveraging content, platforms, and partnerships to drive 
              <span className="text-blue-400 font-semibold"> audience engagement, advertising value, and innovation</span> across 
              the connected media ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
