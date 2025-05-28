"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function ClinicLocationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const clinics = [
    {
      id: 1,
      name: "Clinic 01",
      subtitle: "VLSR - The Clinic",
      address:
        "2nd floor, Corinthian, Linking Road, Opp. DBS Bank, Khar West, Mumbai 400052",
      coordinates: { lat: 19.0596, lng: 72.8295 }, // Khar West, Mumbai
    },
    {
      id: 2,
      name: "Clinic 02",
      subtitle: "The Diagnostic Hub",
      address:
        "Florence, Nehru Road, Next to Axis Bank, Vakola, Santacruz East, Mumbai 400055",
      coordinates: { lat: 19.0825, lng: 72.8499 }, // Santacruz East, Mumbai
    },
    {
      id: 3,
      name: "Clinic 03",
      subtitle: "CritiCare Asia Hospital",
      address:
        "Building No 1, Kirol Road, off Lal Bahadur Shastri Marg, Near Kohinoor International School, Ali Yavar Jung, Kurla West, Mumbai 400070",
      coordinates: { lat: 19.0728, lng: 72.8826 }, // Kurla West, Mumbai
    },
    {
      id: 4,
      name: "Clinic 04",
      subtitle: "Plot No 516, Beside SBI, Teli Gali",
      address: "Maheshwari Nagar Andheri East, Mumbai, Maharashtra 400069",
      coordinates: { lat: 19.1136, lng: 72.8697 }, // Andheri East, Mumbai
    },
    {
      id: 5,
      name: "Clinic 05",
      subtitle: "Mahavir center,vashi-Turbhe Rd sector 17 vashi",
      address: "Navi Mumbai Maharashtra 400705",
      coordinates: { lat: 19.1136, lng: 72.8697 }, // Andheri East, Mumbai
    },
    {
      id: 6,
      name: "Clinic 06",
      subtitle: "Bussiness Point ,8-28/B, Dk sandhu margh chembur gaothan , chembur ",
      address: "Mumbai Maharashtra 4000701",
      coordinates: { lat: 19.1136, lng: 72.8697 }, // Andheri East, Mumbai
    },
  ];

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error getting location:", error);
          // Default to Mumbai if location access denied
          setUserLocation({ lat: 19.076, lng: 72.8777 });
        }
      );
    } else {
      // Default to Mumbai if geolocation not supported
      setUserLocation({ lat: 19.076, lng: 72.8777 });
    }
  }, []);

  useEffect(() => {
    if (userLocation && mapRef.current) {
      initializeMap();
    }
  }, [userLocation]);

  const initializeMap = () => {
    // Clear any existing map
    if (map) {
      map.off();
      map.remove();
    }

    const mapInstance = L.map(mapRef.current).setView(
      [userLocation.lat, userLocation.lng],
      12
    );

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(mapInstance);

    setMap(mapInstance);

    // Add user location marker
    if (userLocation) {
      const userMarker = L.marker([userLocation.lat, userLocation.lng], {
        title: "Your Location",
        icon: L.divIcon({
          html: `<div style="background-color: #00ff00; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
          className: 'user-location-marker',
          iconSize: [20, 20]
        })
      }).addTo(mapInstance);
    }

    // Add clinic markers
    const newMarkers = clinics.map((clinic) => {
      const marker = L.marker([clinic.coordinates.lat, clinic.coordinates.lng], {
        title: clinic.name,
        icon: L.divIcon({
          html: `<div style="background-color: #ff0000; width: 16px; height: 16px; border-radius: 2px; transform: rotate(45deg); border: 2px solid white;"></div>`,
          className: 'clinic-marker',
          iconSize: [20, 20]
        })
      }).addTo(mapInstance);

      const popup = marker.bindPopup(`
        <div style="padding: 10px; max-width: 250px;">
          <h3 style="margin: 0 0 5px 0; color: #1e40af; font-weight: bold;">${clinic.name}</h3>
          <p style="margin: 0 0 5px 0; font-weight: 600;">${clinic.subtitle}</p>
          <p style="margin: 0; font-size: 14px; color: #666;">${clinic.address}</p>
        </div>
      `);

      return { marker, popup, clinic };
    });

    setMarkers(newMarkers);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Hardcoded WhatsApp message with provided data
      const whatsappMessage = `Hi Dr. Shazia Waghoo,

I would like to book an appointment. Here are my details:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Mobile:* ${formData.mobile}
*Message:* ${formData.message}

Thank you!`;
      const whatsappNumber = "+919833584847";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Redirect to WhatsApp
      window.open(whatsappUrl, "_blank");

      // Reset form
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleViewLocation = (clinic) => {
    setSelectedLocation(clinic);
    if (map) {
      map.setView([clinic.coordinates.lat, clinic.coordinates.lng], 15);
      const markerData = markers.find((m) => m.clinic.id === clinic.id);
      if (markerData) {
        markerData.marker.openPopup();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Contact Form Section */}
            <div className="p-6 sm:p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg ${
                      errors.name ? "border-red-500" : "border-[#C3C3C3]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg ${
                      errors.email ? "border-red-500" : "border-[#C3C3C3]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg ${
                      errors.mobile ? "border-red-500" : "border-[#C3C3C3]"
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-lg ${
                      errors.message ? "border-red-500" : "border-[#C3C3C3]"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-60 bg-[#0085DC] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
                >
                  SEND REQUEST
                </button>
              </form>
            </div>

            {/* Map Section - Responsive Height and Width */}
            <div className="relative p-6 sm:p-8 lg:p-12">
              <div
                ref={mapRef}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-[400px] lg:min-h-[500px] rounded-lg shadow-lg"
              ></div>
              {!map && (
                <div className="absolute inset-6 sm:inset-8 lg:inset-12 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Loading Map...
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      Interactive map will appear here
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Clinic Locations - Responsive Grid */}
        <div className="mt-16 overflow-x-auto scrollbar-hide max-w-[full] mx-auto lg:pl-1 lg:pr-1">
          <div className="flex gap-6 min-w-max pb-6">
            {clinics.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 min-w-[280px] max-w-[280px] flex flex-col"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  {/* Centered text container */}
                  <div className="flex-grow text-center space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {clinic.name}
                    </h3>
                    
                    <p className="text-gray-800 font-medium">
                      {clinic.subtitle}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-snug px-2">
                      {clinic.address}
                    </p>
                  </div>

                  <button
                    onClick={() => handleViewLocation(clinic)}
                    className="w-full bg-[#0085DC] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 mt-4 shadow-xl"
                  >
                    VIEW LOCATION
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}