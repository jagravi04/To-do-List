
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, company, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex-grow">
        <svg className="h-8 w-8 text-brand-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 mb-6">{quote}</p>
      </div>
      <div className="flex items-center mt-4">
        <Avatar className="h-12 w-12 border-2 border-brand-100">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "SparkFund completely transformed our fundraising journey. The platform connected us with the perfect investors who not only provided capital but also valuable industry expertise.",
      name: "Sarah Chen",
      title: "Founder & CEO",
      company: "EcoTech Solutions",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      quote: "As an investor, SparkFund has become my go-to platform for discovering promising startups. The quality of proposals and the verification process gives me confidence in every opportunity.",
      name: "Michael Rodriguez",
      title: "Angel Investor",
      company: "Horizon Capital",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      quote: "The streamlined communication tools made negotiating terms and closing our funding round incredibly efficient. We raised $1.2M in just 3 weeks through connections made on SparkFund.",
      name: "Jessica Park",
      title: "Co-founder",
      company: "MedTech Innovations",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See what founders and investors are saying about their experience with SparkFund.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
