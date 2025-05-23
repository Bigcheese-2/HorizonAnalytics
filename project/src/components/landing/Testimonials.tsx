import { motion } from "@/components/ui/motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "This platform has completely transformed our workflow. The intuitive interface and powerful features have saved us countless hours.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "The level of customization and flexibility is unmatched. We've been able to tailor the platform to our specific needs with ease.",
    author: "Michael Chen",
    role: "CTO",
    company: "Innovate Inc",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "The support team is exceptional. Any time we've had questions, they've been incredibly responsive and helpful.",
    author: "Emily Rodriguez",
    role: "Operations Director",
    company: "GlobalSystems",
    avatar: "https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "Since implementing this platform, we've seen a 40% increase in productivity and significant improvements in team collaboration.",
    author: "David Kim",
    role: "Engineering Lead",
    company: "BuildFast",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "The analytics capabilities have given us insights we never had before, allowing us to make data-driven decisions with confidence.",
    author: "Sophia Martinez",
    role: "Analytics Manager",
    company: "DataDrive",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -left-40 top-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-muted-foreground text-lg"
          >
            Trusted by thousands of companies worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="text-primary mb-4">
                    <Quote className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-lg md:text-xl font-medium mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}