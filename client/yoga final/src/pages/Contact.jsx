import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import WhatsAppFeedbackForm from "../components/ui/WhatsAppFeedbackForm";
import Location from "../components/ui/Location";


const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Connect With Us
          </h1>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Reach out to begin your yoga journey or ask any questions about our classes.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-purple-600 text-xl"
                />
              </div>
              <h2 className="text-2xl font-bold text-purple-900">
                Contact Details
              </h2>
            </div>

            <div className="space-y-5">
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mt-1 mr-4 text-purple-600"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <a
                    href={import.meta.env.VITE_LOCATION_ADDRESS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    {import.meta.env.VITE_LOCATION_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mt-1 mr-4 text-purple-600"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <div className="space-y-1">
                    <a
                      href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`}
                      className="block text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      {import.meta.env.VITE_PHONE_NUMBER_1}
                    </a>
                    <a
                      href={`tel:${import.meta.env.VITE_PHONE_NUMBER_2}`}
                      className="block text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      {import.meta.env.VITE_PHONE_NUMBER_2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mt-1 mr-4 text-purple-600"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a
                    href={`mailto:${import.meta.env.VITE_EMAIL}`}
                    className="text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    {import.meta.env.VITE_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Hours */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-purple-600 text-xl"
                />
              </div>
              <h2 className="text-2xl font-bold text-purple-900">
                Studio Hours
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Weekdays (Mon - Fri)
                </h3>
                <div className="flex items-center text-purple-700">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mr-3 text-purple-600"
                  />
                  <div>
                    <p>Morning: 6 AM – 11 AM</p>
                    <p>Evening: 5 PM – 8 PM</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Weekends (Sat - Sun)
                </h3>
                <div className="flex items-center text-purple-700">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mr-3 text-purple-600"
                  />
                  <div>
                    <p>Morning: 7 AM – 12 PM</p>
                    <p>Evening: 4 PM – 7 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">
            Follow Our Journey
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href={import.meta.env.VITE_FACEBOOK_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href={import.meta.env.VITE_INSTAGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-md"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href={import.meta.env.VITE_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors shadow-md"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
     


          <WhatsAppFeedbackForm />
          <Location />
    

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-2xl p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            Ready to Begin Your Yoga Journey?
          </h2>
          <p className="text-purple-700 mb-6 max-w-2xl mx-auto">
            Contact us today to schedule your first session or ask any questions about our classes.
          </p>
          <a
            href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;