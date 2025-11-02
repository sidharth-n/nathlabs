import { Mic, Volume2 } from 'lucide-react';
import { useState } from 'react';

type AgentState = 'idle' | 'listening' | 'thinking' | 'speaking';

export default function VoiceAgent() {
  const [state, setState] = useState<AgentState>('idle');

  const handleClick = () => {
    if (state === 'idle') {
      setState('listening');
      setTimeout(() => setState('thinking'), 2000);
      setTimeout(() => setState('speaking'), 3500);
      setTimeout(() => setState('idle'), 6000);
    }
  };

  const getStatusText = () => {
    switch (state) {
      case 'listening':
        return 'Listening...';
      case 'thinking':
        return 'Thinking...';
      case 'speaking':
        return 'Speaking...';
      default:
        return 'Click to talk';
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        className="relative group"
        disabled={state !== 'idle'}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl flex flex-col items-center justify-center transition-all duration-300 hover:shadow-3xl hover:scale-105 border border-slate-200/50">
          {state === 'listening' && (
            <>
              <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>
              <div className="absolute inset-4 rounded-full bg-blue-400/10 animate-ping animation-delay-150"></div>
              <div className="absolute inset-8 rounded-full bg-blue-400/5 animate-ping animation-delay-300"></div>
            </>
          )}

          {state === 'speaking' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-16 bg-blue-500 rounded-full animate-pulse"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: `${Math.random() * 40 + 20}px`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          <div className="relative z-10 flex flex-col items-center">
            {state === 'thinking' ? (
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-slate-600 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  ></div>
                ))}
              </div>
            ) : (
              <div className={`p-6 rounded-full transition-all ${
                state === 'listening' ? 'bg-blue-500 scale-110' :
                state === 'speaking' ? 'bg-green-500 scale-110' :
                'bg-slate-100 group-hover:bg-slate-200'
              }`}>
                {state === 'speaking' ? (
                  <Volume2 className="w-12 h-12 text-white" />
                ) : (
                  <Mic className={`w-12 h-12 ${
                    state === 'listening' ? 'text-white' : 'text-slate-600'
                  }`} />
                )}
              </div>
            )}

            <p className={`mt-6 text-lg font-medium transition-colors ${
              state === 'idle' ? 'text-slate-600' : 'text-blue-600'
            }`}>
              {getStatusText()}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
