import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ChevronRight, PlayCircle, Trophy, Zap, Shield, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "You're on the list.",
        description: "Check your email for the first drill.",
      });
    }, 1000);
  };

  const stagger = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-widest text-white flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-sm rotate-45" />
            MURDAZONE
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#problems" className="hover:text-white transition-colors">The Problem</a>
            <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#coach" className="hover:text-white transition-colors">The Coach</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none">
            Get Access
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <img 
            src="/images/hero.png" 
            alt="Wrestling mat in dramatic lighting" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-primary font-bold text-sm uppercase tracking-widest mb-8"
          >
            <Zap className="w-4 h-4" />
            Stop losing matches you should be winning
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase leading-[0.85] tracking-tight mb-8"
          >
            Get Better <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">at Wrestling</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            No fluff. No magic tricks. Just the fundamental techniques, positioning, and mindset that separates the champions from the guys who almost made it.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-lg h-14 px-8 font-bold uppercase tracking-wider rounded-none group">
              Start Dominating
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold uppercase tracking-wider rounded-none bg-transparent border-white/20 hover:bg-white/5">
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Trailer
            </Button>
          </motion.div>
        </div>
      </section>

      {/* STATS/RESULTS STRIP */}
      <section className="border-b border-white/5 bg-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          <div className="text-center px-4">
            <div className="text-4xl font-display font-bold text-white mb-2">500+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Athletes Coached</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl font-display font-bold text-white mb-2">12</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">State Champs</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl font-display font-bold text-white mb-2">40+</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Hours of Content</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl font-display font-bold text-white mb-2">100%</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">No-BS Guarantee</div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section id="problems" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
              You're working hard.<br/>
              <span className="text-primary">Why are you still losing?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Heart and hustle only get you so far. At a certain point, bad mechanics and poor positioning will expose you against good kids. We fix the leaks in your game.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "You gas out in the third period",
                desc: "It's not just cardio. It's because you're wrestling inefficiently. We teach you how to use leverage and pressure so your opponent works harder than you do.",
                img: "/images/gas-out.png"
              },
              {
                title: "You can't finish your shots",
                desc: "Getting to the leg is 10%. Finishing against a heavy sprawl is 90%. Learn the exact angles, head positioning, and chain wrestling to finish every time.",
                img: "/images/stuck-shot.png"
              },
              {
                title: "You get stuck on bottom",
                desc: "There is nothing more demoralizing than being ridden out. We give you a bulletproof first-move explosive series that makes you impossible to hold down.",
                img: "/images/bottom-position.png"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="group relative bg-card border border-white/5 overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-12 h-1 bg-primary mb-6" />
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM PREVIEW */}
      <section id="curriculum" className="py-24 md:py-32 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
                Secrets Behind the Inside Trip
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                The inside trip is one of the highest-percentage finishes in wrestling — when you set it up right. We break down every detail most coaches skip.
              </p>
              
              <div className="space-y-6">
                {[
                  "Setup: The tie-ups and head position that force the opening",
                  "Entry: Stepping inside without telegraphing the trip",
                  "Off-balance: Loading their weight onto the trapped leg",
                  "The Trip: Hooking and elevating with the correct angle",
                  "The Finish: Driving through the hips and securing the pin",
                  "Counters: Recovering when they sprawl or post the leg"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="mt-10 bg-primary text-white hover:bg-primary/90 text-lg h-14 px-8 font-bold uppercase tracking-wider rounded-none">
                View Full Curriculum
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative bg-card border border-white/10 p-8 shadow-2xl aspect-square flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517502474163-14470ff45851')] opacity-20 bg-cover bg-center" />
                 {/* Placeholder for video player look */}
                 <div className="relative z-10 w-24 h-24 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-primary/50">
                    <PlayCircle className="w-12 h-12 text-white ml-1" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section id="coach" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <img src="/images/coach.png" alt="Coach" className="relative z-10 w-full aspect-[4/5] object-cover grayscale border border-white/10" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-2">
                Coach Murda
              </h2>
              <div className="text-primary font-bold tracking-widest uppercase mb-8">Head Instructor</div>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I've spent 20 years on the mat as a Division I wrestler and a head coach. I've seen exactly what separates the kids who place at state from the ones who go two-and-barbecue.
                </p>
                <p>
                  It's not about learning the fanciest flying squirrel throw. It's about brutal, uncompromising fundamentals. Being out of position by two inches is the difference between a takedown and getting snapped to the mat.
                </p>
                <p>
                  I built Murdazone to give you the blueprint I wish I had when I was 16. No fluff. Just what works.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-display font-bold text-white">D1</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Wrestler</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white">15+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Coaching</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-16">
            Earned Respect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Before this, I couldn't get off bottom to save my life. The explosive standup series completely changed my game. I haven't been ridden out since.",
                name: "Jake T.",
                title: "Varsity Wrestler, 160lbs",
                img: "/images/avatar1.png"
              },
              {
                quote: "As a coach, I use this curriculum to teach my room. The breakdown of tie-ups and angles is the most practical, no-nonsense stuff I've seen.",
                name: "Coach Davis",
                title: "High School Head Coach",
                img: "/images/avatar2.png"
              }
            ].map((t, i) => (
              <div key={i} className="bg-card border border-white/5 p-8 relative">
                <div className="absolute top-8 left-8 text-6xl text-white/5 font-display">"</div>
                <p className="text-lg text-muted-foreground italic mb-8 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-none object-cover border border-white/20 grayscale" />
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider">{t.name}</div>
                    <div className="text-sm text-primary">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-12 text-center">
          Questions?
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-lg font-bold uppercase tracking-wide hover:text-primary">Is this for beginners or advanced wrestlers?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Both. Beginners need this to avoid developing bad habits that take years to unlearn. Advanced wrestlers need this because at the elite level, matches are won by micro-adjustments in position that we cover in extreme detail.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-lg font-bold uppercase tracking-wide hover:text-primary">What styles do you cover?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              The core is Folkstyle (Collegiate/High School), but the neutral position mechanics, takedowns, and defense translate perfectly to Freestyle. We do not cover Greco-Roman throws.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-lg font-bold uppercase tracking-wide hover:text-primary">How is this different from YouTube tutorials?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              YouTube is random moves with no context. We provide a system. If you try a move from YouTube and it fails, you don't know why. Our curriculum teaches you the 'why' behind the mechanics, linking positions together so you have a complete gameplan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-lg font-bold uppercase tracking-wide hover:text-primary">Do I need a partner?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              To watch and understand? No. To master the material? Yes. You need live drilling. Watch the modules, grab a drilling partner before or after practice, and rep it out until it's muscle memory.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-lg font-bold uppercase tracking-wide hover:text-primary">Refund policy?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              30-day money-back guarantee. If you put in the work, drill the material, and honestly feel like you haven't improved your positioning, email us and we'll refund you. No BS.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA / NEWSLETTER */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517502474163-14470ff45851')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Get the weekly drill that's making wrestlers unstoppable
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Drop your email to get one brutal, highly-effective drill sent to your inbox every Monday.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-14 bg-background/50 border-white/20 text-white placeholder:text-white/50 text-lg uppercase font-medium rounded-none focus-visible:ring-white"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="h-14 px-8 bg-background text-foreground hover:bg-background/90 text-lg font-bold uppercase tracking-wider rounded-none shrink-0"
            >
              {isSubmitting ? "Submitting..." : "Send it"}
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-display font-bold tracking-widest text-white flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-sm rotate-45" />
            MURDAZONE
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Murdazone. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
