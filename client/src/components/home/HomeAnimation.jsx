import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../../config/theme";

const HomeAnimation = () => {
  const messages = [
    "Welcome to Shyam Yogshala",
    "Discover Inner Peace",
    "Transform Through Yoga",
    "Join Our Community",
    "Experience Holistic Wellness",
    "Traditional Yoga Practices",
    "Begin Your Spiritual Journey"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK;

  return (
    <div className={`w-full ${theme.background.section} ${theme.layout.sectionPadding}`}>
      <div className={`${theme.layout.containerWidth} mx-auto`}>
        <div className={`${theme.border.default} ${theme.shadow.container} overflow-hidden`}>
          <div className="relative text-center py-12 px-4 sm:px-8">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.textColors.primary} mb-6`}>
              Shyam Yogshala
            </h2>
            
            <div className="min-h-[100px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isVisible && (
                  <motion.div
                    key={currentMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-xl md:text-2xl font-medium ${theme.textColors.secondary}`}
                  >
                    {messages[currentMessage]}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>




            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
              <motion.a
                href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} font-bold py-3 px-6 ${theme.border.button} ${theme.shadow.button}`}
              >
                Call us
              </motion.a>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} font-bold py-3 px-6 ${theme.border.button} ${theme.shadow.button}`}
              >
                Connect on WhatsApp
              </motion.a>
            </div>




            <div className="mt-6">
              <p className={`text-lg ${theme.textColors.secondary}`}>
                Traditional yoga teachings • Personalized guidance • Spiritual growth
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-purple-200 rounded-full -translate-x-8 -translate-y-8 opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-200 rounded-full translate-x-8 translate-y-8 opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAnimation;