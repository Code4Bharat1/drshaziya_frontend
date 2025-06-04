// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { MapPin } from "lucide-react";
// import dynamic from 'next/dynamic';

// // Dynamically import Leaflet only on client side
// const MapComponent = dynamic(() => import('./MapComponent'), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-[400px] lg:min-h-[500px] rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
//       <div className="text-center p-6">
//         <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           Loading Map...
//         </h3>
//         <p className="text-gray-600 text-sm text-center">
//           Interactive map will appear here
//         </p>
//       </div>
//     </div>
//   )
// });

// export default function ContactInfo() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);

//   //clicink scroll bar by hina
//   const [isClient, setIsClient] = useState(false);

//   const clinics = [
//     {
//       id: 1,
//       name: "Clinic 01",
//       subtitle: "VLSR - The Clinic",
//       address:
//         "2nd floor, Corinthian, Linking Road, Opp. DBS Bank, Khar West, Mumbai 400052",
//       coordinates: { lat: 19.0596, lng: 72.8295 }, // Khar West, Mumbai
//     },
//     {
//       id: 2,
//       name: "Clinic 02",
//       subtitle: "The Diagnostic Hub",
//       address:
//         "Florence, Nehru Road, Next to Axis Bank, Vakola, Santacruz East, Mumbai 400055",
//       coordinates: { lat: 19.0825, lng: 72.8499 }, // Santacruz East, Mumbai
//     },
//     {
//       id: 3,
//       name: "Clinic 03",
//       subtitle: "CritiCare Asia Hospital",
//       address:
//         "Building No 1, Kirol Road, off Lal Bahadur Shastri Marg, Near Kohinoor International School, Ali Yavar Jung, Kurla West, Mumbai 400070",
//       coordinates: { lat: 19.0728, lng: 72.8826 }, // Kurla West, Mumbai
//     },
//     {
//       id: 4,
//       name: "Clinic 04",
//       subtitle: "Plot No 516, Beside SBI, Teli Gali",
//       address: "Maheshwari Nagar Andheri East, Mumbai, Maharashtra 400069",
//       coordinates: { lat: 19.1136, lng: 72.8697 }, // Andheri East, Mumbai
//     },
//     {
//       id: 5,
//       name: "Clinic 05",
//       subtitle: "Mahavir center,vashi-Turbhe Rd sector 17 vashi",
//       address: "Navi Mumbai Maharashtra 400705",
//       coordinates: { lat: 19.0769, lng: 73.0169 }, // Vashi, Navi Mumbai
//     },
//     {
//       id: 6,
//       name: "Clinic 06",
//       subtitle: "Bussiness Point ,8-28/B, Dk sandhu margh chembur gaothan , chembur ",
//       address: "Mumbai Maharashtra 400071",
//       coordinates: { lat: 19.0626, lng: 72.8970 }, // Chembur, Mumbai
//     },
//   ];

//   useEffect(() => {
//     setIsClient(true);
    
//     // Get user's current location
//     if (typeof window !== 'undefined' && navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.log("Error getting location:", error);
//           // Default to Mumbai if location access denied
//           setUserLocation({ lat: 19.076, lng: 72.8777 });
//         }
//       );
//     } else {
//       // Default to Mumbai if geolocation not supported
//       setUserLocation({ lat: 19.076, lng: 72.8777 });
//     }
//   }, []);

//   const validateForm = () => {
//     const newErrors = {};
    
//     // Name validation - only letters and spaces allowed
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
//       newErrors.name = "Name should contain only letters and spaces";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name should be at least 2 characters long";
//     }
    
//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
//       newErrors.email = "Please enter a valid email address";
//     }
    
//     // Mobile validation - Indian mobile number format
//     if (!formData.mobile.trim()) {
//       newErrors.mobile = "Mobile number is required";
//     } else {
//       const mobileRegex = /^(\+91|91)?[6-9]\d{9}$/;
//       const cleanMobile = formData.mobile.replace(/\s+/g, '');
//       if (!mobileRegex.test(cleanMobile)) {
//         newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
//       }
//     }
    
