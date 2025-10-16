import { Code, Trophy, Terminal, Cpu, Zap, Target, Users, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform">
              <Terminal className="w-14 h-14 text-black" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-yellow-400 mb-6 tracking-tight">
            About CCC Comp Practice
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Your ultimate training ground for the Canadian Computing Competition
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-2 border-yellow-400/30 p-10 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <Code className="w-7 h-7 text-black" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-4">The Mission</h2>
            </div>
          </div>

          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <span className="text-yellow-400 font-bold">CCC Comp Practice</span> is the premier platform dedicated to helping
              students dominate the <span className="text-yellow-400 font-semibold">Canadian Computing Competition</span>.
              We've built this training hub from the ground up with one goal: to transform passionate coders into competition champions.
            </p>
            <p>
              The CCC isn't just another coding test — it's your gateway to recognition, scholarships, and opportunities at
              top universities. Our platform mirrors the real competition environment, giving you the edge you need to succeed under pressure.
            </p>
            <p>
              Every problem is carefully curated to match CCC difficulty levels and question styles. We don't just throw random
              coding challenges at you — we build your skills systematically, from foundational concepts to advanced algorithms.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-black text-yellow-400 mb-8 text-center">
            <span className="inline-block border-b-4 border-yellow-400 pb-2">Why Train Here?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border-2 border-yellow-400/20 hover:border-yellow-400 transition-all hover:transform hover:scale-105 group">
              <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">CCC-Aligned</h3>
              <p className="text-gray-300">
                Problems structured exactly like real CCC questions with authentic difficulty progression
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-yellow-400/20 hover:border-yellow-400 transition-all hover:transform hover:scale-105 group">
              <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Instant Grading</h3>
              <p className="text-gray-300">
                Submit solutions and get immediate feedback with detailed test case results
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-yellow-400/20 hover:border-yellow-400 transition-all hover:transform hover:scale-105 group">
              <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <Cpu className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Smart Learning</h3>
              <p className="text-gray-300">
                Adaptive problem recommendations based on your performance and weak areas
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-yellow-400/20 hover:border-yellow-400 transition-all hover:transform hover:scale-105 group">
              <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Track Progress</h3>
              <p className="text-gray-300">
                Visualize your improvement with stats, badges, and competition-ready metrics
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-8 text-black">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8" />
              <h3 className="text-2xl font-black">For Beginners</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Just starting your competitive programming journey? Our progressive problem sets build your
              foundation with clear explanations, starting from basic array manipulation to fundamental algorithms.
              Learn the syntax, master the patterns, gain the confidence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 text-white border-2 border-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-black text-yellow-400">For Veterans</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              Already comfortable with code? Push your limits with advanced graph algorithms, dynamic programming
              marathons, and optimization challenges. Our hardest problems will test even seasoned competitors and
              prepare you for top-tier performance.
            </p>
          </div>
        </div>

        <div className="bg-black rounded-3xl border-4 border-yellow-400 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-yellow-400 mb-4">Ready to Compete?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who are crushing their CCC prep with our platform.
              Start solving, start improving, start winning.
            </p>
            <button className="px-10 py-4 bg-yellow-400 text-black rounded-xl font-black text-lg hover:bg-yellow-300 transition-colors shadow-2xl hover:transform hover:scale-105 uppercase tracking-wider">
              Launch Training Hub
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
            <div className="text-5xl font-black text-yellow-400 mb-2">100+</div>
            <div className="text-gray-400 uppercase tracking-wide text-sm">CCC-Style Problems</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
            <div className="text-5xl font-black text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400 uppercase tracking-wide text-sm">Training Access</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-yellow-400/20">
            <div className="text-5xl font-black text-yellow-400 mb-2">∞</div>
            <div className="text-gray-400 uppercase tracking-wide text-sm">Practice Attempts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
