import { ArrowLeft, Code, Clock, Star } from 'lucide-react';

interface YearPageProps {
  year: string;
  division: 'junior' | 'senior';
  onBack: () => void;
  onProblemSelect: (problemId: string) => void;
}

export default function YearPage({ year, division, onBack, onProblemSelect }: YearPageProps) {
  const problems = [
    { id: 'j1', number: 1, title: 'Problem J1/S1', difficulty: 'Easy', points: 5 },
    { id: 'j2', number: 2, title: 'Problem J2/S2', difficulty: 'Easy', points: 5 },
    { id: 'j3', number: 3, title: 'Problem J3/S3', difficulty: 'Medium', points: 10 },
    { id: 'j4', number: 4, title: 'Problem J4/S4', difficulty: 'Medium', points: 10 },
    { id: 'j5', number: 5, title: 'Problem J5/S5', difficulty: 'Hard', points: 15 },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-400';
      case 'Hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const divisionLabel = division === 'junior' ? 'Junior' : 'Senior';
  const divisionCode = division === 'junior' ? 'J' : 'S';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Years</span>
        </button>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400/40 rounded-3xl p-10 mb-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <Code className="w-12 h-12 text-yellow-400" />
            <div>
              <h1 className="text-5xl font-black text-yellow-400">
                {year} CCC {divisionLabel}
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                Canadian Computing Competition - {divisionLabel} Division Problems
              </p>
            </div>
          </div>

          <div className="flex gap-6 mt-6 flex-wrap">
            <div className="flex items-center gap-2 bg-yellow-400/10 px-4 py-2 rounded-lg border border-yellow-400/30">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">3 hours total time</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-400/10 px-4 py-2 rounded-lg border border-yellow-400/30">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">5 problems</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {problems.map((problem, index) => (
            <button
              key={problem.id}
              onClick={() => onProblemSelect(`${year}-${divisionCode}${problem.number}`)}
              className="bg-gray-800 border-2 border-yellow-400/30 hover:border-yellow-400 rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-400/20 text-left group"
              style={{
                animation: `bubbleIn 0.5s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <span className="text-2xl font-black text-black">{divisionCode}{problem.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-1">
                      {year} CCC {divisionCode}{problem.number}
                    </h3>
                    <p className="text-gray-400">Click to view problem details and start solving</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`${getDifficultyColor(problem.difficulty)} px-4 py-2 rounded-lg`}>
                    <span className="text-sm font-bold text-black">{problem.difficulty}</span>
                  </div>
                  <div className="bg-yellow-400/20 border border-yellow-400/50 px-4 py-2 rounded-lg">
                    <span className="text-yellow-400 font-bold">{problem.points} pts</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 text-sm text-gray-400">
                <span>📊 Test Cases: 10</span>
                <span>⏱️ Time Limit: 2s</span>
                <span>💾 Memory: 256MB</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 bg-gray-800/50 border border-yellow-400/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-3">About {year} CCC {divisionLabel}</h3>
          <p className="text-gray-300 leading-relaxed">
            The {year} Canadian Computing Competition {divisionLabel} Division featured {problems.length} challenging problems
            designed to test algorithmic thinking, problem-solving skills, and coding proficiency. Each problem has been
            carefully selected to represent real competition conditions. Work through them at your own pace, or challenge
            yourself with the official 3-hour time limit.
          </p>
        </div>
      </div>
    </div>
  );
}
