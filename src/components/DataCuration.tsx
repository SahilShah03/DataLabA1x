
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataCuration = () => {
  return (
    <div className="bg-brand-dark py-24 relative">
      <div className="pattern-dots absolute inset-0 opacity-10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="hero-card p-6 lg:p-8">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Data Curation Interface" 
                className="rounded-lg w-full shadow-2xl shadow-brand-purple-500/20"
              />
            </div>
          </div>

          <div className="lg:col-span-5 mb-12 lg:mb-0 order-1 lg:order-2">
            <h2 className="text-base text-brand-purple-400 font-semibold tracking-wide uppercase">Data Curation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Unlock the most valuable data by intelligently managing your dataset
            </p>
            <p className="mt-6 text-lg text-gray-300">
              Scale's suite of dataset management, filtering, model evaluation, and cluster comparison tools enable you to "select the right needles from the right haystacks" by focusing the cost of your labeling budget on the most valuable training data and ground truth labels.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button className="bg-brand-purple-500 hover:bg-brand-purple-600" asChild>
                <Link to="/services">
                  Learn More
                </Link>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCuration;
