import { useState, useEffect, useMemo } from 'react';
import { useLocation } from '../hooks/useLocation';
import DriveCard from '../components/DriveCard';
import DistanceFilter from '../components/DistanceFilter';
import drivesData from '../data/drives.json';
import { MapPin, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

function getDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export default function Drives() {
  const { location, loading: locationLoading, error } = useLocation();
  const [filterDistance, setFilterDistance] = useState(25);
  const [drives, setDrives] = useState([]);

  useEffect(() => {
    setDrives(drivesData);
  }, []);

  const drivesWithDistance = useMemo(() => {
    if (!location) return [];
    return drives.map(drive => {
      const distance = getDistance(location.lat, location.lng, drive.lat, drive.lng);
      return { ...drive, distance };
    }).filter(drive => drive.distance <= filterDistance)
      .sort((a, b) => a.distance - b.distance);
  }, [drives, location, filterDistance]);

  if (locationLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Upcoming Drives</h1>
        <DistanceFilter onFilterChange={setFilterDistance} />
      </div>

      {location && (
        <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
          <MapPin className="text-primary mr-2" size={20} />
          <span className="text-gray-700">
            Showing drives within {filterDistance} km of <strong>{location.city || 'your location'}</strong>
          </span>
        </div>
      )}

      {drivesWithDistance.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No drives found within this distance. Try increasing the filter.</p>
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {drivesWithDistance.map(drive => (
            <DriveCard key={drive.id} drive={drive} distance={drive.distance} />
          ))}
        </motion.div>
      )}
    </div>
  );
}