import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contactui = () => {
  // Environment variables
  const facebookLink = import.meta.env.VITE_FACEBOOK_LINK;
  const instagramLink = import.meta.env.VITE_INSTAGRAM_LINK;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const phoneNumber1 = import.meta.env.VITE_PHONE_NUMBER_1;
  const phoneNumber2 = import.meta.env.VITE_PHONE_NUMBER_2;
  const locationAddress = import.meta.env.VITE_LOCATION_ADDRESS;
  const locationAddressLink = import.meta.env.VITE_LOCATION_ADDRESS_LINK;
  const emailAddress = import.meta.env.VITE_EMAIL;
  
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Query+for+Yoga+Classes`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href={facebookLink}
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={instagramLink}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={whatsappLink}
              className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Contact Info</h3>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <FaPhoneAlt className="text-purple-600 mt-1" size={14} />
              <div>
                <a href={`tel:${phoneNumber1}`} className="text-gray-700 hover:text-purple-600 transition-colors">
                  {phoneNumber1}
                </a>
                <br />
                <a href={`tel:${phoneNumber2}`} className="text-gray-700 hover:text-purple-600 transition-colors">
                  {phoneNumber2}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <FaEnvelope className="text-purple-600 mt-1" size={14} />
              <a href={`mailto:${emailAddress}`} className="text-gray-700 hover:text-purple-600 transition-colors">
                {emailAddress}
              </a>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Our Studio</h3>
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-purple-600 mt-1" size={14} />
            <a
              href={locationAddressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {locationAddress}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactui;