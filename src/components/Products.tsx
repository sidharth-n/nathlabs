import { Phone, Shield, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Private & Uncensored',
    description: 'Complete privacy with no content restrictions or monitoring',
  },
  {
    icon: Phone,
    title: 'Natural Voice Agents',
    description: 'Human-like conversations powered by advanced AI',
  },
  {
    icon: Zap,
    title: 'Real-time Response',
    description: 'Instant, intelligent responses with zero latency',
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          {/* Left side - Product info */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full">
              <span className="text-blue-400 font-medium text-xs sm:text-sm">Our Product</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              ucalls.ai
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Private uncensored voice agents that deliver authentic, unrestricted conversations with cutting-edge AI technology.
            </p>

            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3 sm:gap-4 items-start group text-left">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <button className="bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                Try ucalls.ai
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-slate-700 transition-all border border-slate-600 hover:border-slate-500 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="text-center p-6 sm:p-8">
                  <div className="inline-flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4 sm:mb-6 animate-pulse">
                    <Phone className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">ucalls.ai</h3>
                  <p className="text-sm sm:text-base text-slate-300">Private Voice Agents</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
