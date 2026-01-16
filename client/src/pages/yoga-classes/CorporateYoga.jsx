import React from "react";
import { FaChartLine, FaUsers, FaBrain, FaHeartbeat } from "react-icons/fa";
import { theme } from "../../config/theme";
import CorporateYoga1 from "../../assets/images/CorporateYoga/CorporateYoga1.jpg";
import CorporateYoga2 from "../../assets/images/CorporateYoga/CorporateYoga2.jpg";
import CorporateYoga3 from "../../assets/images/CorporateYoga/CorporateYoga3.jpg";
import CorporateYoga4 from "../../assets/images/CorporateYoga/CorporateYoga4.jpg";

const CorporateYoga = () => {
  const benefits = [
    {
      icon: <FaHeartbeat className={`text-4xl ${theme.textColors.highlight}`} />,
      title: "Physical Well-being",
      text: "Improves flexibility, posture, and relieves stress from long work hours",
      image: CorporateYoga1,
    },
    {
      icon: <FaBrain className={`text-4xl ${theme.textColors.highlight}`} />,
      title: "Mental Resilience",
      text: "Enhances focus, reduces stress, and promotes emotional balance",
      image: CorporateYoga2,
    },
    {
      icon: <FaUsers className={`text-4xl ${theme.textColors.highlight}`} />,
      title: "Team Bonding",
      text: "Encourages a positive work culture through shared wellness activities",
      image: CorporateYoga3,
    },
    {
      icon: <FaChartLine className={`text-4xl ${theme.textColors.highlight}`} />,
      title: "Productivity Boost",
      text: "Reduces absenteeism and increases overall efficiency at work",
      image: CorporateYoga4,
    },
  ];

  const faqs = [
    {
      question: "Do employees need prior yoga experience?",
      answer:
        "No experience needed! Our corporate yoga sessions are designed for all fitness levels. We provide modifications for every pose and focus on accessibility for office workers of all abilities.",
    },
    {
      question: "How often are corporate yoga sessions conducted?",
      answer:
        "We recommend starting with weekly sessions to build consistency, but can customize a schedule that fits your company's needs - from daily quick sessions to monthly intensive workshops.",
    },
    {
      question: "What is the ideal duration of a corporate yoga session?",
      answer:
        "Sessions typically range from 30-60 minutes. We offer:\n- 15-20 minute 'desk yoga' breaks\n- 30 minute energizing sessions\n- 60 minute comprehensive classes\nAll designed to fit within work schedules.",
    },
    {
      question: "What is the recommended attire for corporate yoga?",
      answer:
        "Comfortable work-appropriate clothing that allows movement is perfect. Many employees participate in their regular work clothes. We adapt poses to accommodate professional attire.",
    },
    {
      question: "How can I measure the impact of corporate yoga on my organization?",
      answer:
        "We help track:\n- Employee satisfaction surveys\n- Absenteeism rates\n- Productivity metrics\n- Healthcare cost reductions\nMany companies see ROI within 3-6 months through improved performance and reduced stress-related issues.",
    },
  ];

  const programOptions = [
    {
      title: "Lunchtime Sessions",
      description: "30-45 minute classes during lunch breaks",
      bestFor: "Daily stress relief",
    },
    {
      title: "Morning Energizers",
      description: "15-20 minute sessions to start the day",
      bestFor: "Team motivation",
    },
    {
      title: "Executive Wellness",
      description: "Private sessions for leadership teams",
      bestFor: "Decision makers",
    },
    {
      title: "Department Workshops",
      description: "Team-building through partner yoga",
      bestFor: "Improving collaboration",
    },
  ];

  return (
    <div className={`${theme.background.section} text-center`}>
      {/* Hero Section */}
      <section className={`${theme.layout.sectionPadding} flex items-center justify-center`}>
        <div className={`${theme.layout.containerWidth}`}>
          <h1 className={`text-4xl md:text-5xl font-bold ${theme.textColors.primary} mb-6`}>
            Corporate Yoga for Modern Workplaces
          </h1>
          <p className={`text-xl ${theme.textColors.secondary} max-w-3xl mx-auto`}>
            Science-backed wellness programs that boost productivity, reduce stress, and enhance company culture
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${theme.layout.sectionPadding}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl font-bold ${theme.textColors.primary} mb-12`}>
            Measurable Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white ${theme.border.default} ${theme.shadow.container} hover:shadow-xl overflow-hidden transition-shadow text-center`}
              >
                <img src={benefit.image} alt={benefit.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className={`text-xl font-bold ${theme.textColors.primary} mb-2`}>{benefit.title}</h3>
                  <p className={theme.textColors.secondary}>{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className={`py-16 ${theme.layout.sectionPadding} ${theme.background.bookCoverSide} flex items-center justify-center`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold ${theme.textColors.primary} mb-12 text-center`}>
            Flexible Program Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {programOptions.map((program, index) => (
              <div
                key={index}
                className={`bg-white p-6 ${theme.border.default} ${theme.shadow.container} hover:shadow-lg transition-shadow text-center`}
              >
                <h3 className={`text-xl font-semibold ${theme.textColors.primary} mb-3`}>{program.title}</h3>
                <p className={theme.textColors.secondary}>{program.description}</p>
                <div className={`${theme.background.navigationDots} px-3 py-2 ${theme.border.default} mt-4`}>
                  <p className={`text-sm font-medium ${theme.textColors.badge}`}>Best for: {program.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${theme.layout.sectionPadding}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold ${theme.textColors.primary} mb-12`}>
            Corporate Wellness FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`bg-white p-6 ${theme.border.default} ${theme.shadow.container}`}>
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className={`text-lg ${theme.textColors.primary} group-hover:${theme.textColors.highlight}`}>
                      {faq.question}
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        className={theme.textColors.secondary}
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className={`${theme.textColors.secondary} mt-3 whitespace-pre-line group-open:animate-fadeIn`}>
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`${theme.layout.sectionPadding} bg-gradient-to-r ${theme.buttonColors.primaryButton.background} text-white`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Invest in Your Team's Well-being
          </h2>
          <p className="text-xl mb-8">
            Boost productivity, reduce healthcare costs, and improve employee retention through corporate yoga
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={import.meta.env.VITE_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-8 py-3 bg-white ${theme.textColors.primary} font-bold ${theme.border.button} hover:bg-blue-100 transition-colors ${theme.shadow.button}`}
            >
              Request Proposal
            </a>
            <a
              href="/contact"
              className={`inline-block px-8 py-3 border-2 border-white text-white font-bold ${theme.border.button} hover:bg-white hover:${theme.textColors.primary} transition-colors`}
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateYoga;
