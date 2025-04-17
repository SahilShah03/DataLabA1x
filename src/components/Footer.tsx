
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold gradient-text mb-4">DataLabA1x</div>
              <p className="text-gray-500 mb-4 max-w-md">
                India's premier AI data labeling platform connecting global companies with skilled Indian labelers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sahil-shah-50344224a/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/how-it-works" className="text-base text-gray-500 hover:text-gray-900">How It Works</Link></li>
                <li><Link to="/features" className="text-base text-gray-500 hover:text-gray-900">Features</Link></li>
                <li><Link to="/pricing" className="text-base text-gray-500 hover:text-gray-900">Pricing</Link></li>
                <li><Link to="/enterprise" className="text-base text-gray-500 hover:text-gray-900">Enterprise</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/documentation" className="text-base text-gray-500 hover:text-gray-900">Documentation</Link></li>
                <li><Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">Blog</Link></li>
                <li><Link to="/case-studies" className="text-base text-gray-500 hover:text-gray-900">Case Studies</Link></li>
                <li><Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About Us</Link></li>
                <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
                <li><Link to="/careers" className="text-base text-gray-500 hover:text-gray-900">Careers</Link></li>
                <li><Link to="/for-workers" className="text-base text-gray-500 hover:text-gray-900">For Labelers</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-200 md:flex md:items-center md:justify-between">
          <div className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} DataLabA1x. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900 mr-6">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
