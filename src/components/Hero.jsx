import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fight Hunger <span className="text-primary">With Us</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Find Robin Hood Army drives near you and join the movement to redistribute surplus food to those in need.
            </p>
            <div className="mt-8">
              <Link
                to="/drives"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Find Drives Near Me
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img src={"images/holi-celeb.jpeg"} alt="Volunteers serving food" className="rounded-lg shadow-xl w-full max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
}