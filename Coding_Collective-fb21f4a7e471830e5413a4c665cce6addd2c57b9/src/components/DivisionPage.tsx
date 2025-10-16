import { ArrowLeft, Calendar, Trophy } from 'lucide-react';

interface DivisionPageProps {
  division: 'junior' | 'senior';
  onBack: () => void;
  onYearSelect: (year: string, division: 'junior' | 'senior') => void;
}

export default function DivisionPage({ division, onBack, onYearSelect }: DivisionPageProps) {
  const years = ['2025', '2024', '2023', '2022', '2021', '2020'];

  const divisionInfo = {
    junior: {
      title: 'Junior Division',
      description: 'Perfect for grades 9-10. Build your foundation with problems focusing on basic algorithms, loops, conditionals, and fundamental problem-solving.',
      icon: '🌟',
      color: 'from-yellow-400 to-yellow-500'
    },
    senior: {
      title: 'Senior Division',
      description: 'For grades 11-12 and advanced students. Tackle complex algorithms, advanced data structures, dynamic programming, and graph theory.',
      icon: '🔥',
      color: 'from-amber-500 to-orange-500'
    }
  };

  const info = divisionInfo[division];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Divisions</span>
        </button>

        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className={`w-24 h-24 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform shadow-2xl`}>
              <span className="text-5xl">{info.icon}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-yellow-400 mb-4">
            {info.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {info.description}
          </p>
        </div>

        <div className="bg-gray-800/50 border-2 border-yellow-400/30 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-black text-yellow-400">Select Competition Year</h2>
          </div>
          <p className="text-gray-300 mb-8">
            Choose a year to access that year's CCC problems. Each year contains real competition problems with official test cases.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {years.map((year, index) => (
              <button
                key={year}
                onClick={() => onYearSelect(year, division)}
                className="relative group"
                style={{
                  animation: `bubbleIn 0.5s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                <div className={`bg-gradient-to-br ${info.color} rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-yellow-300/30`}>
                  <div className="flex items-center justify-between mb-4">
                    <Trophy className="w-8 h-8 text-black" />
                    <span className="text-sm font-bold text-black/70 uppercase tracking-wide">
                      {year === '2025' ? 'Latest' : 'Archive'}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-black mb-2">{year}</h3>
                  <p className="text-black/80 font-semibold">
                    CCC {division === 'junior' ? 'J' : 'S'} Problems
                  </p>

                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-400/10 to-amber-500/10 border border-yellow-400/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Tips for Success</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">✓</span>
              <span>Start with recent years first to familiarize yourself with current problem formats</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">✓</span>
              <span>Attempt problems in order of difficulty - they typically progress from easier to harder</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">✓</span>
              <span>Review official solutions after attempting each problem to learn optimal approaches</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">✓</span>
              <span>Time yourself to simulate real competition conditions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
