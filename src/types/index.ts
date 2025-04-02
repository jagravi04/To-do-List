
export type UserRole = 'founder' | 'investor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  createdAt: string;
}

export interface Founder extends User {
  role: 'founder';
  companyName: string;
  industry: string;
  location: string;
  foundedYear: number;
  teamSize: number;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    crunchbase?: string;
  };
}

export interface Investor extends User {
  role: 'investor';
  investmentFocus: string[];
  investmentStage: string[];
  minimumInvestment?: number;
  maximumInvestment?: number;
  portfolioSize?: number;
  previousInvestments?: string[];
}

export type ProposalStatus = 'draft' | 'active' | 'under_review' | 'negotiating' | 'funded' | 'closed';

export interface Proposal {
  id: string;
  title: string;
  companyId: string;
  companyName: string;
  founderName: string;
  founderId: string;
  status: ProposalStatus;
  fundingGoal: number;
  raisedAmount: number;
  equity: number;
  industry: string;
  location: string;
  pitchDeck?: string;
  description: string;
  highlights: string[];
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
  deadline?: string;
  interested: string[]; // IDs of interested investors
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: UserRole;
  senderAvatar?: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
  proposalId?: string;
}

export interface Investment {
  id: string;
  investorId: string;
  investorName: string;
  proposalId: string;
  proposalTitle: string;
  companyId: string;
  companyName: string;
  amount: number;
  equity: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}

export interface Stats {
  totalInvestors: number;
  totalStartups: number;
  totalFunding: number;
  activeProposals: number;
  successfulDeals: number;
}
