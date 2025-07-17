
import React, { useState, useEffect } from 'react';
import { ChevronRight, Brain, Video, Search, History, Eye, FileText, Mic, Shield, Star, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Landing() {
  const [typedText, setTypedText] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const fullText = 'Ace Every Interview with AI.';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Mock Interviews',
      description: 'Practice unlimited AI-driven mock interviews with realistic questions and smart feedback'
    },
    {
      icon: Video,
      title: 'Live Interview Assistant',
      description: 'Receive AI-generated answers in real time during Zoom, Meet, or Teams interviews'
    },
    {
      icon: Search,
      title: 'Question Type Detection',
      description: 'Auto-classifies questions as Coding, Conceptual, Behavioral, or Scenario-based'
    },
    {
      icon: History,
      title: 'Interview History',
      description: 'Track all previous sessions with transcripts and downloadable answers'
    },
    {
      icon: Eye,
      title: 'Stealth Overlay Mode',
      description: 'Use an on-screen AI assistant that doesn\'t interrupt your video call'
    },
    {
      icon: FileText,
      title: 'Personalized Setup',
      description: 'Upload resume + job description to tailor mock interviews to your role'
    },
    {
      icon: Mic,
      title: 'Smart Audio Detection',
      description: 'Listens to your interviewer\'s questions, detects silence, and responds intelligently'
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description: 'No audio is stored — only transcripts are saved in your encrypted account'
    }
  ];

  const testimonials = [
    {
      quote: "Crackify gave me confidence — I cracked two interviews in just 3 weeks.",
      author: "Sarah Chen",
      role: "Software Engineer at Meta"
    },
    {
      quote: "The AI answers felt so natural, it was like having a secret coach.",
      author: "Marcus Rodriguez",
      role: "Product Manager at Netflix"
    },
    {
      quote: "Stealth mode helped me during my actual Google Meet call. Game changer.",
      author: "Priya Patel",
      role: "Data Scientist at Google"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleAuthRedirect = () => {
    window.location.href = '/auth';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-600/95 via-indigo-600/95 to-purple-600/95 backdrop-blur-md shadow-lg shadow-blue-500/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-24">
            <a href="/" className="flex items-center group cursor-pointer relative">
              <div className="relative transform transition-all duration-500 ease-out group-hover:scale-110">
                {/* Animated background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/40 via-blue-400/40 to-purple-400/40 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                
                {/* Rotating ring */}
                <div className="absolute -inset-2 border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500" 
                     style={{
                       background: 'conic-gradient(from 0deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee)',
                       animation: 'spin 3s linear infinite'
                     }}>
                </div>
                
                {/* Main logo */}
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a2b6792e8_1752565729462.jpg" 
                  alt="Crackify AI Logo" 
                  className="h-20 w-auto relative z-10 transition-all duration-500 ease-out group-hover:brightness-110"
                  style={{
                    filter: 'drop-shadow(0 4px 20px rgba(255, 255, 255, 0.5))',
                    animation: 'gentleBounce 4s ease-in-out infinite'
                  }}
                />
                
                {/* Sparkle effects */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute bottom-2 left-1 w-2 h-2 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" style={{animationDelay: '0.8s'}}></div>
              </div>
            </a>
            
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                onClick={handleAuthRedirect}
                className="text-white/90 hover:text-white hover:bg-white/20 font-medium px-6 py-2 text-lg backdrop-blur-sm border border-white/30 rounded-xl"
              >
                Login
              </Button>
              <Button 
                onClick={handleAuthRedirect}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-medium px-8 py-2 text-lg shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes gentleBounce {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-3px) rotate(1deg) scale(1.02); 
          }
          50% { 
            transform: translateY(-1px) rotate(0deg) scale(1.01); 
          }
          75% { 
            transform: translateY(-2px) rotate(-1deg) scale(1.02); 
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .group:hover img {
          transform: scale(1.05) rotate(2deg);
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 sm:px-8 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse text-yellow-300">|</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crackify gives you real-time AI-powered interview support — mock or live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleAuthRedirect}
                className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handleAuthRedirect}
                className="border-2 border-white/50 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 text-lg transition-all duration-300 rounded-xl"
              >
                Login to Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From mock interviews to live assistance, Crackify AI has every tool to help you land your dream job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500', 
                'from-green-500 to-emerald-500',
                'from-orange-500 to-yellow-500',
                'from-indigo-500 to-purple-500',
                'from-pink-500 to-rose-500',
                'from-teal-500 to-cyan-500',
                'from-violet-500 to-purple-500'
              ];
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/50 hover:from-white hover:to-indigo-50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-200 to-yellow-200 bg-clip-text text-transparent">
            Success Stories
          </h2>
          
          <div className="relative">
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl sm:text-3xl font-medium mb-8 leading-relaxed text-white">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="text-lg text-blue-100">
                  <div className="font-semibold">{testimonials[currentTestimonial].author}</div>
                  <div>{testimonials[currentTestimonial].role}</div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-yellow-300' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Choose the plan that fits your interview preparation needs
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
                <p className="text-slate-600 mb-6">Get started with basic features</p>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>3 mock interviews/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic question types</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Interview history</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-transparent bg-gradient-to-br from-blue-600 to-purple-600 text-white relative transform scale-105 shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <p className="text-blue-100 mb-6">Perfect for active job seekers</p>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>Unlimited mock interviews</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>All question types</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>Live interview assistant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 bg-gradient-to-br from-white to-purple-50/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                <p className="text-slate-600 mb-6">Advanced features for professionals</p>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Stealth overlay mode</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium AI models</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-slate-600 mt-12">
            Upgrade options are available after login inside the app
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="py-20 px-6 sm:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="md:col-span-2">
                <div className="mb-8">
                  <div className="relative inline-block group">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a2b6792e8_1752565729462.jpg" 
                      alt="Crackify AI Logo" 
                      className="h-20 w-auto mb-6 transition-all duration-300 group-hover:scale-105 filter brightness-110"
                      style={{
                        filter: 'drop-shadow(0 2px 10px rgba(255, 255, 255, 0.3))',
                      }}
                    />
                  </div>
                  <p className="text-xl text-blue-100 mb-6 leading-relaxed max-w-lg">
                    Crack your interviews with real-time AI assistance. Join thousands of professionals who've landed their dream jobs.
                  </p>
                  <Button 
                    size="lg"
                    onClick={handleAuthRedirect}
                    className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                  >
                    Start Your Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6 text-cyan-300">Built With</h4>
                <ul className="space-y-4">
                  {[
                    { name: 'OpenAI', icon: '🤖' },
                    { name: 'Google Speech API', icon: '🎤' },
                    { name: 'Razorpay', icon: '💳' },
                    { name: 'FastAPI', icon: '⚡' }
                  ].map((tech, index) => (
                    <li key={index} className="flex items-center space-x-3 text-blue-100 hover:text-cyan-300 transition-colors duration-200 group">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-200">{tech.icon}</span>
                      <span className="font-medium">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="border-t border-blue-700/50 pt-12 mb-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-bold text-white mb-2">100% Secure</h5>
                  <p className="text-blue-200 text-sm">Your data is encrypted and secure</p>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-bold text-white mb-2">5-Star Rated</h5>
                  <p className="text-blue-200 text-sm">Trusted by thousands of job seekers</p>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-bold text-white mb-2">Instant Setup</h5>
                  <p className="text-blue-200 text-sm">Get started in seconds, no credit card required</p>
                </div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-blue-700/50 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-blue-200">
                  © 2025 Crackify AI. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 text-blue-200">
                  <a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-cyan-300 transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
