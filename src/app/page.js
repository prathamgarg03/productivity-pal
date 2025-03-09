"use client"

import { useState } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, ArrowRight, Zap, Brain, Activity} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle,DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState('');

  const [openLearnMore, setOpenLearMore] = useState(false);
  const [messageLearMore, setMessageLearnMore] = useState("Accessing Forbidden Knowledge...");

  const features = [
    {
      title: "Neural Task Recalibration",
      description: "Experience AI-driven task restructuring that transforms simple to-dos into high-impact strategic objectives.",
      icon: <Brain className="h-12 w-12 text-indigo-500" />
    },
    {
      title: "Gamified Synergy Metrics",
      description: "Unlock real-time productivity scores and dynamic performance analytics to supercharge your workflow engagement.",
      icon: <Activity className="h-12 w-12 text-indigo-500" />
    },
    {
      title: "Hyper-Adaptive Interface",
      description: "Navigate an ever-evolving, AI-personalized dashboard that optimizes itself faster than you can keep up.",
      icon: <Zap className="h-12 w-12 text-blue-500" />
    }
  ];

  const testimonials = [
    {
      quote: "ProductivityPal completely shattered our productivity paradigms, boosting efficiency by 500%—and then we lost track of time.",
      author: "Someone once said, \"ABC\", Keeper of Unseen Efficiency",
      company: "DEF"
    },
    {
      quote: "Our ROI? Let's just say it broke the algorithm. The Cognitive Resonance module rewired our team’s very essence.",
      author: "They call her 'GHI', Seeker of Cognitive Pathways",
      company: "JKL"
    }
  ];

  const handleLearnMore = () => {
    setOpenLearMore(true);
    setMessageLearnMore("Accessing Forbidden Knowledge...");

    setTimeout(() => {
      setMessageLearnMore("Never mind, you’re not ready for this.");
    }, 2000);
  };


  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        <Head>
          <title>ProductivityPal | Revolutionize Your Workflow</title>
          <meta name="description" content="The world's most advanced AI-powered productivity platform" />
        </Head>

        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 opacity-5 z-0" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">ProductivityPal</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-gray-700 mb-10 max-w-3xl mx-auto">
                Unlock <span className="text-blue-600 font-semibold">10x Productivity</span> with our AI-Powered Workflow Optimization Engine
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 px-8 text-lg font-semibold">
                  <Link href={"/sign-up"} >Get Started</Link>
                </Button>
                {/*<Button variant="outline" className="bg-white rounded-full py-6 px-8 text-lg font-semibold border-2">*/}
                {/*  Login*/}
                {/*</Button>*/}
              </div>

              <div className="relative">
                {/*<img*/}
                {/*    src="/api/placeholder/1200/600"*/}
                {/*    alt="Impossibly productive people using ProductivityPal*/}
                {/*   "*/}
                {/*    className="rounded-xl shadow-2xl mx-auto"*/}
                {/*/>*/}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 px-6 shadow-lg">
                  <p className="text-gray-500 font-medium text-sm">Trusted by 10,000+ forward-thinking organizations</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/*/!* Logos *!/*/}
        {/*<section className="py-16 bg-white">*/}
        {/*  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <p className="text-center text-gray-500 mb-8">TRUSTED BY FORWARD-THINKING ORGANIZATIONS</p>*/}
        {/*    <div className="flex justify-between items-center flex-wrap gap-8">*/}
        {/*      {[1, 2, 3, 4, 5].map((i) => (*/}
        {/*          <div key={i} className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center">*/}
        {/*            <p className="text-gray-400 text-xs">LOGO {i}</p>*/}
        {/*          </div>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Features */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our cutting-edge platform leverages synergistic AI capabilities to disrupt traditional workflow paradigms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <div className="mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={handleLearnMore}  variant="ghost" className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800">
                        Learn more <ArrowRight onClick={handleLearnMore}  className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
              {/* Dialog (Modal) */}
              <Dialog open={openLearnMore} onOpenChange={setOpenLearMore}>
                <DialogContent className="max-w-sm h-[150px] text-center flex flex-col items-center justify-center">
                  <DialogHeader>
                    <VisuallyHidden>
                      <DialogTitle></DialogTitle>
                    </VisuallyHidden>
                    <DialogDescription className="text-black-700">{messageLearMore}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How ProductivityPal Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our framework doesn’t just manage tasks; it redefines getting things done.
              </p>
            </div>

            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">
                        {step}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step === 1 && "Connect & Personalize"}
                        {step === 2 && "AI Analysis & Realignment"}
                        {step === 3 && "Experience Transformation"}
                      </h3>
                      <p className="text-gray-600 max-w-xs">
                        {step === 1 && "Integrate seamlessly into your world. It’s not about your workflow anymore—it’s about your (chaotic) journey."}
                        {step === 2 && "Our algorithms adapt to your every move, transforming your tasks into new, unpredictable challenges. Expect your goals to evolve as you do."}
                        {step === 3 && "Watch as your sense of productivity shifts into something more personal, more powerful. You’ll redefine what success looks like, one task at a time."}
                      </p>
                    </div>
                ))}
              </div>

              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -z-10 transform -translate-y-1/2" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of innovators who have transformed their productivity
              </p>
            </div>

            <Tabs defaultValue="testimonials" className="w-full">
              <TabsList className="grid w-full md:w-1/2 mx-auto grid-cols-2">
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              </TabsList>
              <TabsContent value="testimonials" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                      <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-1 text-yellow-400 mb-4">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span key={star}>★</span>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                          <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                          <p className="text-gray-500">{testimonial.company}</p>
                        </CardContent>
                      </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="case-studies" className="mt-8">
                <div className="text-center text-gray-500">
                  <p>Coming soon! Our case studies are currently undergoing AI-powered optimization.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your transformative journey
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {["The Initiation", "The Ascension", "The Abyss"].map((plan, index) => (
                  <Card key={index} className={`border-0 ${index === 0 ? 'shadow-xl ring-2 ring-blue-500' : 'shadow-md'}`}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan}</CardTitle>
                      <CardDescription>
                        {index === 0 && "For those beginning to sense the unknown."}
                        {index === 1 && "For those who dare to grow beyond limits."}
                        {index === 2 && "For those who wish to vanish into the abyss."}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                       <span className="text-4xl font-bold">
                {index === 0 && "FREE"}
                {index === 1 && "$100"}
                {index === 2 && "Custom"}
                   </span>
                        {index !== 2 && <span className="text-gray-500">/month</span>}
                      </div>
                      <ul className="space-y-3">
                        {[1, 2, 3, 4].map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <CheckCircle className="h-7 w-7 text-green-500" />
                              <span className="text-gray-700">
                                {index === 0 && feature === 1 && "Beginner's Quantum Prioritization"}
                                {index === 0 && feature === 2 && "5 Tasks, but you won't remember them all"}
                                {index === 0 && feature === 3 && "Limited Cognitive Breakdown"}
                                {index === 0 && feature === 4 && "NO Support, because you’ll find your own way"}

                                {index === 1 && feature === 1 && "Advanced Quantum Prioritization"}
                                {index === 1 && feature === 2 && "10 Tasks, lost in the endless sea"}
                                {index === 1 && feature === 3 && "Full Cognitive Disruption Suite"}
                                {index === 1 && feature === 4 && "12/7 Email Support... but is it really support?"}

                                {index === 2 && feature === 1 && "Endless Quantum Engine"}
                                {index === 2 && feature === 2 && "Unlimited Tasks, but you won't use them all"}
                                {index === 2 && feature === 3 && "Personalized Success Manager... or guide into madness"}
                                {index === 2 && feature === 4 && "24/7 Email Support... but does it even help?"}
                  </span>
                            </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${index === 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                        {index === 0 ? "Get Started Now" : "Contact Sales... if you dare"}
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-24 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of forward-thinking organizations already experiencing the power of ProductivityPal
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign Up for Exclusive Beta Access</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 py-3 px-6">
                  Get Early Access
                </Button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                By signing up, you'll receive our AI-optimized newsletter and transformation tips.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Integrations", "Roadmap"].map((item) => (
                      <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {["About", "Blog", "Careers", "Press"].map((item) => (
                      <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {["Documentation", "Support", "API", "Community"].map((item) => (
                      <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {["Terms", "Privacy", "Security", "Compliance"].map((item) => (
                      <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p>© 2025 ProductivityPal , Inc. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                {["Twitter", "LinkedIn", "Facebook", "GitHub"].map((social) => (
                    <a key={social} href="#" className="hover:text-white">{social}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}