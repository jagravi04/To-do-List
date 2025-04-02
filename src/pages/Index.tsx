
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProposals from '@/components/FeaturedProposals';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <HowItWorks />
      <FeaturedProposals />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-700 to-brand-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Funding Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Whether you're a founder seeking capital or an investor looking for the next big opportunity, SparkFund connects you with the right partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </div>
  );
};

export default Index;
