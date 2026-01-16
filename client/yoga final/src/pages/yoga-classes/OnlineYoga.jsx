import React from "react";
import WhatsAppQueryForm from "../../components/ui/WhatsAppQueryForm";

const OnlineYoga1 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750844259/ChatGPT_Image_Jun_25_2025_02_31_11_PM_bwljl1.png";
const OnlineYoga2 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750844724/ChatGPT_Image_Jun_25_2025_03_13_46_PM_zjdjbu.png";

const OnlineYoga3 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750845201/ChatGPT_Image_Jun_25_2025_03_21_46_PM_y1dnsc.png";

const OnlineYoga4 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750846458/ChatGPT_Image_Jun_25_2025_03_42_28_PM_jbmimn.png";


import { FaLaptop, FaGlobe, FaUserCog, FaHeartbeat } from "react-icons/fa";

const OnlineYoga = () => {
  const features = [
    {
      icon: <FaLaptop className="text-4xl text-purple-600" />,
      title: "The Rise of Digital Yoga Practice",
      text: "Virtual yoga training allows individuals to practice yoga from the comfort of their homes. These sessions provide a flexible alternative to attending physical studios.",
      image: OnlineYoga1
    },
    {
      icon: <FaGlobe className="text-4xl text-purple-600" />,
      title: "Breaking Barriers: Accessibility and Convenience",
      text: "Online training eliminates geographical barriers, allowing practitioners to connect with instructors and fellow yogis worldwide.",
      image: OnlineYoga2
    },
    {
      icon: <FaUserCog className="text-4xl text-purple-600" />,
      title: "Personalized Learning, Anytime, Anywhere",
      text: "Choose yoga sessions that match your skill level and interests, whether you're a beginner or an advanced practitioner.",
      image: OnlineYoga3
    },
    {
      icon: <FaHeartbeat className="text-4xl text-purple-600" />,
      title: "Physical and Mental Well-being",
      text: "Engaging in virtual yoga improves flexibility, reduces stress, and fosters a deeper mind-body connection.",
      image: OnlineYoga4
    }
  ];

  const benefits = [
    { title: "Flexible Scheduling", icon: "⏰", description: "Practice when it suits your schedule" },
    { title: "Global Community", icon: "🌍", description: "Connect with yogis worldwide" },
    { title: "Cost Effective", icon: "💰", description: "More affordable than studio classes" },
    { title: "Replay Sessions", icon: "🔄", description: "Access recordings anytime" }
  ];

  const faqs = [
    {
      question: "Is online yoga suitable for beginners?",
      answer: "Absolutely! Our online yoga classes cater to all skill levels, with dedicated beginner programs that teach foundational poses and proper alignment."
    },
    {
      question: "Do I need special equipment for virtual yoga classes?",
      answer: "You only need a yoga mat and comfortable clothing. We'll guide you on how to use household items as props when needed."
    },
    {
      question: "Can I interact with the instructor during the online session?",
      answer: "Yes! Our live sessions include Q&A time, and instructors provide personalized feedback through our interactive platform."
    },
    {
      question: "How often should I practice online yoga?",
      answer: "For optimal benefits, we recommend:\n- Beginners: 3 sessions/week\n- Intermediate: 4-5 sessions/week\n- Advanced: Daily practice"
    },
    {
      question: "What if I have technical difficulties?",
      answer: "Our support team is available to help with any technical issues. We also provide detailed setup guides before your first class."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
          Transform Your Practice with Online Yoga
        </h1>
        <p className="text-xl text-purple-700 max-w-3xl mx-auto">
          Experience the benefits of yoga from anywhere - flexible schedules, expert instructors, and a global community
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow"
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-70 object-cover overflow-hidden"
              />
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-purple-600 text-center">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Why Choose Online Yoga?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{benefit.title}</h3>
                <p className="text-purple-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <WhatsAppQueryForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
          Frequently Asked Questions
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
                <p className="text-purple-600 mt-3 whitespace-pre-line group-open:animate-fadeIn">
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
            Begin Your Online Yoga Journey Today
          </h2>
          <p className="text-xl mb-8">
            Join thousands of practitioners experiencing the transformative power of yoga from home
          </p>
          <a
            href="#whatsapp-form"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-100 transition-colors shadow-lg"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default OnlineYoga;