
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GenerativeAI = () => {
  return (
    <div className="bg-brand-dark-50 py-24 relative">
      <div className="pattern-dots absolute inset-0 opacity-10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-brand-purple-400 font-semibold tracking-wide uppercase">AI for the Enterprise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Generative AI Architecture
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-300 lg:mx-auto">
            Whether you're building your own models or applying foundation models to your business, data remains the biggest bottleneck in AI.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" className="bg-brand-purple-500 hover:bg-brand-purple-600" asChild>
              <Link to="/services">
                Build with DataLabA1x
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="hero-card p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4 text-brand-purple-400">Transform 2023</div>
            <h3 className="text-xl font-bold text-white mb-2">The Future of LLMs, Generative AI & Foundation Models</h3>
            <p className="text-gray-300 mb-4">By Greg Brockman</p>
            <div className="flex justify-end">
              <Button size="sm" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
          
          <div className="hero-card p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4 text-brand-purple-400">Transform 2023</div>
            <h3 className="text-xl font-bold text-white mb-2">Navigating an AI-Enabled Future</h3>
            <p className="text-gray-300 mb-4">By Eric Schmidt</p>
            <div className="flex justify-end">
              <Button size="sm" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
          
          <div className="hero-card p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4 text-brand-purple-400">Transform 2023</div>
            <h3 className="text-xl font-bold text-white mb-2">Understanding & Harnessing With The Future of AI</h3>
            <p className="text-gray-300 mb-4">By Fei-Fei Li</p>
            <div className="flex justify-end">
              <Button size="sm" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAI;
