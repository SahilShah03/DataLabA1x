
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Building, User } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCompanySignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to DataLabA1x! Your company account has been created.",
      });
      navigate('/dashboard');
    }, 1500);
  };

  const handleWorkerSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to DataLabA1x! Your worker account has been created.",
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
              <CardDescription className="text-center">
                Choose your account type to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="company" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="company" className="flex items-center gap-2">
                    <Building size={18} />
                    <span>Company</span>
                  </TabsTrigger>
                  <TabsTrigger value="worker" className="flex items-center gap-2">
                    <User size={18} />
                    <span>Worker</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="company">
                  <form onSubmit={handleCompanySignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input 
                        id="company-name" 
                        placeholder="Your company name" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-email">Work Email</Label>
                      <Input 
                        id="company-email" 
                        type="email" 
                        placeholder="name@company.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="company-password" 
                          type={showPassword ? "text" : "password"} 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button 
                          type="button"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Sign Up as Company"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="worker">
                  <form onSubmit={handleWorkerSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="worker-name">Full Name</Label>
                      <Input 
                        id="worker-name" 
                        placeholder="Your full name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="worker-email">Email</Label>
                      <Input 
                        id="worker-email" 
                        type="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="worker-password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="worker-password" 
                          type={showPassword ? "text" : "password"} 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button 
                          type="button"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Sign Up as Worker"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                  Facebook
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-2">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-brand-blue-600 hover:underline font-medium">
                  Log in
                </Link>
              </p>
              <p className="text-xs text-gray-500">
                By signing up, you agree to our{' '}
                <Link to="/terms" className="text-brand-blue-600 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-brand-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
