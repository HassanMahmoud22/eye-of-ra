import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Consulting from "@/pages/Consulting";
import Sourcing from "@/pages/Sourcing";
import EgyptAdvantage from "@/pages/EgyptAdvantage";
import Founder from "@/pages/Founder";
import Contact from "@/pages/Contact";
import StartProject from "@/pages/StartProject";

const queryClient = new QueryClient();

function ScrollToTop() {
  // A small utility to ensure pages scroll to top on navigation
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/consulting" component={Consulting} />
          <Route path="/services/sourcing" component={Sourcing} />
          <Route path="/egypt-advantage" component={EgyptAdvantage} />
          <Route path="/founder" component={Founder} />
          <Route path="/contact" component={Contact} />
          <Route path="/start-project" component={StartProject} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
