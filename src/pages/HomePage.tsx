import React from 'react';
import { Button } from '../components/Button';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Welcome to Our Website
        </h1>
        
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Scenic mountain landscape"
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover amazing content and explore our website. We're dedicated to providing
          you with the best experience possible. Take a moment to learn more about us
          and what we have to offer.
        </p>
        
        <div className="text-center">
          <Button href="/about">Visit About Page</Button>
        </div>
      </div>
    </div>
  );
}