//     // Message validation
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message should be at least 10 characters long";
//     } else if (formData.message.trim().length > 500) {
//       newErrors.message = "Message should not exceed 500 characters";
//     }
    
//     return newErrors;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     // Real-time validation for mobile number - allow only numbers, +, and spaces
//     if (name === 'mobile') {
//       const cleanValue = value.replace(/[^\d+\s]/g, '');
//       setFormData({
//         ...formData,
//         [name]: cleanValue,
//       });
//     } else if (name === 'name') {
//       // Allow only letters and spaces for name
//       const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
//       setFormData({
//         ...formData,
//         [name]: cleanValue,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();

//     if (Object.keys(formErrors).length === 0) {
//       // Hardcoded WhatsApp message with provided data
//       const whatsappMessage = `Hi Dr. Shazia Waghoo,

// I would like to book an appointment. Here are my details:

// *Name:* ${formData.name}
// *Email:* ${formData.email}
// *Mobile:* ${formData.mobile}
// *Message:* ${formData.message}

// Thank you!`;
//       const whatsappNumber = "+919833584847";
//       const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//         whatsappMessage
//       )}`;

//       // Redirect to WhatsApp (only in browser)
//       if (typeof window !== "undefined") {
//         window.open(whatsappUrl, "_blank");
//       }

//       // Reset form
//       setFormData({ name: "", email: "", mobile: "", message: "" });
//       setErrors({});
//     } else {
//       setErrors(formErrors);
//     }
//   };


// //email send data
// // const handleSubmit = (e) => {
// //   e.preventDefault();
// //   const formErrors = validateForm();

// //   if (Object.keys(formErrors).length === 0) {
// //     const templateParams = {
// //       from_name: formData.name,
// //       from_email: formData.email,
// //       from_mobile: formData.mobile,
// //       message: formData.message,
// //     };

// //     emailjs
// //       .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
// //       .then(
// //         (response) => {
// //           console.log('SUCCESS!', response.status, response.text);
// //           alert('Your message has been sent successfully!');

// //           // Reset form
// //           setFormData({ name: "", email: "", mobile: "", message: "" });
// //           setErrors({});
// //         },
// //         (err) => {
// //           console.error('FAILED...', err);
// //           alert('Oops! Something went wrong. Please try again later.');
// //         }
// //       );
// //   } else {
// //     setErrors(formErrors);
// //   }
// // };

//   const handleViewLocation = (clinic) => {
//     setSelectedLocation(clinic);
//   };

//   return (
//     <>
//       {/* CSS for continuous scrolling animation */}
//       <style jsx>{`
//   @keyframes scroll {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%); /* Half width for seamless loop */
//     }
//   }

//   .scroll-container {
//     animation: scroll 20s linear infinite; /* Medium speed for desktop */
//     width: 200%; /* Double width for duplicates */
//     display: flex;
//     gap: 1rem; /* Adjust gap as needed */
//   }

//   .scroll-container:hover {
//     animation-play-state: paused;
//   }

//   @media (max-width: 768px) {
//     .scroll-container {
//       animation: scroll 25s linear infinite; /* Slower speed for mobile - medium pace */
//       gap: 0.75rem; /* Smaller gap on mobile */
//     }
//   }

//   /* Keep all your other existing styles below */
//   .scrollbar-hide {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }

//   .scrollbar-hide::-webkit-scrollbar {
//     display: none;
//   }

//   .leaflet-container {
//     z-index: 1 !important;
//   }

//   /* Updated Mobile map container fixes - Medium size */
//   @media (max-width: 1024px) {
//     .map-container {
//       height: 400px !important;
//       min-height: 400px !important;
//     }
    
