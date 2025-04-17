import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedGraph from './AnimatedGraph';
import FloatingCard from './FloatingCard';

const Hero = () => {
  return (
    <div className="relative bg-brand-dark overflow-hidden py-16">
      <div className="pattern-dots absolute inset-0 opacity-10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Power</span>
              <span className="block gradient-text mt-1">
                Generative AI
              </span>
              <span className="block mt-1">
                With Your Data
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Make the best models with the best data. Quality data engines leverage your enterprise data, and with DataLabA1x's human-driven labeling, quickly unlock the value of AI.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Button size="lg" className="px-8 py-6 bg-brand-purple-500 hover:bg-brand-purple-600 text-white" asChild>
                  <Link to="/signup">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 border-white/20 text-white hover:bg-white/10" asChild>
                  <Link to="/task-demo">Try Demo</Link>
                </Button>
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm text-gray-400 justify-center lg:justify-start">
                <span className="flex items-center">
                  <svg className="h-4 w-4 text-brand-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  No credit card required
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center">
                  <svg className="h-4 w-4 text-brand-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Get started in minutes
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
              <AnimatedGraph />
              
              <div className="absolute -right-4 -top-4 z-10">
                <FloatingCard className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white">Live Updates</span>
                  </div>
                </FloatingCard>
              </div>
              
              <div className="absolute -left-4 -bottom-4 z-10">
                <FloatingCard className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-brand-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white">Real-time Data</span>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center glassmorphism p-4 rounded-xl">
            <p className="text-3xl font-bold text-brand-purple-400">5000+</p>
            <p className="text-gray-300 text-center">Skilled Indian Labelers</p>
          </div>
          <div className="flex flex-col items-center glassmorphism p-4 rounded-xl">
            <p className="text-3xl font-bold text-brand-purple-400">12</p>
            <p className="text-gray-300 text-center">Indian Languages</p>
          </div>
          <div className="flex flex-col items-center glassmorphism p-4 rounded-xl">
            <p className="text-3xl font-bold text-brand-purple-400">99.8%</p>
            <p className="text-gray-300 text-center">Quality Accuracy</p>
          </div>
          <div className="flex flex-col items-center glassmorphism p-4 rounded-xl">
            <p className="text-3xl font-bold text-brand-purple-400">24hr</p>
            <p className="text-gray-300 text-center">Average Turnaround</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
