import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import drivesData from '../data/drives.json';
import { MapPin, Calendar, Clock, Users, Utensils, User, Map, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function DriveDetails() {
  const { id } = useParams();
  const [drive, setDrive] = useState(null);

  useEffect(() => {
    const found = drivesData.find(d => d.id === parseInt(id));
    setDrive(found);
  }, [id]);

  if (!drive) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading drive details...</p>
      </div>
    );
  }

  const {
    title,
    city,
    area,
    date,
    time,
    volunteersNeeded,
    mealsExpected,
    description,
    organizer,
    meetingPoint,
    startTime,
    endTime,
    lat,
    lng,
  } = drive;

  const formattedDate = new Date(date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1593113598335-7c4a2c6e7b3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Drive banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
              <p className="text-lg flex items-center mt-2">
                <MapPin size={20} className="mr-1" /> {area}, {city} • {formattedDate} • {time}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">About this Drive</h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Drive Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <User className="text-primary mr-2 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Organizer</p>
                    <p className="font-medium">{organizer}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-primary mr-2 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Meeting Point</p>
                    <p className="font-medium">{meetingPoint}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-primary mr-2 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Start Time</p>
                    <p className="font-medium">{startTime}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-primary mr-2 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">End Time</p>
                    <p className="font-medium">{endTime}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-primary mr-2 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Volunteers Needed</p>
                    <p className="font-medium">{volunteersNeeded}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Utensils className="text-primary mr-2 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Meals Expected</p>
                    <p className="font-medium">{mealsExpected}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Map className="mr-2 text-primary" size={24} /> Meeting Point Location
              </h2>
              <div className="h-64 rounded-lg overflow-hidden">
                <MapContainer center={[lat, lng]} zoom={15} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[lat, lng]}>
                    <Popup>
                      {meetingPoint}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Join This Drive</h3>
              <p className="text-gray-600 mb-4">
                Be a part of this impactful drive and help serve meals to those in need.
              </p>
              <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                Join This Drive <ArrowRight size={18} className="ml-2" />
              </button>
              <p className="text-xs text-gray-400 text-center mt-4">
                By joining, you agree to our volunteer guidelines.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}