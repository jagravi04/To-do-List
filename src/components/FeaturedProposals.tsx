
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProposalCard from './ProposalCard';
import { mockProposals } from '@/data/mockData';

const FeaturedProposals: React.FC = () => {
  const navigate = useNavigate();
  const activeProposals = mockProposals.filter(p => p.status === 'active');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Investment Opportunities</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover promising startups actively seeking investment to fuel their growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate('/proposals')}
            className="bg-brand-600 hover:bg-brand-700 text-white px-8"
          >
            View All Opportunities
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProposals;
