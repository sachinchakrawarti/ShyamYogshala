import React from 'react';
import { theme } from '../../config/theme';

// Yoga type images (replace with your actual image paths)
const yogaImages = {
  hatha: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
  ashtanga: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80',
  vinyasa: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  prenatal: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1030&q=80',
  meditation: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  kids: 'https://i.pinimg.com/736x/39/fd/23/39fd23ac832e08a9141d30057cb7fc55.jpg'
};

const TypesOfYoga = () => {
  const yogaTypes = [
    {
      id: 1,
      title: "Hatha Yoga",
      image: yogaImages.hatha,
      description: "The foundation of all yoga styles focusing on basic postures and breathing techniques.",
      benefits: [
        "Improves flexibility and balance",
        "Reduces stress and anxiety",
        "Enhances mind-body connection"
      ],
      duration: "60-75 minutes",
      level: "All Levels"
    },
    {
      id: 2,
      title: "Ashtanga Yoga",
      image: yogaImages.ashtanga,
      description: "A rigorous style following a specific sequence of postures with synchronized breathing.",
      benefits: [
        "Builds core strength and endurance",
        "Detoxifies the body",
        "Improves focus and discipline"
      ],
      duration: "90 minutes",
      level: "Intermediate/Advanced"
    },
    {
      id: 3,
      title: "Vinyasa Flow",
      image: yogaImages.vinyasa,
      description: "Dynamic movement synchronized with breath for a flowing, dance-like practice.",
      benefits: [
        "Increases cardiovascular health",
        "Enhances coordination",
        "Promotes creative expression"
      ],
      duration: "60-75 minutes",
      level: "All Levels"
    },
    {
      id: 4,
      title: "Prenatal Yoga",
      image: yogaImages.prenatal,
      description: "Specialized practice designed to support expecting mothers through all stages of pregnancy.",
      benefits: [
        "Eases pregnancy discomfort",
        "Prepares body for childbirth",
        "Connects with baby"
      ],
      duration: "60 minutes",
      level: "All Levels"
    },
    {
      id: 5,
      title: "Meditation & Mindfulness",
      image: yogaImages.meditation,
      description: "Guided practices to cultivate present-moment awareness and inner peace.",
      benefits: [
        "Reduces stress and anxiety",
        "Improves focus and clarity",
        "Enhances emotional wellbeing"
      ],
      duration: "30-45 minutes",
      level: "All Levels"
    },
    {
      id: 6,
      title: "Kids Yoga",
      image: yogaImages.kids,
      description: "Fun and engaging practice designed specifically for children's development.",
      benefits: [
        "Improves body awareness",
        "Builds confidence",
        "Enhances concentration"
      ],
      duration: "45 minutes",
      level: "Children (5-12 years)"
    }
  ];

  return (
    <div className={`${theme.layout.sectionPadding} ${theme.background.section}`}>
      <div className={`${theme.layout.containerWidth} mx-auto`}>
        <h1 className={`text-4xl font-bold ${theme.textColors.primary} mb-4 text-center`}>
          Types of Yoga We Offer
        </h1>
        <p className={`text-xl ${theme.textColors.secondary} max-w-3xl mx-auto mb-12 text-center`}>
          Discover the perfect yoga style for your needs and experience level
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yogaTypes.map((yoga) => (
            <div 
              key={yoga.id} 
              className={`${theme.border.default} ${theme.shadow.container} overflow-hidden bg-white hover:shadow-xl transition-shadow`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={yoga.image} 
                  alt={yoga.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h2 className={`text-xl font-semibold ${theme.textColors.highlight} mb-3`}>
                  {yoga.title}
                </h2>
                <p className={`${theme.textColors.secondary} mb-4`}>
                  {yoga.description}
                </p>
                
                <div className="mb-4">
                  <h3 className={`font-medium ${theme.textColors.primary} mb-2`}>
                    Key Benefits:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {yoga.benefits.map((benefit, index) => (
                      <li key={index} className={theme.textColors.secondary}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                

















                
                <div className="flex justify-between items-center mt-4">
                  <span className={`text-sm ${theme.textColors.badge} bg-purple-100 px-3 py-1 rounded-full`}>
                    {yoga.level}
                  </span>
                  <span className={`text-sm ${theme.textColors.secondary}`}>
                    Duration: {yoga.duration}
                  </span>
                </div>










                
              </div>










              
            </div>
          ))}
        </div>




        
      </div>
      



      
    </div>
  );
};

export default TypesOfYoga;