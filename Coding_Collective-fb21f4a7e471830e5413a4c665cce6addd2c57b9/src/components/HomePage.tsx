import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HomePageProps {
  onDivisionSelect: (division: 'junior' | 'senior') => void;
}

export default function HomePage({ onDivisionSelect }: HomePageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const divisions = [
    { id: 'junior', title: 'Junior Division', subtitle: 'Grades 9-10', color: 'from-yellow-400 to-yellow-500', icon: '🌟' },
    { id: 'senior', title: 'Senior Division', subtitle: 'Grades 11-12', color: 'from-amber-500 to-orange-500', icon: '🔥' },
  ];

  const handleMainBubbleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsExpanded(!isExpanded);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="text-center mb-16 max-w-5xl">
        <h2 className="text-6xl md:text-7xl font-black text-yellow-400 mb-6 tracking-tight">
          CCC Training Hub
        </h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p className="font-semibold text-yellow-300">
            Prepare to level up your coding skills and excel at the Canadian Computing Competition (CCC)!
          </p>
          <p>
            This platform is designed to help students train effectively for the CCC by giving them a focused,
            interactive learning experience.
          </p>
          <p>
            Start by exploring the main <span className="text-yellow-400 font-semibold">Training Hub</span> where you'll find multiple problem categories to tackle.
            Each category contains a separate page with coding challenges tailored to sharpen your algorithmic thinking,
            problem-solving skills, and programming efficiency.
          </p>
          <p>
            Whether you're a beginner aiming to strengthen your basics or an advanced coder pushing towards excellence,
            this platform is your personal training ground for success.
          </p>
          <p className="text-yellow-300 font-semibold text-2xl mt-6">
            Let's get started — click "Start Training" below and choose your first challenge.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <button
          onClick={handleMainBubbleClick}
          className={`relative w-80 h-80 bg-gradient-to-br from-yellow-400 to-amber-500
            shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-all duration-500 hover:scale-105
            flex flex-col items-center justify-center gap-3 group ${
              isExpanded ? 'scale-95 opacity-90' : ''
            }`}
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'morphing 8s ease-in-out infinite'
          }}
        >
          <span className="text-black text-3xl font-black uppercase tracking-wider">Start Training</span>
          <ChevronDown
            className={`w-10 h-10 text-black transition-transform duration-500 ${
              isExpanded ? 'rotate-180' : 'group-hover:translate-y-1'
            }`}
          />

          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
            }}
          ></div>
        </button>

        <div
          className={`mt-16 flex gap-8 justify-center transition-all duration-600 ${
            isExpanded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}
        >
          {divisions.map((division, index) => (
            <button
              key={division.id}
              onClick={() => onDivisionSelect(division.id as 'junior' | 'senior')}
              className={`w-64 h-64 bg-gradient-to-br ${division.color}
                shadow-xl shadow-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/50
                transition-all duration-300 hover:scale-110
                flex flex-col items-center justify-center gap-3 group relative overflow-hidden`}
              style={{
                borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%',
                animationDelay: `${index * 150}ms`,
                animation: isExpanded ? 'bubbleIn 0.5s ease-out forwards, cloudFloat 6s ease-in-out infinite' : 'none'
              }}
            >
              <span className="text-5xl mb-2">{division.icon}</span>
              <span className="text-black text-xl font-black z-10 text-center">
                {division.title}
              </span>
              <span className="text-black/70 text-sm font-bold z-10">
                {division.subtitle}
              </span>

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%'
                }}
              ></div>

              <div className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-30 scale-90 group-hover:scale-100 transition-all duration-300"
                style={{
                  borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%'
                }}
              ></div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-32 text-center max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800/50 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-yellow-400 flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">CCC-Focused</h3>
            <p className="text-gray-300">Problems tailored specifically for CCC competition success</p>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-yellow-400 flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Instant Results</h3>
            <p className="text-gray-300">Real-time validation and feedback on your solutions</p>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-yellow-400 flex items-center justify-center">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Level Up</h3>
            <p className="text-gray-300">Progressive difficulty to master every concept</p>
          </div>
        </div>
      </div>
    </div>
  );
}
