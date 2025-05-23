import { motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 opacity-80"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 container px-4 md:px-6"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Join thousands of customers who are already transforming their digital experience with our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="h-12 bg-background/10 backdrop-blur-sm border-white/20 text-white"
            />
            <Button className="h-12 px-8 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No credit card required. Start your free 14-day trial today.
          </p>
        </div>
      </motion.div>
    </section>
  );
}