//     .map-container .leaflet-container {
//       height: 100% !important;
//       width: 100% !important;
//       border-radius: 0.5rem;
//     }
//   }

//   @media (max-width: 768px) {
//     .map-container {
//       height: 350px !important;
//       min-height: 350px !important;
//       /* Remove negative margins to keep container properly sized */
//       margin: 0;
//     }
    
//     .map-container .leaflet-container {
//       height: 100% !important;
//       width: 100% !important;
//       border-radius: 0.5rem; /* Keep border radius */
//     }
//   }

//   @media (max-width: 640px) {
//     .map-container {
//       height: 320px !important;
//       min-height: 320px !important;
//     }
//   }
// `}</style>

//       <div className="min-h-screen bg-[#F9F8FE] py-8 sm:py-12 mt-16 sm:mt-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Main Content Container */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative z-20">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//               {/* Contact Form Section */}
//               <div className="p-4 sm:p-6 lg:p-8 xl:p-12 order-1 lg:order-1">
//                 <div className="max-w-md mx-auto lg:max-w-none">
//                  <div className= "mb-15 ">
//                   <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                     <div>
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         maxLength="50"
//                         className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
//                           errors.name ? "border-red-500" : "border-[#C3C3C3]"
//                         }`}
//                       />
//                       {errors.name && (
//                         <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
//                       )}
//                     </div>

//                     <div>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
//                           errors.email ? "border-red-500" : "border-[#C3C3C3]"
//                         }`}
//                       />
//                       {errors.email && (
//                         <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
//                       )}
//                     </div>

//                     <div>
//                       <input
//                         type="tel"
//                         name="mobile"
//                         placeholder="Mobile Number"
//                         value={formData.mobile}
//                         onChange={handleInputChange}
//                         maxLength="13"
//                         className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
//                           errors.mobile ? "border-red-500" : "border-[#C3C3C3]"
//                         }`}
//                       />
//                       {errors.mobile && (
//                         <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.mobile}</p>
//                       )}
//                     </div>

//                     <div>
//                       <textarea
//                         name="message"
//                         placeholder="Your Message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         rows="4"
//                         maxLength="500"
//                         className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-lg text-sm sm:text-base ${
//                           errors.message ? "border-red-500" : "border-[#C3C3C3]"
//                         }`}
//                       ></textarea>
//                       <div className="text-right text-xs text-gray-500 mt-1">
//                         {formData.message.length}/500
//                       </div>
//                       {errors.message && (
//                         <p className="text-red-500 text-xs sm:text-sm mt-1">
//                           {errors.message}
//                         </p>
//                       )}
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full sm:w-auto bg-[#0085DC] hover:bg-[#004979] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-lg text-sm sm:text-base"
//                     >
//                       SEND REQUEST
//                     </button>
//                   </form>
//                 </div>
//               </div>
//               </div>

//               {/* Map Section */}
//               <div className="relative p-4 sm:p-6 lg:p-8 xl:p-12 order-2 lg:order-2 z-30">
//                 <div className="h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] relative z-40 map-container">
//                   {isClient && userLocation ? (
//                     <MapComponent 
//                       userLocation={userLocation}
//                       clinics={clinics}
//                       selectedLocation={selectedLocation}
//                     />
//                   ) : (
//                     <div className="w-full h-full rounded-lg shadow-lg bg-gray-100 flex items-center justify-center relative z-50">
//                       <div className="text-center p-4 sm:p-6">
//                         <MapPin className="w-8 sm:w-12 h-8 sm:h-12 text-blue-600 mx-auto mb-2 sm:mb-3" />
//                         <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
//                           Loading Map...
//                         </h3>
//                         <p className="text-gray-600 text-xs sm:text-sm text-center">
//                           Interactive map will appear here
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Clinic Locations with Continuous Scrolling Animation */}
//           <div className="mt-12 sm:mt-16">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
//               Our Clinic Locations
//             </h2>
//             <div className="overflow-hidden">
//               <div className="scroll-container flex gap-4 sm:gap-6" style={{ minWidth: 'calc(280px * 12)' }}>
//                 {/* Duplicate clinic cards for seamless scrolling */}
//                 {[...clinics, ...clinics].map((clinic, index) => (
//                   <div
//                     key={`${clinic.id}-${index}`}
//                     className="clinic-card-container bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 min-w-[250px] sm:min-w-[280px] max-w-[250px] sm:max-w-[280px] flex flex-col flex-shrink-0"
//                     style={{ border: 'none', outline: 'none' }}
//                   >
//                     <div className="clinic-card p-4 sm:p-6 h-full flex flex-col">
//                       {/* Icon */}
//                       <div className="flex justify-center mb-2 sm:mb-3">
//                         <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
//                       </div>
                      
