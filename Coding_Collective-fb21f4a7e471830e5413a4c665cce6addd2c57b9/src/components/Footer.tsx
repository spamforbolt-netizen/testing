import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-400/20 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © 2025 <span className="text-yellow-400 font-semibold">CCC Comp Practice</span>. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
