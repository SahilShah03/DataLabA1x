
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Globe, IndianRupee, Calendar, Gift } from "lucide-react";

const ForWorkers = () => {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Competitive Pay",
      description: "Earn competitive rates for your work, with timely and reliable payments directly to your bank account."
    },
    {
      icon: Calendar,
      title: "Flexible Hours",
      description: "Work whenever and wherever you want. Perfect for students, homemakers, or anyone seeking flexible work."
    },
    {
      icon: Star,
      title: "Skill Development",
      description: "Gain experience working with AI data, learn new skills, and receive feedback to improve your abilities."
    },
    {
      icon: Globe,
      title: "Work in Your Language",
      description: "Label content in Hindi, Tamil, Bengali, and other Indian languages based on your proficiency."
    },
    {
      icon: Gift,
      title: "Bonus Opportunities",
      description: "Earn bonuses for high-quality work, consistency, and completing special projects."
    },
    {
      icon: CheckCircle,
      title: "Simple Onboarding",
      description: "Get started quickly with our simple verification process and intuitive labeling tools."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-brand-blue-800 py-16 sm:py-24">
          <div className="absolute inset-0 pattern-dots opacity-10 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Earn Money Labeling AI Data
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-blue-100">
                Join thousands of Indians earning income by completing simple data labeling tasks from home. No special skills required to get started.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white">
                  Apply as a Labeler
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-brand-blue-600 tracking-wide uppercase">Benefits</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why join DataLabA1x as a labeler?
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Flexible work opportunities for anyone in India looking to earn extra income.
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-brand-blue-50 rounded-full mb-4">
                        <benefit.icon className="h-6 w-6 text-brand-blue-600" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-500">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  How to become a DataLabA1x data labeler
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Join our community of labelers in just a few simple steps. No prior experience required.
                </p>
                
                <div className="mt-8 space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue-500 text-white">
                        1
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Apply online</h3>
                      <p className="mt-1 text-gray-500">
                        Fill out our simple application form with your basic information and language proficiencies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue-500 text-white">
                        2
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Complete verification</h3>
                      <p className="mt-1 text-gray-500">
                        Verify your identity with basic documents and complete a short qualifying task.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue-500 text-white">
                        3
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Start working</h3>
                      <p className="mt-1 text-gray-500">
                        Access available tasks through our platform, complete them at your own pace, and earn money.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button className="bg-brand-blue-600 hover:bg-brand-blue-700">
                    Apply Now
                  </Button>
                </div>
              </div>
              
              <div className="mt-10 lg:mt-0 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Person working on laptop" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForWorkers;