//                       {/* Centered text container */}
//                       <div className="flex-grow text-center space-y-2 sm:space-y-3">
//                         <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//                           {clinic.name}
//                         </h3>
                        
//                         <p className="text-gray-800 font-medium text-sm sm:text-base">
//                           {clinic.subtitle}
//                         </p>
                        
//                         <p className="text-gray-600 text-xs sm:text-sm leading-snug px-1 sm:px-2">
//                           {clinic.address}
//                         </p>
//                       </div>

//                       <button
//                         onClick={() => handleViewLocation(clinic)}
//                         className="w-full bg-[#0085DC] hover:bg-[#004979] text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 mt-3 sm:mt-4 shadow-xl text-xs sm:text-sm"
//                       >
//                         VIEW LOCATION
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }








//More width 

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { MapPin } from "lucide-react";
// import dynamic from 'next/dynamic';

// // Dynamically import Leaflet only on client side
// const MapComponent = dynamic(() => import('./MapComponent'), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-[400px] lg:min-h-[500px] rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
//       <div className="text-center p-6">
//         <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           Loading Map...
//         </h3>
//         <p className="text-gray-600 text-sm text-center">
//           Interactive map will appear here
//         </p>
//       </div>
//     </div>
//   )
// });

// export default function ContactInfo() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [isClient, setIsClient] = useState(false);

//   const clinics = [
//     {
//       id: 1,
//       name: "Clinic 01",
//       subtitle: "VLSR - The Clinic",
//       address:
//         "2nd floor, Corinthian, Linking Road, Opp. DBS Bank, Khar West, Mumbai 400052",
//       coordinates: { lat: 19.0596, lng: 72.8295 },
//     },
//     {
//       id: 2,
//       name: "Clinic 02",
//       subtitle: "The Diagnostic Hub",
//       address:
//         "Florence, Nehru Road, Next to Axis Bank, Vakola, Santacruz East, Mumbai 400055",
//       coordinates: { lat: 19.0825, lng: 72.8499 },
//     },
//     {
//       id: 3,
//       name: "Clinic 03",
//       subtitle: "CritiCare Asia Hospital",
//       address:
//         "Building No 1, Kirol Road, off Lal Bahadur Shastri Marg, Near Kohinoor International School, Ali Yavar Jung, Kurla West, Mumbai 400070",
//       coordinates: { lat: 19.0728, lng: 72.8826 },
//     },
//     {
//       id: 4,
//       name: "Clinic 04",
//       subtitle: "Plot No 516, Beside SBI, Teli Gali",
//       address: "Maheshwari Nagar Andheri East, Mumbai, Maharashtra 400069",
//       coordinates: { lat: 19.1136, lng: 72.8697 },
//     },
//     {
//       id: 5,
//       name: "Clinic 05",
//       subtitle: "Mahavir center,vashi-Turbhe Rd sector 17 vashi",
//       address: "Navi Mumbai Maharashtra 400705",
//       coordinates: { lat: 19.0769, lng: 73.0169 },
//     },
//     {
//       id: 6,
//       name: "Clinic 06",
//       subtitle: "Bussiness Point ,8-28/B, Dk sandhu margh chembur gaothan , chembur ",
//       address: "Mumbai Maharashtra 400071",
//       coordinates: { lat: 19.0626, lng: 72.8970 },
//     },
//   ];

