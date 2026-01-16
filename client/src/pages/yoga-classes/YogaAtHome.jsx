import React from "react";
import { Link } from "react-router-dom";

// Import images
import YogaTrainer1 from "../../assets/images/YogaHome/YogaTrainer2.jpeg";
import YogaTrainer2 from "../../assets/images/YogaHome/YogaTrainer1.jpeg";
import YogaTrainer3 from "../../assets/images/YogaHome/YogaTrainer5.jpg";
import YogaTrainer4 from "../../assets/images/YogaHome/YogaTrainer4.jpg";
import YogaTrainer5 from "../../assets/images/YogaHome/YogaTrainer3.jpeg";
import YogaTrainer6 from "../../assets/images/YogaHome/YogaTrainer6.jpeg";
import YogaTrainer7 from "../../assets/images/YogaHome/YogaTrainer7.jpg";
import YogaTrainer8 from "../../assets/images/YogaHome/YogaTrainer8.jpeg";

const YogaHome = () => {
  const trainers = [
    { id: 1, name: "Yoga for Kids", image: YogaTrainer1, description: "Fun and engaging sessions for young yogis" },
    { id: 2, name: "Male Yoga Trainer", image: YogaTrainer2, description: "Specialized training for men's health" },
    { id: 3, name: "Prenatal Yoga", image: YogaTrainer3, description: "Gentle practice for expecting mothers" },
    { id: 4, name: "Senior Yoga", image: YogaTrainer4, description: "Modified poses for older adults" },
    { id: 5, name: "Personal Yoga", image: YogaTrainer5, description: "One-on-one customized sessions" },
    { id: 6, name: "Stress Relief Yoga", image: YogaTrainer6, description: "Techniques to calm the mind" },
    { id: 7, name: "Therapeutic Yoga", image: YogaTrainer7, description: "For injury recovery and rehabilitation" },
    { id: 8, name: "Weight Loss Yoga", image: YogaTrainer8, description: "Dynamic flows to boost metabolism" },
  ];

  const locations = [
    { name: "Delhi", color: "bg-orange-100" },
    { name: "Noida", color: "bg-yellow-100" },
    { name: "Ghaziabad", color: "bg-blue-100" },
    { name: "Gurugram", color: "bg-green-100" },
    { name: "Jaipur", color: "bg-red-100" },
    { name: "Lucknow", color: "bg-purple-100" },
    { name: "Pune", color: "bg-orange-100" },
    { name: "Mumbai", color: "bg-indigo-100" },
    { name: "Hyderabad", color: "bg-green-100" },
    { name: "Bangalore", color: "bg-pink-100" },
    { name: "Chennai", color: "bg-blue-100" },
    { name: "Chandigarh", color: "bg-green-100" },
    { name: "Faridabad", color: "bg-red-100" },
    { name: "Agra", color: "bg-gray-100" },
    { name: "Surat", color: "bg-brown-100" },
  ];

  const benefits = [
    { icon: "⏱️", title: "Flexible Scheduling", description: "Choose times that work for you" },
    { icon: "🏠", title: "Comfort of Home", description: "Practice in your own space" },
    { icon: "🎯", title: "Personalized Attention", description: "100% focus on your needs" },
    { icon: "🧘", title: "Customized Routines", description: "Tailored to your goals" },
  ];

  const faqs = [
    {
      question: "Is a personal yoga trainer better than group classes?",
      answer: "A personal yoga trainer provides customized sessions tailored to your specific needs, fitness level, and health goals, offering adjustments and modifications that group classes can't provide."
    },
    {
      question: "Do I need special equipment for home yoga?",
      answer: "You only need a yoga mat and comfortable clothing. Your trainer may recommend props like blocks or straps as you progress."
    },
    {
      question: "How frequently should I do personal yoga classes?",
      answer: "For best results, we recommend 3-5 sessions per week, but we can create a schedule that fits your lifestyle and goals."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Our trainers specialize in beginner-friendly instruction and will guide you through each pose with proper alignment and modifications."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
          Personal Yoga Training in Your Home
        </h1>
        <p className="text-xl text-purple-700 max-w-3xl mx-auto mb-8">
          Experience customized yoga sessions with certified instructors in the comfort of your home
        </p>
        <a
          href={import.meta.env.VITE_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg"
        >
          Book Your Free Trial
        </a>


           <div className="mt-4"></div>
           <a
            href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`}
           className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg  "
          >
            Call Us Now
          </a>

        
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Why Choose Home Yoga Training?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{benefit.title}</h3>
                <p className="text-purple-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
          Our Specialized Yoga Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow">
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-2">{trainer.name}</h3>
                <p className="text-purple-600 mb-4">{trainer.description}</p>
                <a
                  href={import.meta.env.VITE_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Enquire Now
                </a>

                <a
                  href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`}
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition-colors ml-4"
                  rel="noopener noreferrer"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Serving These Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {locations.map((city, index) => (
              <div key={index} className={`${city.color} p-4 rounded-lg shadow-sm text-center`}>
                <h3 className="font-medium text-gray-800">{city.name}</h3>
                <a
                  href={import.meta.env.VITE_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded transition-colors"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-lg text-purple-800 group-hover:text-purple-900">
                    {faq.question}
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-purple-600 mt-3 group-open:animate-fadeIn">
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Yoga Practice?
          </h2>
          <p className="text-xl mb-8">
            Experience the benefits of personalized yoga instruction in the comfort of your home
          </p>
          <a
            href={import.meta.env.VITE_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-100 transition-colors shadow-lg"
          >
            Book Your First Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default YogaHome;