
import { Card, CardContent } from "@/components/ui/card";
import { CloudUpload, Clipboard, Users, CheckCircle, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Upload Your Data',
    description: 'Upload images, videos, audio, or text files securely to our platform. We support all common file formats.',
    icon: CloudUpload,
    color: 'from-brand-purple-500 to-brand-purple-700'
  },
  {
    number: '02',
    title: 'Create Your Task',
    description: 'Use our no-code interface to define the labeling task. Create classes, attributes, and detailed instructions.',
    icon: Clipboard,
    color: 'from-brand-purple-600 to-brand-purple-800'
  },
  {
    number: '03',
    title: 'Indian Labelers Work',
    description: 'Our verified workforce of Indian labelers begins working on your tasks with precision and care.',
    icon: Users,
    color: 'from-brand-purple-400 to-brand-purple-600'
  },
  {
    number: '04',
    title: 'Quality Assurance',
    description: 'Multiple review layers ensure accuracy. Set quality thresholds and review workflows to meet your standards.',
    icon: CheckCircle,
    color: 'from-brand-purple-500 to-brand-purple-700'
  },
  {
    number: '05',
    title: 'Receive Labeled Data',
    description: 'Download your labeled dataset in various formats, ready to train your AI models with high-quality data.',
    icon: Download,
    color: 'from-brand-purple-400 to-brand-purple-500'
  }
];

const HowItWorks = () => {
  return (
    <div className="bg-brand-dark-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-brand-purple-400 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            How DataLabA1x works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            A simple, streamlined process to get your data labeled quickly and accurately.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 bg-transparent">
              <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
              <CardContent className="pt-6 bg-brand-dark-100 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <step.icon className="h-6 w-6 text-brand-purple-400" />
                  </div>
                  <span className="text-4xl font-bold text-gray-700 opacity-50">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 border border-brand-purple-300/30 rounded-full text-brand-purple-400 bg-brand-purple-500/10">
            <span className="text-sm font-medium">Average turnaround time: 24-48 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
