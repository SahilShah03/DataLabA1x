
import { Check, Upload, Zap, Users, BarChart, Globe } from 'lucide-react';

const features = [
  {
    name: 'No-Code Task Creation',
    description: 'Create complex labeling tasks without writing a single line of code. Our intuitive interface makes it easy.',
    icon: Zap
  },
  {
    name: 'Multiple Data Types',
    description: 'Upload and label images, video, audio, or text data with specialized tools for each type.',
    icon: Upload
  },
  {
    name: 'Indian Workforce',
    description: 'Access a dedicated pool of skilled Indian labelers across various languages and specializations.',
    icon: Users
  },
  {
    name: 'Quality Assurance',
    description: 'Built-in QA workflows with consensus mechanisms and expert review to ensure high-quality results.',
    icon: Check
  },
  {
    name: 'Performance Analytics',
    description: 'Track project progress, labeler performance, and quality metrics through comprehensive dashboards.',
    icon: BarChart
  },
  {
    name: 'Multilingual Support',
    description: 'Support for all major Indian languages and dialects for text annotation and audio transcription.',
    icon: Globe
  }
];

const Features = () => {
  return (
    <div className="bg-brand-dark py-24 relative">
      <div className="pattern-dots absolute inset-0 opacity-10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-purple-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need for data labeling
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our platform connects AI companies with India's talent pool through an easy-to-use, yet powerful interface.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root feature-card h-full transform hover:-translate-y-2 transition-all duration-300">
                  <div className="-mt-6 p-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-brand-purple-500 to-brand-purple-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
