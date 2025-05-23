
import { Zap, Target, Database, Code, Users, TrendingUp, Tv } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "FAST Channel Creation & Distribution",
      description: "Launch, scale, and operate FAST channels optimized for ad-based monetization"
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Connected TV Strategy",
      description: "Drive visibility and viewership across major CTV and OTT platforms"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AdTech & Data Integration",
      description: "Audience targeting, performance analytics, and monetization strategy"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Smart Content Programming",
      description: "Original + acquired content curated to maximize engagement"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strategic Ecosystem Synergy",
      description: "Aligning platforms, creators, and advertisers for win-win outcomes"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-blue-400 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
