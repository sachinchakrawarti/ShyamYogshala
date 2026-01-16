import React from 'react';
import { theme } from '../../config/theme';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import YogaPoseExplorer from '../../components/home/YogaPoseExplorer';


const LearnYoga = () => {
  // Social links from environment variables
  const socialLinks = {
    facebook: import.meta.env.VITE_FACEBOOK_LINK,
    instagram: import.meta.env.VITE_INSTAGRAM_LINK,
    whatsapp: import.meta.env.VITE_WHATSAPP_LINK,
    phone1: import.meta.env.VITE_PHONE_NUMBER_1,
    phone2: import.meta.env.VITE_PHONE_NUMBER_2,
    location: import.meta.env.VITE_LOCATION_ADDRESS_LINK,
    address: import.meta.env.VITE_LOCATION_ADDRESS,
    email: import.meta.env.VITE_EMAIL
  };

  return (
    <div className={`min-h-screen ${theme.background.section} font-sans`}>
      {/* Hero Section */}
      <section className={`${theme.layout.sectionPadding} text-center`}>
        <div className={`${theme.layout.containerWidth} mx-auto`}>
          <h1 className={`text-5xl font-bold ${theme.textColors.primary} mb-6`}>
            Welcome to Shyam Yogshala
          </h1>
          <p className={`text-xl ${theme.textColors.secondary} max-w-3xl mx-auto mb-8`}>
            Discover inner peace and physical wellness through our authentic yoga practices
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium`}
            >
              Chat on WhatsApp
            </a>
            <a 
              href={`tel:${socialLinks.phone1}`}
              className={`px-6 py-3 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium`}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>





      
    <YogaPoseExplorer />



      {/* Yoga Types Cards */}
      <section className={`${theme.layout.sectionPadding}`}>
        <div className={`${theme.layout.containerWidth} mx-auto`}>
          <h2 className={`text-3xl font-bold ${theme.textColors.primary} mb-12 text-center`}>
            Our Yoga Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hatha Yoga",
                description: "Traditional yoga practice focusing on asanas (postures) and pranayama (breathing exercises) to align and calm your body and mind.",
                benefits: [
                  "Improves flexibility and strength",
                  "Enhances respiratory function",
                  "Reduces stress and anxiety"
                ],
                duration: "60-90 minutes",
                level: "All levels"
              },
              {
                title: "Ashtanga Yoga",
                description: "Dynamic and physically demanding practice that synchronizes breath with progressive series of postures.",
                benefits: [
                  "Builds core strength",
                  "Detoxifies the body",
                  "Improves focus and discipline"
                ],
                duration: "90 minutes",
                level: "Intermediate/Advanced"
              },
              {
                title: "Prenatal Yoga",
                description: "Specialized yoga practice designed to support expecting mothers through all stages of pregnancy.",
                benefits: [
                  "Eases pregnancy discomfort",
                  "Prepares body for childbirth",
                  "Connects with baby"
                ],
                duration: "60 minutes",
                level: "All levels"
              },
              {
                title: "Yoga Therapy",
                description: "Personalized approach using yoga to address specific health conditions and promote healing.",
                benefits: [
                  "Addresses chronic pain",
                  "Improves mobility",
                  "Customized for individual needs"
                ],
                duration: "60-75 minutes",
                level: "All levels"
              },
              {
                title: "Meditation Sessions",
                description: "Guided meditation practices to cultivate mindfulness and inner peace.",
                benefits: [
                  "Reduces stress",
                  "Improves focus",
                  "Enhances emotional wellbeing"
                ],
                duration: "30-45 minutes",
                level: "All levels"
              },
              {
                title: "Kids Yoga",
                description: "Fun and engaging yoga practice designed specifically for children to develop body awareness and concentration.",
                benefits: [
                  "Improves coordination",
                  "Builds confidence",
                  "Enhances creativity"
                ],
                duration: "45 minutes",
                level: "Children (5-12 years)"
              }
            ].map((yogaType, index) => (
              <div key={index} className={`p-6 ${theme.ringEffect} ${theme.border.default} ${theme.shadow.container} bg-white hover:shadow-xl transition-shadow`}>
                <h3 className={`text-xl font-semibold ${theme.textColors.highlight} mb-3`}>{yogaType.title}</h3>
                <p className={`${theme.textColors.secondary} mb-4`}>{yogaType.description}</p>
                
                <div className="mb-4">
                  <h4 className={`font-medium ${theme.textColors.primary} mb-2`}>Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {yogaType.benefits.map((benefit, i) => (
                      <li key={i} className={theme.textColors.secondary}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className={`text-sm ${theme.textColors.badge} bg-purple-100 px-3 py-1 rounded-full`}>
                    {yogaType.level}
                  </span>
                  <span className={`text-sm ${theme.textColors.secondary}`}>
                    Duration: {yogaType.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${theme.layout.sectionPadding} ${theme.background.bookCoverSide}`}>
        <div className={`${theme.layout.containerWidth} mx-auto`}>
          <h2 className={`text-3xl font-bold ${theme.textColors.primary} mb-12 text-center`}>
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className={`p-6 ${theme.ringEffect} ${theme.border.default} ${theme.shadow.container} bg-white`}>
              <h3 className={`text-xl font-semibold ${theme.textColors.highlight} mb-4`}>Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mr-3 mt-1">📱</span>
                  <div>
                    <p className={theme.textColors.secondary}>Call us at:</p>
                    <a href={`tel:${socialLinks.phone1}`} className={`${theme.textColors.primary} font-medium hover:underline`}>
                      {socialLinks.phone1}
                    </a>
                    <a href={`tel:${socialLinks.phone2}`} className={`${theme.textColors.primary} font-medium hover:underline block mt-1`}>
                      {socialLinks.phone2}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="mr-3 mt-1">✉️</span>
                  <div>
                    <p className={theme.textColors.secondary}>Email us at:</p>
                    <a href={`mailto:${socialLinks.email}`} className={`${theme.textColors.primary} font-medium hover:underline`}>
                      {socialLinks.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="mr-3 mt-1">📍</span>
                  <div>
                    <p className={theme.textColors.secondary}>Visit us at:</p>
                    <a 
                      href={socialLinks.location} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${theme.textColors.primary} font-medium hover:underline`}
                    >
                      {socialLinks.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Cards */}
            <div className={`p-6 ${theme.ringEffect} ${theme.border.default} ${theme.shadow.container} bg-white`}>
              <h3 className={`text-xl font-semibold ${theme.textColors.highlight} mb-4`}>Connect With Us</h3>
              
              <div className="space-y-4">
                <a 
                  href={socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  <FaFacebook className="mr-3 text-2xl" />
                  <span className={theme.textColors.secondary}>Facebook</span>
                </a>
                
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  <FaInstagram className="mr-3 text-2xl" />
                  <span className={theme.textColors.secondary}>Instagram</span>
                </a>
                
                <a 
                  href={socialLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="mr-3 text-2xl" />
                  <span className={theme.textColors.secondary}>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnYoga;