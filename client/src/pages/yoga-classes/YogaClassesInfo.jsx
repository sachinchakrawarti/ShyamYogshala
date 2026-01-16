import React from "react";

// Importing logos & icons

import studioLogo from '../../assets/images/YogaClasses/YogaClasses2.png';
import homeLogo from '../../assets/images/YogaClasses/YogaClasses3.png';
import onlineLogo from '../../assets/images/YogaClasses/YogaClasses4.png';
import corporateYogaLogo from '../../assets/images/YogaClasses/YogaClasses5.png';
import pregnancyYogaLogo from '../../assets/images/YogaClasses/YogaClasses6.png';
import careerYogaLogo from '../../assets/images/YogaClasses/YogaClasses7.png';



const YogaClassCard = ({ logo, title, description, link, featured = false }) => (
  <div className={`p-8 rounded-2xl flex flex-col items-center transition-all duration-300 ${featured ? 'bg-gradient-to-br from-purple-50 to-white shadow-xl' : 'bg-white shadow-lg hover:shadow-xl'}`}>
    <img 
      src={logo} 
      alt={title} 
      className="w-24 h-24 mb-6 object-contain"
    />
    <h3 className="text-2xl font-bold text-purple-900 mb-3 text-center">{title}</h3>
    <p className="text-purple-700 mb-6 text-center">{description}</p>
    <a
      href={link}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${featured ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'}`}
    >
      Know More
    </a>
  </div>
);

const YogaClasses = () => {
  const basicClasses = [
    { logo: studioLogo, title: "Studio Yoga Classes", description: "Unwind your body and mind with our studio yoga.", link: "/yoga-studio" },
    { logo: homeLogo, title: "Home Yoga Classes", description: "Bring the studio to your home with our yoga classes.", link: "/yoga-home" },
    { logo: onlineLogo, title: "Online Yoga Classes", description: "Practice yoga anywhere with our expert-led online classes.", link: "/online-yoga" },
  ];

  const advancedClasses = [
    { logo: corporateYogaLogo, title: "Corporate Yoga Classes", description: "Boost productivity and well-being with our corporate yoga classes.", link: "/corporate-yoga", featured: true },
    { logo: pregnancyYogaLogo, title: "Yoga For Pregnancy", description: "Namaste for two: Nurturing bodies, calming minds, embracing motherhood.", link: "/pregnancy-yoga", featured: true },
    { logo: careerYogaLogo, title: "Career In Yoga", description: "Find your flow, guide others to theirs, transform lives.", link: "/career-in-yoga", featured: true },
  ];


  const benefits = [
    { title: "Improved Flexibility", icon: "🧘", description: "Gradually increase your range of motion" },
    { title: "Stress Relief", icon: "😌", description: "Reduce anxiety and find inner peace" },
    { title: "Strength Building", icon: "💪", description: "Develop core strength and stability" },
    { title: "Better Posture", icon: "🚶", description: "Align your body and reduce back pain" },
    { title: "Mindfulness", icon: "🧠", description: "Cultivate present-moment awareness" },
    { title: "Community", icon: "👥", description: "Join a supportive yoga community" },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
          Discover Your Yoga Journey
        </h1>
        <p className="text-xl text-purple-700 max-w-3xl mx-auto">
          Yoga is more than just a physical practice – it's a way of life that can help you achieve greater health, happiness, and fulfillment.
        </p>
      </section>

     

      {/* Basic Classes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
          Our Core Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {basicClasses.map((yogaClass, index) => (
            <YogaClassCard key={index} {...yogaClass} />
          ))}
        </div>
      </section>

      {/* Advanced Classes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Specialized Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedClasses.map((yogaClass, index) => (
              <YogaClassCard key={index} {...yogaClass} featured />
            ))}
          </div>
        </div>
      </section>

     
    {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
          Why Choose Yoga?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-4xl mb-4 block">{benefit.icon}</span>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{benefit.title}</h3>
              <p className="text-purple-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
         
          <h2 className="text-3xl md:text-4xl font-bold mb-6">JOIN US TODAY</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to experience the transformative power of yoga for yourself? Join us at <strong>Shyamyogshala</strong> and discover the many benefits of this ancient practice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
         <a
            href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`}
            className="inline-block bg-pink-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Call Us Now
          </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaClasses;