export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Nathalabs</h3>
            <p className="text-xs sm:text-sm text-slate-400">AI Sound Experiments</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors">
                  Voice Cloning
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors">
                  Voice Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors">
                  Audio AI
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors break-all">
                  contact@nathalabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-800 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            © 2024 Nathalabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
