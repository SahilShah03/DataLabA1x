
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-gradient-to-br from-brand-purple-900 to-brand-dark-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to transform your AI data labeling?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-brand-purple-100">
              Join the hundreds of companies leveraging India's talent pool for high-quality, cost-effective data labeling. Get started today and see the difference.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button size="lg" variant="default" className="bg-white text-brand-purple-900 hover:bg-gray-100" asChild>
                <Link to="/signup">
                  Start for Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="glassmorphism rounded-lg p-6 sm:p-10">
              <div className="text-white text-center">
                <h3 className="text-xl font-bold mb-2">For Indian Labelers</h3>
                <p className="mb-6 text-gray-300">Earn money by joining our workforce of data labelers. Flexible hours, regular payments, and opportunities to grow your skills.</p>
                <Button variant="default" className="bg-brand-purple-500 hover:bg-brand-purple-600" asChild>
                  <Link to="/for-workers">
                    Join as a Labeler
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
