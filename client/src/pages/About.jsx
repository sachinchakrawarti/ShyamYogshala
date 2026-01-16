import React from "react";
import {
  aboutUsContent,
  missionVisionValues,
  aboutPlatform,
  aboutImages,
  studioYoga,
  teacherFeedback,
  aboutFlexCards,
} from "../data/aboutData";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Us Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            {aboutUsContent.title}
          </h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            {aboutUsContent.description}
          </p>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionVisionValues.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-purple-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Platform */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            {aboutPlatform.title}
          </h2>
          <p className="text-xl text-purple-700 max-w-4xl mx-auto mb-12">
            {aboutPlatform.description}
          </p>

          {/* Flex Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutFlexCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-purple-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-purple-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Circular Image Gallery */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-8">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Yoga Image ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Studio Yoga Section */}
        <section className="mb-16 text-center bg-white rounded-xl p-12 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            {studioYoga.title}
          </h2>
          <p className="text-xl text-purple-700 max-w-4xl mx-auto">
            {studioYoga.description}
          </p>
        </section>

        {/* Yoga Teacher Feedback */}
        <section className="text-center bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-12 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            {teacherFeedback.title}
          </h2>
          <p className="text-xl text-purple-700 max-w-4xl mx-auto">
            {teacherFeedback.description}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;