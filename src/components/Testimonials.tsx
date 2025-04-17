
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "DataLabA1x has revolutionized our data labeling process. The quality of annotations from their Indian workforce is outstanding, and the platform is incredibly easy to use.",
    author: {
      name: "Sahil Shah",
      role:  "DataLabA1x Founder's",
      avatar: "SS"
    }
  },
  {
    content: "As an Indian student, I've found DataLabA1x to be an excellent platform to earn while learning about AI. The flexible hours allow me to work around my class schedule.",
    author: {
      name: "Priya Sharma",
      role: "Computer Science Student & Labeler",
      avatar: "PS"
    }
  },
  {
    content: "The multilingual support is a game-changer for our NLP projects. Being able to get data labeled in multiple Indian languages has significantly improved our model performance.",
    author: {
      name: "Rajesh Kumar",
      role: "Lead Data Scientist, LanguageTech",
      avatar: "RK"
    }
  }
];

const Testimonials = () => {
  return (
    <div className="bg-brand-dark py-24 relative">
      <div className="pattern-dots absolute inset-0 opacity-10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-brand-purple-400 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            What people are saying
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Hear from our clients and labelers about their experience with DataLabA1x.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-white/10 shadow-md bg-brand-dark-100">
              <CardContent className="pt-6">
                <div className="relative">
                  <div className="text-lg text-gray-300 italic">"{testimonial.content}"</div>
                  <div className="mt-6 flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-brand-purple-900 text-brand-purple-200">{testimonial.author.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-white">{testimonial.author.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.author.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
