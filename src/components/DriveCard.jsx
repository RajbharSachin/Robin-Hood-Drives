import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, Utensils, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DriveCard({ drive, distance }) {
  const { id, title, city, area, date, time, volunteersNeeded, mealsExpected } = drive;
  const formattedDate = new Date(date).toLocaleDateString('en-IN', { 
    day: 'numeric', month: 'short', year: 'numeric' 
  });

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
            {distance?.toFixed(1)} km
          </span>
        </div>
        
        <div className="space-y-3 text-gray-600">
          <div className="flex items-center">
            <MapPin size={18} className="text-primary mr-3 flex-shrink-0" />
            <span className="text-sm">{area}, {city}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="text-primary mr-3 flex-shrink-0" />
            <span className="text-sm">{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="text-primary mr-3 flex-shrink-0" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center">
            <Utensils size={18} className="text-primary mr-3 flex-shrink-0" />
            <span className="text-sm">{mealsExpected} meals expected</span>
          </div>
          <div className="flex items-center">
            <Users size={18} className="text-primary mr-3 flex-shrink-0" />
            <span className="text-sm">{volunteersNeeded} volunteers needed</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            to={`/drive/${id}`}
            className="inline-flex items-center text-primary font-semibold hover:text-green-700 group"
          >
            View Details
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}