import React from "react";
import { Link } from "react-router-dom";

const YogaStudio = () => {
  const features = [
    {
      title: "Experienced Instructors",
      description: "Certified professionals guiding your wellness journey.",
      icon: "🧘‍♀️"
    },
    {
      title: "Peaceful Ambiance",
      description: "Serene environment for inner peace.",
      icon: "🌿"
    },
    {
      title: "Variety of Classes",
      description: "From Hatha to Vinyasa – choose what suits you best.",
      icon: "✨"
    },
    {
      title: "Central Location",
      description: "Easily accessible studio in the heart of the city.",
      icon: "📍"
    },
    {
      title: "Strong Community",
      description: "Supportive group classes that motivate and connect.",
      icon: "👥"
    },
    {
      title: "Affordable Plans",
      description: "Flexible pricing to suit every budget.",
      icon: "💰"
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art studio equipment and clean space.",
      icon: "🏛️"
    },
    {
      title: "Beginner Friendly",
      description: "No experience needed – start your journey now.",
      icon: "🆕"
    },
    {
      title: "Online Classes",
      description: "Practice from the comfort of your home.",
      icon: "💻"
    },
    {
      title: "Workshops & Retreats",
      description: "Special events to deepen your practice.",
      icon: "🌄"
    },
    {
      title: "Personal Attention",
      description: "Small batches for one-on-one guidance.",
      icon: "👁️"
    },
    {
      title: "Holistic Approach",
      description: "Combining yoga, meditation and nutrition.",
      icon: "🧠"
    }
  ];


  const faqs = [
    {
      question: "Is there convenient parking available?",
      answer: "Yes, we offer ample parking space right outside the studio."
    },
    {
      question: "What types of yoga classes do you offer?",
      answer: "We offer Hatha, Vinyasa, Ashtanga, Meditation, and Pranayama classes."
    },
    {
      question: "Are your instructors certified?",
      answer: "Yes, all our instructors are highly certified and experienced."
    },
    {
      question: "How can I join your yoga classes?",
      answer: "You can visit our studio or contact us to enroll in a class."
    },
    {
      question: "Do you offer special programs for beginners?",
      answer: "Yes, we have beginner-friendly classes with personalized attention."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Our Sacred Yoga Space
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover transformation through movement, breath and mindfulness in our tranquil oasis
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-lg hover:bg-purple-100 transition-colors shadow-lg"
          >
            Begin Your Journey
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
          Why Our Community Chooses Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{feature.title}</h3>
              <p className="text-purple-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Find Your Center With Us
          </h2>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-4">📍</span>
            <a
              href={import.meta.env.VITE_LOCATION_ADDRESS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-purple-900 text-xl font-medium transition-colors"
            >
              {import.meta.env.VITE_LOCATION_ADDRESS}
            </a>
            <p className="mt-4 text-purple-600 max-w-2xl">
              Our studio is conveniently located with easy access to public transportation and ample parking
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
            >
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
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl mb-8">
            Take the first step toward a healthier, more balanced life today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
         
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaStudio;