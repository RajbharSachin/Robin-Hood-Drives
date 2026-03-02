import { useState, useEffect } from 'react';

const DEFAULT_LOCATION = { lat: 28.6139, lng: 77.2090, city: 'Delhi' };

export function useLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      setLocation(DEFAULT_LOCATION);
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          city: 'Your Location',
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLocation(DEFAULT_LOCATION);
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading };
}