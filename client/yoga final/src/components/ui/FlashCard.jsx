import { useEffect, useState } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { theme } from '../../config/theme';

const FlashCard = () => {
  const [visible, setVisible] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  // Show/hide flashcard in loop (every 30 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setLoopCount(prev => prev + 1);
      }, 10000); // Show for 10 seconds
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [loopCount]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Glass effect card with pointer-events-auto to make it interactive */}
      <div 
        className={`relative bg-white bg-opacity-20 backdrop-blur-lg ${theme.border.default} ${theme.shadow.container} w-full max-w-md mx-4 p-6 pointer-events-auto`}
        style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
        }}
      >
        <button 
          onClick={() => setVisible(false)}
          className={`absolute top-3 right-3 ${theme.textColors.secondary} hover:${theme.textColors.primary} transition-colors`}
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="text-center">
          <h3 className={`text-2xl font-bold ${theme.textColors.primary} mb-3`}>
            Ready for Your Yoga Journey?
          </h3>
          
          <p className={`${theme.textColors.secondary} mb-6`}>
            Join Shyam Yogshala and transform your practice today
          </p>

          <div className="grid grid-cols-1 gap-3">
            <a
              href={import.meta.env.VITE_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center space-x-2 px-6 py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`}
              className={`flex items-center justify-center space-x-2 px-6 py-3 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
            >
              <FaPhone className="text-xl" />
              <span>Call Us Now</span>
            </a>

            <a
              href={import.meta.env.VITE_LOCATION_ADDRESS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center space-x-2 px-6 py-3 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
