import React from "react";
import { FaHeartbeat, FaRegSmile, FaBaby, FaLeaf } from "react-icons/fa";

// Importing images
import PregnancyYoga1 from "../../assets/images/PregnancyYoga/PregnancyYoga1.jpg";
import PregnancyYoga2 from "../../assets/images/PregnancyYoga/PregnancyYoga2.jpg";
import PregnancyYoga3 from "../../assets/images/PregnancyYoga/PregnancyYoga3.jpg";
import PregnancyYoga4 from "../../assets/images/PregnancyYoga/PregnancyYoga4.jpg";

const PregnancyYoga = () => {
  const benefits = [
    { 
      icon: <FaHeartbeat className="text-4xl text-purple-600" />,
      title: "Physical Comfort", 
      text: "Relieves back pain, reduces swelling, and improves posture during pregnancy",
      image: PregnancyYoga1
    },
    { 
      icon: <FaRegSmile className="text-4xl text-purple-600" />,
      title: "Mental Relaxation", 
      text: "Reduces anxiety, promotes better sleep, and enhances emotional well-being",
      image: PregnancyYoga2
    },
    { 
      icon: <FaLeaf className="text-4xl text-purple-600" />,
      title: "Breathing & Endurance", 
      text: "Prepares for labor with specialized breathwork and gentle stretches",
      image: PregnancyYoga3
    },
    { 
      icon: <FaBaby className="text-4xl text-purple-600" />,
      title: "Bonding with Baby", 
      text: "Fosters a deeper connection between mother and baby through mindfulness",
      image: PregnancyYoga4
    }
  ];



  const faqs = [
    { 
      question: "Is pregnancy yoga safe for all trimesters?", 
      answer: "Yes, our classes are tailored for each stage of pregnancy. We modify poses appropriately for all trimesters, but always recommend consulting your doctor before starting any new exercise routine." 
    },
    { 
      question: "What should I wear for pregnancy yoga?", 
      answer: "Wear loose, comfortable clothing that allows easy movement. Maternity yoga pants and a supportive top are ideal. Avoid anything too tight around your belly." 
    },
    { 
      question: "How often should I practice pregnancy yoga?", 
      answer: "2-3 times per week is ideal for maintaining strength and flexibility. Even once a week can provide benefits, especially when combined with daily gentle movement at home." 
    },
    { 
      question: "Do I need prior yoga experience?", 
      answer: "No experience needed! Our classes are designed specifically for pregnant women at all levels. We provide modifications for every pose to accommodate all abilities." 
    },
    { 
      question: "Can pregnancy yoga help with labor preparation?", 
      answer: "Absolutely. The breathing techniques, pelvic floor exercises, and gentle stretches all help prepare your body for childbirth. Many of our students report shorter labors and better pain management." 
    }
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
          Nurturing Wellness for Moms-to-Be
        </h1>
        <p className="text-xl text-purple-700 max-w-3xl mx-auto">
          Gentle, specialized yoga to support your changing body and prepare for childbirth
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
          Benefits of Prenatal Yoga
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow"
            >
              <img 
                src={benefit.image} 
                alt={benefit.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{benefit.title}</h3>
                <p className="text-purple-600">{benefit.text}</p>
              </div>
            </div>
          ))}
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Prenatal Yoga Journey
          </h2>
          <p className="text-xl mb-8">
            Give yourself and your baby the gift of mindful movement and relaxation
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

export default PregnancyYoga;