//   useEffect(() => {
//     setIsClient(true);
    
//     // Get user's current location
//     if (typeof window !== 'undefined' && navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.log("Error getting location:", error);
//           // Default to Mumbai if location access denied
//           setUserLocation({ lat: 19.076, lng: 72.8777 });
//         }
//       );
//     } else {
//       // Default to Mumbai if geolocation not supported
//       setUserLocation({ lat: 19.076, lng: 72.8777 });
//     }
//   }, []);

//   const validateForm = () => {
//     const newErrors = {};
    
//     // Name validation - only letters and spaces allowed
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
//       newErrors.name = "Name should contain only letters and spaces";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name should be at least 2 characters long";
//     }
    
//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
//       newErrors.email = "Please enter a valid email address";
//     }
    
//     // Mobile validation - Indian mobile number format
//     if (!formData.mobile.trim()) {
//       newErrors.mobile = "Mobile number is required";
//     } else {
//       const mobileRegex = /^(\+91|91)?[6-9]\d{9}$/;
//       const cleanMobile = formData.mobile.replace(/\s+/g, '');
//       if (!mobileRegex.test(cleanMobile)) {
//         newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
//       }
//     }
    
//     // Message validation
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message should be at least 10 characters long";
//     } else if (formData.message.trim().length > 500) {
//       newErrors.message = "Message should not exceed 500 characters";
//     }
    
//     return newErrors;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     // Real-time validation for mobile number - allow only numbers, +, and spaces
//     if (name === 'mobile') {
//       const cleanValue = value.replace(/[^\d+\s]/g, '');
//       setFormData({
//         ...formData,
//         [name]: cleanValue,
//       });
//     } else if (name === 'name') {
//       // Allow only letters and spaces for name
//       const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
//       setFormData({
//         ...formData,
//         [name]: cleanValue,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();

//     if (Object.keys(formErrors).length === 0) {
//       // Hardcoded WhatsApp message with provided data
//       const whatsappMessage = `Hi Dr. Shazia Waghoo,

// I would like to book an appointment. Here are my details:

// *Name:* ${formData.name}
// *Email:* ${formData.email}
// *Mobile:* ${formData.mobile}
// *Message:* ${formData.message}

// Thank you!`;
//       const whatsappNumber = "+919833584847";
//       const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//         whatsappMessage
//       )}`;

//       // Redirect to WhatsApp (only in browser)
//       if (typeof window !== "undefined") {
//         window.open(whatsappUrl, "_blank");
//       }

//       // Reset form
//       setFormData({ name: "", email: "", mobile: "", message: "" });
//       setErrors({});
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   const handleViewLocation = (clinic) => {
//     setSelectedLocation(clinic);
//   };

//   return (
//     <>
//       {/* CSS for map and layout */}
//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }

//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }

//         .leaflet-container {
//           z-index: 1 !important;
//         }

//         /* Mobile map container fixes */
//         @media (max-width: 1024px) {
//           .map-container {
//             height: 400px !important;
//             min-height: 400px !important;
//           }
          
//           .map-container .leaflet-container {
//             height: 100% !important;
//             width: 100% !important;
//             border-radius: 0.5rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .map-container {
//             height: 350px !important;
//             min-height: 350px !important;
//             margin: 0;
//           }
          
//           .map-container .leaflet-container {
//             height: 100% !important;
//             width: 100% !important;
//             border-radius: 0.5rem;
//           }
//         }

//         @media (max-width: 640px) {
//           .map-container {
//             height: 320px !important;
//             min-height: 320px !important;
//           }
//         }
//       `}</style>

//       <div className="min-h-screen bg-[#F9F8FE] py-8 sm:py-12 mt-16 sm:mt-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Main Content Container */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative z-20">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//               {/* Contact Form Section */}
//               <div className="p-4 sm:p-6 lg:p-8 xl:p-12 order-1 lg:order-1">
//                 <div className="max-w-md mx-auto lg:max-w-none">
//                   <div className="mb-15">
//                     <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                       <div>
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Your Name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           maxLength="50"
//                           className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
//                             errors.name ? "border-red-500" : "border-[#C3C3C3]"
//                           }`}
//                         />
//                         {errors.name && (
//                           <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
//                         )}
//                       </div>

//                       <div>
//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="Your Email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
//                             errors.email ? "border-red-500" : "border-[#C3C3C3]"
//                           }`}
//                         />
//                         {errors.email && (
//                           <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
//                         )}
//                       </div>

//                       <div>
//                         <input
//                           type="tel"
//                           name="mobile"
//                           placeholder="Mobile Number"
//                           value={formData.mobile}
//                           onChange={handleInputChange}
//                           maxLength="13"
//                           className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
//                             errors.mobile ? "border-red-500" : "border-[#C3C3C3]"
//                           }`}
//                         />
//                         {errors.mobile && (
//                           <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.mobile}</p>
//                         )}
//                       </div>

//                       <div>
//                         <textarea
//                           name="message"
//                           placeholder="Your Message"
//                           value={formData.message}
//                           onChange={handleInputChange}
//                           rows="4"
//                           maxLength="500"
//                           className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-lg text-sm sm:text-base ${
//                             errors.message ? "border-red-500" : "border-[#C3C3C3]"
//                           }`}
//                         ></textarea>
//                         <div className="text-right text-xs text-gray-500 mt-1">
//                           {formData.message.length}/500
//                         </div>
//                         {errors.message && (
//                           <p className="text-red-500 text-xs sm:text-sm mt-1">
//                             {errors.message}
//                           </p>
//                         )}
//                       </div>

//                       <button
//                         type="submit"
//                         className="w-full sm:w-auto bg-[#0085DC] hover:bg-[#004979] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-lg text-sm sm:text-base"
//                       >
//                         SEND REQUEST
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               {/* Map Section */}
//               <div className="relative p-4 sm:p-6 lg:p-8 xl:p-12 order-2 lg:order-2 z-30">
//                 <div className="h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] relative z-40 map-container">
//                   {isClient && userLocation ? (
//                     <MapComponent 
//                       userLocation={userLocation}
//                       clinics={clinics}
//                       selectedLocation={selectedLocation}
//                     />
//                   ) : (
//                     <div className="w-full h-full rounded-lg shadow-lg bg-gray-100 flex items-center justify-center relative z-50">
//                       <div className="text-center p-4 sm:p-6">
//                         <MapPin className="w-8 sm:w-12 h-8 sm:h-12 text-blue-600 mx-auto mb-2 sm:mb-3" />
//                         <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
//                           Loading Map...
//                         </h3>
//                         <p className="text-gray-600 text-xs sm:text-sm text-center">
//                           Interactive map will appear here
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Clinic Locations Grid */}
//           <div className="mt-12 sm:mt-16">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
//               Our Clinic Locations
//             </h2>
            
//             {/* Grid Layout - 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//               {clinics.map((clinic) => (
//                 <div
//                   key={clinic.id}
//                   className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//                 >
//                   <div className="p-4 sm:p-6 h-full flex flex-col">
//                     {/* Icon */}
//                     <div className="flex justify-center mb-3 sm:mb-4">
//                       <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
//                     </div>
                    
//                     {/* Centered text container */}
//                     <div className="flex-grow text-center space-y-2 sm:space-y-3">
//                       <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//                         {clinic.name}
//                       </h3>
                      
//                       <p className="text-gray-800 font-medium text-sm sm:text-base">
//                         {clinic.subtitle}
//                       </p>
                      
