import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DriveCard({ drive, distance }) {
  const { id, title, city, area, date, time, volunteersNeeded, mealsExpected } = drive;
  const formattedDate = new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <MapPin size={18} className="text-primary mr-2" />
            <span>{area}, {city}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="text-primary mr-2" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="text-primary mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <Utensils size={18} className="text-primary mr-2" />
            <span>{mealsExpected} meals expected</span>
          </div>
          <div className="flex items-center">
            <Users size={18} className="text-primary mr-2" />
            <span>{volunteersNeeded} volunteers needed</span>
          </div>
          {distance !== undefined && (
            <div className="flex items-center text-sm text-gray-500">
              <span>{distance.toFixed(1)} km away</span>
            </div>
          )}
        </div>
        <div className="mt-4">
          <Link
            to={`/drive/${id}`}
            className="inline-flex items-center text-primary font-medium hover:text-green-700"
          >
            View Details
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}