import { useState } from "react";
import { motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      priceMonthly: 29,
      priceAnnual: 24,
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24/7 support",
        "1 team member",
        "10GB storage"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      priceMonthly: 79,
      priceAnnual: 64,
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Up to 10 team members",
        "100GB storage",
        "Custom integrations",
        "Advanced security"
      ],
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      priceMonthly: 149,
      priceAnnual: 129,
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "Custom reporting",
        "SSO authentication",
        "99.99% uptime SLA",
        "Enterprise API access",
        "Advanced security",
        "Compliance assistance"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -right-40 top-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-muted-foreground text-lg"
          >
            Choose the perfect plan for your needs. No hidden fees.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mt-8 gap-3"
          >
            <span className={annual ? "text-muted-foreground" : "font-medium"}>Monthly</span>
            <Switch
              checked={annual}
              onCheckedChange={setAnnual}
              className="data-[state=checked]:bg-gradient-to-r from-purple-500 to-pink-600"
            />
            <span className={annual ? "font-medium" : "text-muted-foreground"}>
              Annual <span className="text-sm text-green-500 dark:text-green-400">(Save 20%)</span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col h-full ${
                plan.highlighted ? "md:scale-110 md:-my-4 z-10" : ""
              }`}
            >
              <Card
                className={`flex flex-col h-full relative overflow-hidden ${
                  plan.highlighted
                    ? "border-purple-500/50 shadow-lg shadow-purple-500/10"
                    : "border-border/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -right-16 top-6 rotate-45 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-1 w-64 text-center text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground mt-1">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow py-8">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${annual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="text-green-500 dark:text-green-400 mt-0.5">
                          <Check className="h-5 w-5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full h-12 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0"
                        : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}