//                       <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2">
//                         {clinic.address}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() => handleViewLocation(clinic)}
//                       className="w-full bg-[#0085DC] hover:bg-[#004979] text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 mt-4 shadow-md text-sm sm:text-base"
//                     >
//                       VIEW LOCATION
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import dynamic from 'next/dynamic';

// Dynamically import Leaflet only on client side
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-[400px] lg:min-h-[500px] rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
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
  )
});

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const clinics = [
    {
      id: 1,
      name: "Clinic 01",
      subtitle: "VLSR - The Clinic",
      address:
        "2nd floor, Corinthian, Linking Road, Opp. DBS Bank, Khar West, Mumbai 400052",
      coordinates: { lat: 19.0596, lng: 72.8295 },
    },
    {
      id: 2,
      name: "Clinic 02",
      subtitle: "The Diagnostic Hub",
      address:
        "Florence, Nehru Road, Next to Axis Bank, Vakola, Santacruz East, Mumbai 400055",
      coordinates: { lat: 19.0825, lng: 72.8499 },
    },
    {
      id: 3,
      name: "Clinic 03",
      subtitle: "CritiCare Asia Hospital",
      address:
        "Building No 1, Kirol Road, off Lal Bahadur Shastri Marg, Near Kohinoor International School, Ali Yavar Jung, Kurla West, Mumbai 400070",
      coordinates: { lat: 19.0728, lng: 72.8826 },
    },
    {
      id: 4,
      name: "Clinic 04",
      subtitle: "Plot No 516, Beside SBI, Teli Gali",
      address: "Maheshwari Nagar Andheri East, Mumbai, Maharashtra 400069",
      coordinates: { lat: 19.1136, lng: 72.8697 },
    },
    {
      id: 5,
      name: "Clinic 05",
      subtitle: "Mahavir center,vashi-Turbhe Rd sector 17 vashi",
      address: "Navi Mumbai Maharashtra 400705",
      coordinates: { lat: 19.0769, lng: 73.0169 },
    },
    {
      id: 6,
      name: "Clinic 06",
      subtitle: "Bussiness Point ,8-28/B, Dk sandhu margh chembur gaothan ",
      address: " , chembur Mumbai Maharashtra 400071",
      coordinates: { lat: 19.0626, lng: 72.8970 },
    },
      {
      id: 7,
      name: "Clinic 07",
      subtitle: "NM Aesthetics ",
      address: "Shop no. 1, Kaku Kunj CHS Opposite Mazgaon Garden Sardar Balwant Singh Dodhi Marg Mazgaon, Mumbai - 10      ",
      coordinates: { lat: 19.0626, lng: 72.8970 },
    },
  ];

  useEffect(() => {
    setIsClient(true);
    
    // Get user's current location
    if (typeof window !== 'undefined' && navigator.geolocation) {
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

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation - only letters and spaces allowed
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should contain only letters and spaces";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name should be at least 2 characters long";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Mobile validation - Indian mobile number format
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else {
      const mobileRegex = /^(\+91|91)?[6-9]\d{9}$/;
      const cleanMobile = formData.mobile.replace(/\s+/g, '');
      if (!mobileRegex.test(cleanMobile)) {
        newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
      }
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message should not exceed 500 characters";
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Real-time validation for mobile number - allow only numbers, +, and spaces
    if (name === 'mobile') {
      const cleanValue = value.replace(/[^\d+\s]/g, '');
      setFormData({
        ...formData,
        [name]: cleanValue,
      });
    } else if (name === 'name') {
      // Allow only letters and spaces for name
      const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({
        ...formData,
        [name]: cleanValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    
    // Clear error when user starts typing
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

      // Redirect to WhatsApp (only in browser)
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank");
      }

      // Reset form
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleViewLocation = (clinic) => {
    setSelectedLocation(clinic);
  };

  return (
    <>
      {/* CSS for map and layout */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .leaflet-container {
          z-index: 1 !important;
        }

        /* Mobile map container fixes */
        @media (max-width: 1024px) {
          .map-container {
            height: 400px !important;
            min-height: 400px !important;
          }
          
          .map-container .leaflet-container {
            height: 100% !important;
            width: 100% !important;
            border-radius: 0.5rem;
          }
        }

        @media (max-width: 768px) {
          .map-container {
            height: 350px !important;
            min-height: 350px !important;
            margin: 0;
          }
          
          .map-container .leaflet-container {
            height: 100% !important;
            width: 100% !important;
            border-radius: 0.5rem;
          }
        }

        @media (max-width: 640px) {
          .map-container {
            height: 320px !important;
            min-height: 320px !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#F9F8FE] py-8 sm:py-12 mt-16 sm:mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Container */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Contact Form Section */}
              <div className="p-4 sm:p-6 lg:p-8 xl:p-12 order-1 lg:order-1">
                <div className="max-w-md mx-auto lg:max-w-none">
                  <div className="mb-15">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          maxLength="50"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
                            errors.name ? "border-red-500" : "border-[#C3C3C3]"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
                            errors.email ? "border-red-500" : "border-[#C3C3C3]"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Mobile Number"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          maxLength="13"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm sm:text-base ${
                            errors.mobile ? "border-red-500" : "border-[#C3C3C3]"
                          }`}
                        />
                        {errors.mobile && (
                          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.mobile}</p>
                        )}
                      </div>

                      <div>
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="4"
                          maxLength="500"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-lg text-sm sm:text-base ${
                            errors.message ? "border-red-500" : "border-[#C3C3C3]"
                          }`}
                        ></textarea>
                        <div className="text-right text-xs text-gray-500 mt-1">
                          {formData.message.length}/500
                        </div>
                        {errors.message && (
                          <p className="text-red-500 text-xs sm:text-sm mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-[#0085DC] hover:bg-[#004979] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-lg text-sm sm:text-base"
                      >
                        SEND REQUEST
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="relative p-4 sm:p-6 lg:p-8 xl:p-12 order-2 lg:order-2 z-30">
                <div className="h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] relative z-40 map-container">
                  {isClient && userLocation ? (
                    <MapComponent 
                      userLocation={userLocation}
                      clinics={clinics}
                      selectedLocation={selectedLocation}
                    />
                  ) : (
                    <div className="w-full h-full rounded-lg shadow-lg bg-gray-100 flex items-center justify-center relative z-50">
                      <div className="text-center p-4 sm:p-6">
                        <MapPin className="w-8 sm:w-12 h-8 sm:h-12 text-blue-600 mx-auto mb-2 sm:mb-3" />
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                          Loading Map...
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm text-center">
                          Interactive map will appear here
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Clinic Locations Grid */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
              Our Clinic Locations
            </h2>
            
            {/* Grid Layout - 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
              {clinics.map((clinic) => (
                <div
                  key={clinic.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-xs mx-auto w-full"
                >
                  <div className="p-3 sm:p-4 h-full flex flex-col">
                    {/* Icon */}
                    <div className="flex justify-center mb-2 sm:mb-3">
                      <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                    </div>
                    
                    {/* Centered text container */}
                    <div className="flex-grow text-center space-y-1 sm:space-y-2">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                        {clinic.name}
                      </h3>
                      
                      <p className="text-gray-800 font-medium text-md sm:text-sm">
                        {clinic.subtitle}
                      </p>
                      
                      <p className="text-gray-600 text-[16px] leading-relaxed px-1 underline">
                        {clinic.address}
                      </p>
                    </div>

                    <button
                      onClick={() => handleViewLocation(clinic)}
                      className="w-full bg-[#0085DC] hover:bg-[#004979] text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200 mt-3 shadow-md text-xs sm:text-sm"
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
    </>
  );
}


















