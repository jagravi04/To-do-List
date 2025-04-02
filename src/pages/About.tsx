
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">About This App</h1>
        
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <h2 className="text-2xl font-semibold">Simple Todo Application</h2>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This is a simple React application built as a starting point for learning React fundamentals. 
              The app demonstrates key React concepts including:
            </p>
            
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>React components and component structure</li>
              <li>State management using React's useState hook</li>
              <li>Event handling and user interactions</li>
              <li>Conditional rendering techniques</li>
              <li>Form management</li>
              <li>Styling with Tailwind CSS</li>
              <li>Using UI component libraries</li>
            </ul>
            
            <p>
              Feel free to explore the codebase and modify it to learn more about React development.
              This app was built using React, React Router, Tailwind CSS, and shadcn UI components.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
