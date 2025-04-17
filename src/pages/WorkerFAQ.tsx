
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const WorkerFAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const generalFAQs = [
    {
      question: "What is DataLabA1x?",
      answer: "DataLabA1x is India's premier AI data labeling platform that connects companies building AI models with skilled Indian workers who can label and annotate their data."
    },
    {
      question: "How do I earn money on DataLabA1x?",
      answer: "You earn money by completing data labeling tasks such as image annotation, text categorization, audio transcription, and more. You're paid for each task you complete accurately."
    },
    {
      question: "How much can I earn as a labeler?",
      answer: "Earnings vary based on task complexity and your skill level. Simple tasks may pay ₹2-5, while complex tasks can pay ₹50-200. Many of our full-time labelers earn ₹15,000-30,000 per month."
    },
    {
      question: "Do I need special qualifications to become a labeler?",
      answer: "No special qualifications are required to start. Basic computer skills and internet access are sufficient. However, for specialized tasks (like medical or legal annotation), domain knowledge may be preferred."
    },
    {
      question: "Can I work part-time or with flexible hours?",
      answer: "Yes, you can work whenever is convenient for you. There are no minimum hours requirements, making it perfect for students, homemakers, or anyone looking for flexible work."
    }
  ];
  
  const paymentFAQs = [
    {
      question: "How and when do I get paid?",
      answer: "Payments are processed weekly. You can receive payments directly to your bank account through NEFT/IMPS or to your UPI ID."
    },
    {
      question: "Is there a minimum payout threshold?",
      answer: "Yes, the minimum payout threshold is ₹500. Once your earnings exceed this amount, they'll be included in the next payment cycle."
    },
    {
      question: "Do I need to pay taxes on my earnings?",
      answer: "Yes, earnings from DataLabA1x are considered income and may be subject to income tax based on Indian tax laws. We recommend consulting with a tax professional regarding your specific situation."
    },
    {
      question: "What if there's an issue with my payment?",
      answer: "If you experience any payment issues, please contact our support team immediately. We aim to resolve all payment concerns within 48 hours."
    },
    {
      question: "Can I see my payment history?",
      answer: "Yes, you can view your complete payment history in your dashboard, including pending and processed payments, tasks completed, and earnings breakdown."
    }
  ];
  
  const taskFAQs = [
    {
      question: "What types of tasks will I be doing?",
      answer: "Tasks include image annotation (drawing bounding boxes, segmentation), text categorization, sentiment analysis, audio transcription, video labeling, and more. The available tasks depend on current client projects."
    },
    {
      question: "How difficult are the tasks?",
      answer: "Task difficulty varies. New labelers typically start with simpler tasks and progress to more complex ones as they gain experience and demonstrate quality work."
    },
    {
      question: "What if I don't understand a task?",
      answer: "Each task comes with detailed instructions and examples. If you're still unsure, you can skip the task or contact support for clarification."
    },
    {
      question: "How is my work quality evaluated?",
      answer: "Your work is evaluated through a combination of automated checks, peer review, and quality assurance by our team. Maintaining high accuracy is important for accessing higher-paying tasks."
    },
    {
      question: "Can I work in my regional language?",
      answer: "Yes, DataLabA1x supports multiple Indian languages. You can select tasks in languages you're fluent in, and our interface can be customized to display in your preferred language."
    }
  ];
  
  const technicalFAQs = [
    {
      question: "What equipment do I need?",
      answer: "For most tasks, you need a computer or smartphone with a stable internet connection. Some specialized tasks may require a desktop/laptop with a larger screen for detailed work."
    },
    {
      question: "Does DataLabA1x work on mobile phones?",
      answer: "Yes, DataLabA1x is mobile-friendly for many tasks. However, for detailed annotation work, we recommend using a larger screen for better accuracy and efficiency."
    },
    {
      question: "Are there any software requirements?",
      answer: "No special software is needed. DataLabA1x works in standard web browsers like Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience."
    },
    {
      question: "What if I have technical issues while working?",
      answer: "Our support team is available to help with technical issues. You can reach out through the help section in your dashboard, and we aim to respond within a few hours."
    },
    {
      question: "Is my data secure on the platform?",
      answer: "Yes, we take data security seriously. All data is encrypted, and we follow strict protocols to protect both worker and client information."
    }
  ];
  
  const filteredFAQs = (faqs: typeof generalFAQs) => {
    if (!searchQuery) return faqs;
    return faqs.filter(
      faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
             faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Labeler FAQ</h1>
            <p className="mt-2 text-lg text-gray-600">
              Find answers to frequently asked questions about working as a labeler
            </p>
          </div>
          
          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs(generalFAQs).map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                {filteredFAQs(generalFAQs).length === 0 && (
                  <p className="text-center py-6 text-gray-500">No matching FAQs found. Try adjusting your search.</p>
                )}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="payment">
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs(paymentFAQs).map((faq, index) => (
                  <AccordionItem key={index} value={`payment-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                {filteredFAQs(paymentFAQs).length === 0 && (
                  <p className="text-center py-6 text-gray-500">No matching FAQs found. Try adjusting your search.</p>
                )}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="tasks">
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs(taskFAQs).map((faq, index) => (
                  <AccordionItem key={index} value={`tasks-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                {filteredFAQs(taskFAQs).length === 0 && (
                  <p className="text-center py-6 text-gray-500">No matching FAQs found. Try adjusting your search.</p>
                )}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="technical">
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs(technicalFAQs).map((faq, index) => (
                  <AccordionItem key={index} value={`technical-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                {filteredFAQs(technicalFAQs).length === 0 && (
                  <p className="text-center py-6 text-gray-500">No matching FAQs found. Try adjusting your search.</p>
                )}
              </Accordion>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Reach out to our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/worker-onboarding">Join as a Labeler</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkerFAQ;
