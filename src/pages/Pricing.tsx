
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$0.10",
    description: "Per labeled item",
    features: [
      "Up to 1,000 items/month",
      "Basic QA checks",
      "Email support",
      "72hr turnaround time",
      "JSON/CSV export"
    ]
  },
  {
    name: "Pro",
    price: "$999",
    description: "per month",
    popular: true,
    features: [
      "Up to 10,000 items/month",
      "Advanced QA with AI validation",
      "Priority support",
      "24hr turnaround time",
      "API access",
      "Custom export formats",
      "Dedicated success manager"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Contact sales",
    features: [
      "Unlimited items",
      "Custom workflows",
      "24/7 support",
      "SLA guarantees",
      "Full API access",
      "Custom integrations",
      "Compliance support",
      "Training & onboarding"
    ]
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Simple, Transparent <span className="text-brand-blue-600">Pricing</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`border-2 ${plan.popular ? 'border-brand-blue-500 shadow-lg' : ''}`}>
              <CardHeader>
                {plan.popular && (
                  <div className="px-3 py-1 text-sm text-white bg-brand-blue-500 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-gray-500">{plan.description}</span>
                </div>
                <CardDescription className="text-base mt-4">
                  Perfect for growing AI companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
