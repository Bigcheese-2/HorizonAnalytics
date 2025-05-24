import { motion } from "@/components/ui/motion";
import {
  Zap,
  Shield,
  Globe,
  LineChart,
  Clock,
  Smartphone,
  Code,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="bg-card/50 backdrop-blur-sm border-muted/20 overflow-hidden relative h-full group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardContent className="p-6 flex flex-col space-y-2 h-full">
          <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground flex-grow">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description:
        "Optimized performance ensures lightning-fast load times and smooth interactions for your users.",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure by Design",
      description:
        "Enterprise-grade security protects your data with end-to-end encryption and regular security audits.",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      description:
        "Deploy to our global edge network for low-latency access from anywhere in the world.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with comprehensive analytics and customizable reporting tools.",
    },
    {
      icon: <Clock size={24} />,
      title: "Real-time Updates",
      description:
        "Stay in sync with real-time data updates and collaborative features for your team.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Optimized",
      description:
        "Fully responsive design ensures a perfect experience on any device or screen size.",
    },
    {
      icon: <Code size={24} />,
      title: "Developer Friendly",
      description:
        "Extensive API documentation and developer tools make integration a breeze.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Continuous Updates",
      description:
        "Regular updates with new features and improvements based on user feedback.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden w-full 2xl:max-w-[1440px] 2xl:mx-auto"
    >
      {/* Background decorations */}
      <div className="overflow-hidden w-full">
        <div className="absolute -right-40 top-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 bottom-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto ">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-muted-foreground text-lg"
          >
            Everything you need to build exceptional digital experiences, all in
            one platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
