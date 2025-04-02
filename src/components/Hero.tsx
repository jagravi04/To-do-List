
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-700 to-brand-800 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[bottom_1px_center] dark:bg-grid-white/[0.05]" />
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block">Connect, Fund, Grow:</span>
            <span className="block text-brand-300">The Future of Startup Funding</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl text-gray-300">
            Spark Funding Nexus connects visionary founders with strategic investors. Build relationships, secure funding, and turn your ideas into industry-changing companies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate('/signup')} 
              className="bg-white text-brand-700 hover:bg-gray-100 hover:text-brand-800 text-lg px-8 py-6"
              size="lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => navigate('/proposals')} 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              size="lg"
            >
              Browse Opportunities
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold">$12.5M+</p>
              <p className="mt-2 text-sm font-medium text-gray-300">Funding Raised</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">25+</p>
              <p className="mt-2 text-sm font-medium text-gray-300">Startups</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">12+</p>
              <p className="mt-2 text-sm font-medium text-gray-300">Investors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">8</p>
              <p className="mt-2 text-sm font-medium text-gray-300">Successful Deals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
