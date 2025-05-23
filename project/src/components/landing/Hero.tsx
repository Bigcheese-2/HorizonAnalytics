import { Button } from "@/components/ui/button";
import { motion } from "@/components/ui/motion";
import { Sparkles, Users, TrendingUp, Activity, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1000 },
];

const stats = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$45,678",
    change: "+8.2%",
    icon: TrendingUp,
  },
  {
    title: "Active Sessions",
    value: "2,345",
    change: "+5.1%",
    icon: Activity,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute -left-24 -top-24 h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-[100px]"></div>
        <div className="absolute -right-24 top-1/3 h-[250px] w-[250px] rounded-full bg-pink-600/20 blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-500"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Introducing Horizon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            The Future of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Analytics
            </span>{" "}
            is Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg text-muted-foreground"
          >
            Transform your data into actionable insights with our powerful analytics platform. 
            Get real-time metrics, beautiful visualizations, and AI-powered predictions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
          >
            <Button className="h-12 px-8 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0">
              Get Started
            </Button>
            <Button variant="outline" className="h-12 px-8 border-purple-500/20 hover:bg-purple-500/10">
              Learn More
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-12 w-full max-w-5xl"
          >
            <div className="rounded-lg overflow-hidden border border-border/40 shadow-2xl shadow-purple-500/5 relative z-10 bg-card/50 backdrop-blur-sm">
              <div className="p-6 border-b border-border/40">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Last 7 days</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/40">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.title}</p>
                            <h4 className="text-2xl font-bold mt-1">{stat.value}</h4>
                          </div>
                          <div className="p-2 rounded-lg bg-purple-500/10">
                            <stat.icon className="w-5 h-5 text-purple-500" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4 text-sm text-green-500">
                          <span>{stat.change}</span>
                          <TrendingUp className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      value: {
                        theme: {
                          light: "hsl(var(--purple-500))",
                          dark: "hsl(var(--purple-400))",
                        },
                      },
                    }}
                  >
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--purple-500))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--purple-500))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--purple-500))" 
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-pink-600/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}