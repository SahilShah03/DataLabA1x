
import { BookOpen, Check, Gift, UserPlus, Award, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const WorkerOnboarding = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account with basic details and KYC verification to join as a labeler."
    },
    {
      icon: BookOpen,
      title: "Complete Training",
      description: "Take a short tutorial to learn how to use our labeling tools and understand quality expectations."
    },
    {
      icon: Award,
      title: "Pass Skill Test",
      description: "Complete a simple qualification test to start receiving labeling tasks."
    },
    {
      icon: Check,
      title: "Start Working",
      description: "Access available tasks, label data according to instructions, and submit your work."
    },
    {
      icon: CreditCard,
      title: "Get Paid",
      description: "Receive payments directly to your bank account or UPI weekly for all completed tasks."
    },
    {
      icon: Gift,
      title: "Earn Bonuses",
      description: "Unlock bonuses, higher pay rates, and specialized tasks as you build your reputation."
    }
  ];

  const benefits = [
    {
      title: "Flexible Hours",
      description: "Work whenever you want, from anywhere. Perfect for students, homemakers, and part-time workers."
    },
    {
      title: "Weekly Payments",
      description: "Get paid directly to your bank account or UPI every week for completed tasks."
    },
    {
      title: "Skill Development",
      description: "Learn about AI, develop new skills, and get certified in specialized data labeling techniques."
    },
    {
      title: "Regional Language Support",
      description: "Work in your preferred language with our multilingual interface supporting 12 Indian languages."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  Earn Money by <span className="text-brand-orange-500">Labeling Data</span>
                </h1>
                <p className="mt-3 text-lg text-gray-600 sm:mt-5">
                  Join thousands of Indians earning money by labeling data for AI companies worldwide. 
                  No special skills required - just a smartphone or computer and internet connection.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <Button size="lg" className="bg-brand-orange-500 hover:bg-brand-orange-600" asChild>
                    <Link to="/signup">Join as a Labeler</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/worker-faq">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="People working on computers" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-brand-orange-600 font-semibold tracking-wide uppercase">Getting Started</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                How to Become a Labeler
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Follow these simple steps to start earning money by labeling data
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-orange-100 p-3 rounded-full">
                      <step.icon className="h-6 w-6 text-brand-orange-500" />
                    </div>
                    <span className="flex items-center justify-center w-8 h-8 bg-brand-orange-500 text-white rounded-full text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-brand-blue-600 font-semibold tracking-wide uppercase">Benefits</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Join DataLabA1x
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-brand-blue-500 to-brand-orange-500 rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to start earning?</h3>
                <p className="mb-8 max-w-2xl mx-auto">
                  Join thousands of Indians already earning with DataLabA1x. 
                  No experience required, start earning today.
                </p>
                <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-gray-100" asChild>
                  <Link to="/signup">Sign Up Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs Teaser */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions about working as a labeler? Check out our FAQ section
            </p>
            <Button variant="outline" className="mt-8" asChild>
              <Link to="/worker-faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkerOnboarding;
