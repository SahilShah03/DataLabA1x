
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-2 text-lg text-gray-600">
              Have questions or want to learn more about DataLabA1x? Get in touch with our team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue-100 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email Us</h4>
                        <p className="text-gray-600 mt-1">Our friendly team is here to help.</p>
                        <a href="mailto:hello@DataLabA1x.com" className="text-brand-blue-600 hover:underline mt-1 block">
                          hello@DataLabA1x.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue-100 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Call Us</h4>
                        <p className="text-gray-600 mt-1">Mon-Fri from 9am to 6pm.</p>
                        <a href="tel:+91-9876543210" className="text-brand-blue-600 hover:underline mt-1 block">
                          +91-987-654-3210
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue-100 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Office</h4>
                        <p className="text-gray-600 mt-1">Come visit our office.</p>
                        <address className="not-italic text-brand-blue-600 mt-1">
                          123 Tech Park, Koramangala<br />
                          Bengaluru, Karnataka 560034
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue-100 p-3 rounded-full">
                        <MessageSquare className="h-5 w-5 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Live Chat</h4>
                        <p className="text-gray-600 mt-1">Chat with our support team.</p>
                        <button className="text-brand-blue-600 hover:underline mt-1 block">
                          Start a conversation
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your full name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={subject} onValueChange={setSubject} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="labelers">Become a Labeler</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you?" 
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-t-2 border-white rounded-full" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-lg font-medium mb-2">How does DataLabA1x ensure data quality?</h3>
                  <p className="text-gray-600">We utilize a multi-layer quality assurance process, combining automated AI checks and human review to ensure accuracy.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-medium mb-2">How long does the labeling process take?</h3>
                  <p className="text-gray-600">Average turnaround time is 24-48 hours, depending on the size and complexity of your dataset.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-medium mb-2">Can I customize the labeling instructions?</h3>
                  <p className="text-gray-600">Yes, our platform allows for detailed custom instructions and examples to guide labelers.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-medium mb-2">How do I join as a labeler?</h3>
                  <p className="text-gray-600">Sign up on our platform, complete the training, pass a qualification test, and start working on available tasks.</p>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <a href="/faq">View All FAQs</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
