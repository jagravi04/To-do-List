
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import { Proposal } from '@/types';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

interface ProposalCardProps {
  proposal: Proposal;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal }) => {
  const navigate = useNavigate();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'under_review':
        return 'bg-yellow-100 text-yellow-800';
      case 'negotiating':
        return 'bg-purple-100 text-purple-800';
      case 'funded':
        return 'bg-blue-100 text-blue-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const formatStatus = (status: string) => {
    return status.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  };
  
  const progressPercentage = (proposal.raisedAmount / proposal.fundingGoal) * 100;
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={proposal.coverImage || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
          alt={proposal.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge className={`text-xs ${getStatusColor(proposal.status)}`}>
            {formatStatus(proposal.status)}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg line-clamp-2">{proposal.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{proposal.companyName} • {proposal.location}</p>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-brand-500">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {proposal.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Funding Goal</span>
            <span className="font-bold">{formatCurrency(proposal.fundingGoal)}</span>
          </div>
          
          <Progress value={progressPercentage} className="h-2" />
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{formatCurrency(proposal.raisedAmount)} raised</span>
            <span className="text-gray-600">{Math.round(progressPercentage)}%</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="font-medium">Equity Offered</span>
            <span className="font-bold">{proposal.equity}%</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 px-6 py-4">
        <Button 
          className="w-full bg-brand-600 hover:bg-brand-700"
          onClick={() => navigate(`/proposals/${proposal.id}`)}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProposalCard;
