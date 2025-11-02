import VoiceAgent from './VoiceAgent';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
              AI Sound
              <br />
              Experiments
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Pioneering the future of voice AI technology through experimental sound design and intelligent audio processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <button className="bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                Talk to Our AI
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="bg-white text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-slate-50 transition-all border border-slate-300 hover:border-slate-400 text-sm sm:text-base">
                View Products
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end pt-8 lg:pt-0 order-first lg:order-last">
            <VoiceAgent />
          </div>
        </div>
      </div>
    </section>
  );
}
