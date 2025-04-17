
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ForWorkers from "./pages/ForWorkers";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import WorkerOnboarding from "./pages/WorkerOnboarding";
import TaskDemo from "./pages/TaskDemo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WorkerFAQ from "./pages/WorkerFAQ";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="bg-brand-dark">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/for-workers" element={<ForWorkers />} />
            <Route path="/worker-onboarding" element={<WorkerOnboarding />} />
            <Route path="/worker-faq" element={<WorkerFAQ />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/task-demo" element={<TaskDemo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
