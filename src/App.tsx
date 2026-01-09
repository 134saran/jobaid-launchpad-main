import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import JobSeekers from "./pages/JobSeekers";
import PaidJobs from "./pages/PaidJobs";
import TrainingPlacement from "./pages/TrainingPlacement";
import Employers from "./pages/Employers";
import ApplyJob from "./pages/ApplyJob";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import EmployerForm from "./pages/EmployerForm";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:slug" element={<ServiceDetail />} />
    <Route path="/job-seekers" element={<JobSeekers />} />
    <Route path="/job-seekers/paid-jobs" element={<PaidJobs />} />
    <Route path="/job-seekers/training-placement" element={<TrainingPlacement />} />
    <Route path="/employers" element={<Employers />} />
    <Route path="/employer-form" element={<EmployerForm />} />
    <Route path="/apply-job" element={<ApplyJob />} />
    <Route path="/clients" element={<Clients />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blogs" element={<Achievements />} />
    <Route path="/blogs/achievements" element={<Achievements />} />
    <Route path="/blogs/testimonials" element={<Testimonials />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
