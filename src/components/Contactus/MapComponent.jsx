import React, { useEffect, useRef, useState } from 'react';

// Dynamic import for Leaflet to avoid SSR issues
const MapComponent = ({ userLocation, clinics, selectedLocation }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [L, setL] = useState(null);
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  useEffect(() => {
    // Dynamically import Leaflet only on client side
    const loadLeaflet = async () => {
      try {
        const leaflet = await import('leaflet');
        await import('leaflet/dist/leaflet.css');
        
        // Fix for default marker icons in Leaflet
        delete leaflet.default.Icon.Default.prototype._getIconUrl;
        leaflet.default.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        });
        
        setL(leaflet.default);
      } catch (error) {
        console.error('Error loading Leaflet:', error);
      }
    };

    if (typeof window !== 'undefined') {
      loadLeaflet();
    }
  }, []);

  useEffect(() => {
    if (L && userLocation && mapRef.current && !isMapInitialized) {
      initializeMap();
    }
  }, [L, userLocation, isMapInitialized]);

  useEffect(() => {
    if (map && selectedLocation && markers.length > 0) {
      // Find the selected marker and open its popup
      const markerData = markers.find((m) => m.clinic.id === selectedLocation.id);
      if (markerData) {
        map.setView([selectedLocation.coordinates.lat, selectedLocation.coordinates.lng], 15);
        setTimeout(() => {
          markerData.marker.openPopup();
        }, 500);
      }
    }
  }, [selectedLocation, map, markers]);

  const initializeMap = () => {
    if (!L || !mapRef.current || !userLocation) return;

    try {
      // Clear any existing map
      if (map) {
        map.off();
        map.remove();
      }

      // Create new map instance
      const mapInstance = L.map(mapRef.current, {
        center: [userLocation.lat, userLocation.lng],
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: true,
        dragging: true,
        tap: true,
        touchZoom: true,
        doubleClickZoom: true,
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapInstance);

      setMap(mapInstance);
      setIsMapInitialized(true);

      // Add user location marker
      const userIcon = L.divIcon({
        html: `<div style="
          background-color: #00ff00; 
          width: 20px; 
          height: 20px; 
          border-radius: 50%; 
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        "></div>`,
        className: 'user-location-marker',
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      L.marker([userLocation.lat, userLocation.lng], {
        icon: userIcon,
        title: "Your Location"
      }).addTo(mapInstance).bindPopup("Your Location");

      // Add clinic markers
      const newMarkers = clinics.map((clinic) => {
        const clinicIcon = L.divIcon({
          html: `<div style="
            background-color: #dc2626; 
            width: 20px; 
            height: 20px; 
            transform: rotate(45deg);
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          "></div>`,
          className: 'clinic-marker',
          iconSize: [26, 26],
          iconAnchor: [13, 13]
        });

        const marker = L.marker([clinic.coordinates.lat, clinic.coordinates.lng], {
          icon: clinicIcon,
          title: clinic.name
        }).addTo(mapInstance);

        const popupContent = `
          <div style="padding: 12px; max-width: 280px; font-family: sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #1e40af; font-weight: bold; font-size: 16px;">${clinic.name}</h3>
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #374151; font-size: 14px;">${clinic.subtitle}</p>
            <p style="margin: 0; font-size: 13px; color: #6b7280; line-height: 1.4;">${clinic.address}</p>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: 'custom-popup'
        });

        return { marker, clinic };
      });

      setMarkers(newMarkers);

      // Fit map to show all markers
      const group = L.featureGroup([
        ...newMarkers.map(m => m.marker),
        L.marker([userLocation.lat, userLocation.lng])
      ]);
      
      mapInstance.fitBounds(group.getBounds().pad(0.1));

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (map) {
        map.off();
        map.remove();
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (map) {
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [map]);

  return (
    <>
      <style jsx>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
      `}</style>
      <div
        ref={mapRef}
        className="w-full h-full rounded-lg shadow-lg bg-gray-100"
        style={{ minHeight: '300px' }}
      />
    </>
  );
};

export default MapComponent;