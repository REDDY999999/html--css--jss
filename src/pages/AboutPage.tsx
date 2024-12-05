import React from 'react';
import { Button } from '../components/Button';
import { Github, Bike, Basketball } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <p className="mt-4 text-lg text-gray-600">Software Developer & Sports Enthusiast</p>
        </div>

        <div className="bg-white shadow rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Github className="w-6 h-6" />
                Alex Thompson
              </h2>
              <p className="mt-2 text-gray-600">
                Passionate about creating beautiful and functional web applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Bike className="w-6 h-6" />
                Hobbies
              </h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>Mountain biking on weekends</li>
                <li>Photography and digital art</li>
                <li>Playing guitar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Basketball className="w-6 h-6" />
                Favorite Sport
              </h3>
              <p className="mt-2 text-gray-600">
                Basketball - Check out the{' '}
                <a
                  href="https://www.nba.com"
                  className="text-indigo-600 hover:text-indigo-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NBA website
                </a>{' '}
                for the latest games and scores!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </div>
  );
}