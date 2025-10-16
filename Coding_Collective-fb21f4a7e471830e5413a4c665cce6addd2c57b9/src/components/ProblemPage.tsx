import { ArrowLeft, Clock, Target, Trophy } from 'lucide-react';

interface ProblemPageProps {
  problemId: string;
  onBack: () => void;
}

export default function ProblemPage({ problemId, onBack }: ProblemPageProps) {
  const problem = {
    title: problemId,
    difficulty: 'Medium'
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500 text-black';
      case 'Medium': return 'bg-yellow-400 text-black';
      case 'Hard': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Problems</span>
        </button>

        <div className="bg-gray-800 border-2 border-yellow-400/30 rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-yellow-400">{problem.title}</h1>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyColor(problem.difficulty)}`}>
              {problem.difficulty}
            </span>
          </div>

          <div className="flex gap-6 mb-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Time Limit: 2s</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Memory: 256MB</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Points: 100</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Problem Description</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-yellow-400/20">
              <p className="text-gray-300 mb-4">
                This is a placeholder for the problem statement. The actual problem description will be added here.
              </p>
              <p className="text-gray-300">
                Include all relevant details such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Problem context and scenario</li>
                <li>Input format and constraints</li>
                <li>Output format requirements</li>
                <li>Example test cases with explanations</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Sample Input</h3>
            <div className="bg-black rounded-lg p-4 mb-6 border border-yellow-400/20">
              <code className="text-yellow-400 font-mono text-sm">
                Sample input will be displayed here
              </code>
            </div>

            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Sample Output</h3>
            <div className="bg-black rounded-lg p-4 mb-6 border border-yellow-400/20">
              <code className="text-yellow-400 font-mono text-sm">
                Sample output will be displayed here
              </code>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-yellow-400/30 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Submit Your Solution</h2>
          <textarea
            className="w-full h-64 p-4 font-mono text-sm bg-black text-yellow-400 rounded-lg border-2 border-yellow-400/30 focus:border-yellow-400 focus:outline-none resize-none"
            placeholder="// Write your solution here..."
          ></textarea>

          <div className="flex gap-4 mt-4">
            <button className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl">
              Submit Solution
            </button>
            <button className="px-6 py-3 bg-gray-700 text-gray-200 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              Run Tests
            </button>
            <button className="px-6 py-3 bg-gray-700 text-gray-200 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              Reset Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
