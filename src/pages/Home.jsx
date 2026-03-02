import Hero from '../components/Hero';
import Stats from '../components/Stats';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">About Robin Hood Army</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              A zero-funds volunteer-based organization that redistributes surplus food to the less fortunate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 leading-relaxed">
                Founded in 2014, the Robin Hood Army works through volunteer-driven local chapters across 400+ cities. 
                We collect surplus food from restaurants, weddings, and events, and distribute it to homeless families, 
                orphanages, and hospitals. Our volunteers are ordinary people doing extraordinary things to fight hunger.
              </p>
              <div className="mt-6">
                <Link to="/drives" className="inline-flex items-center text-primary font-medium hover:text-green-700">
                  Find a drive near you <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary">160M+</div>
                <div className="text-gray-600">Meals Served</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary">400+</div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center col-span-2">
                <div className="text-4xl font-bold text-primary">200K+</div>
                <div className="text-gray-600">Volunteers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}