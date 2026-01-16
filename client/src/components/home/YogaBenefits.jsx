import React from "react";
import { theme } from "../../config/theme";
const img1 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750840305/ChatGPT_Image_Jun_25_2025_02_00_05_PM_cqbyac.png";
const img2 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750840735/ChatGPT_Image_Jun_25_2025_02_07_11_PM_jxp3xi.png";
const img3 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750841246/ChatGPT_Image_Jun_25_2025_02_15_33_PM_qaoal2.png";
const img4 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750841649/ChatGPT_Image_Jun_25_2025_02_21_55_PM_p1s3cq.png";


const stats = [
  { title: "Years of Experience", number: "7+", desc: "Since 2018, we've been providing yoga services." },
  { title: "Happy Clients", number: "1200+", desc: "Our satisfied client base enjoys high-quality services." },
  { title: "Yoga Instructors", number: "1000+", desc: "Our expert yoga instructors excel in their fields." }
];

const benefits = [
  {
    title: "Enhances Flexibility",
    desc: "Regular yoga practice increases flexibility and improves posture.",
    img: img1
  },
  {
    title: "Reduces Stress",
    desc: "Yoga helps in reducing stress and promoting mental clarity.",
    img: img2
  },
  {
    title: "Boosts Strength",
    desc: "Strength-building poses enhance muscle endurance and stability.",
    img: img3
  },
  {
    title: "Improves Sleep",
    desc: "Practicing yoga relaxes the body and improves sleep quality.",
    img: img4
  }
];

const YogaBenefits = () => {
  return (
    <div className={`${theme.layout.sectionPadding}`}>
      
      {/* Numbers Speak Section */}
      <section className="text-center mb-12">
        <h2 className={`${theme.textColors.primary} font-bold text-2xl md:text-3xl mb-4`}>
          NUMBERS SPEAK
        </h2>
        <p className={`${theme.textColors.secondary} max-w-2xl mx-auto`}>
          We provide comprehensive data on our services, enabling you to make informed decisions based on factual information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className={`${theme.background.navigationDots} ${theme.border.default} ${theme.shadow.container} p-6 hover:shadow-lg transition-shadow`}
            >
              <h3 className={`${theme.textColors.primary} text-lg font-semibold mb-2`}>
                {item.title}
              </h3>
              <h2 className={`${theme.textColors.highlight} font-bold text-3xl mb-3`}>
                {item.number}
              </h2>
              <p className={theme.textColors.secondary}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Yoga Benefits Section */}
      <section className="mb-12">
        <h2 className={`${theme.textColors.primary} font-bold text-2xl md:text-3xl mb-8 text-center`}>
          Benefits of Yoga
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`${theme.background.navigationDots} ${theme.border.default} ${theme.shadow.container} p-6 hover:shadow-lg transition-shadow text-center`}
            >
              <img 
                src={benefit.img} 
                alt={benefit.title} 
                className="w-full h-70 object-cover rounded-lg mb-4"
              />
              <h5 className={`${theme.textColors.primary} font-bold text-lg mb-2`}>
                {benefit.title}
              </h5>
              <p className={theme.textColors.secondary}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YogaBenefits;
