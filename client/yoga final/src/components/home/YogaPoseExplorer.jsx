import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const yogaPoses = [
  {
    id: 1,
    englishName: "Downward-Facing Dog",
    benefits: "Strengthens arms and legs, stretches shoulders and hamstrings",
    imageUrl: "https://res.cloudinary.com/duhcdtmo7/image/upload/v1753358494/ChatGPT_Image_Jul_24_2025_05_29_00_PM_nro4el.png"
  },
  {
    id: 2,
    englishName: "Warrior II",
    benefits: "Strengthens legs and arms, improves balance and concentration",
    imageUrl: "https://res.cloudinary.com/duhcdtmo7/image/upload/v1753358618/ChatGPT_Image_Jul_24_2025_05_31_47_PM_dj9eih.png"
  },
  {
    id: 3,
    englishName: "Tree Pose",
    benefits: "Improves balance, strengthens thighs and core",
    imageUrl: "https://res.cloudinary.com/duhcdtmo7/image/upload/v1753359875/treepose_gwvr5f.png"
  },
  {
    id: 4,
    englishName: "Plank Pose",
    benefits: "Strengthens arms, shoulders, and core",
    imageUrl: "https://res.cloudinary.com/duhcdtmo7/image/upload/v1753358903/ChatGPT_Image_Jul_24_2025_05_37_54_PM_gbfkeb.png"
  },
];

const YogaPoseExplorer = () => {
  const [selectedPose, setSelectedPose] = useState(null);

  // Image container styles for perfect coverage
  const styles = {
    container: "bg-gradient-to-b from-purple-300 to-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen",
    innerContainer: "max-w-7xl mx-auto",
    heading: "text-3xl font-bold text-purple-900 mb-8 text-center",
    
    // Card styles with full image coverage
    card: "relative rounded-xl shadow-2xl bg-white overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ring-1 ring-inset ring-purple-200",
    imageContainer: "w-90 pt-[100%] relative", // 1:1 aspect ratio container
    cardImage: "absolute top-0 left-0 w-full h-full object-cover",
    cardContent: "p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent",
    cardTitle: "text-lg font-semibold text-white",
    
    // Detail view styles
    detailContainer: "rounded-xl shadow-xl bg-white p-6 md:p-8 ring-1 ring-inset ring-purple-200",
    detailImageContainer: "w-full pt-[75%] relative", // 4:3 aspect ratio
    detailImage: "absolute top-0 left-0 w-full h-full object-cover rounded-t-xl",
    detailTitle: "text-2xl font-bold text-purple-900 mb-4",
    detailText: "text-purple-700 mb-4 text-lg",
    highlightText: "font-semibold text-purple-600 mb-2 text-xl",
    
    // Button styles
    buttonSecondary: "border-2 border-purple-400 hover:bg-purple-50 text-purple-600 rounded-lg shadow-md hover:shadow-lg px-6 py-3 text-lg transition-all",
    buttonPrimary: "bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg px-8 py-4 font-medium text-lg transition-all mx-auto block w-fit"
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>Yoga Pose Explorer</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {yogaPoses.map(pose => (
            <div 
              key={pose.id}
              className={styles.card}
              onClick={() => setSelectedPose(pose)}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={pose.imageUrl} 
                  alt={pose.englishName} 
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {pose.englishName}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <Link to="/yoga-poses" className={styles.buttonPrimary}>
            Explore All Poses
          </Link>
        </div>

        {selectedPose && (
          <div className={styles.detailContainer}>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <div className={styles.detailImageContainer}>
                  <img 
                    src={selectedPose.imageUrl} 
                    alt={selectedPose.englishName} 
                    className={styles.detailImage}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className={styles.detailTitle}>
                  {selectedPose.englishName}
                </h2>
                <h3 className={styles.highlightText}>Benefits:</h3>
                <p className={styles.detailText}>
                  {selectedPose.benefits}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button 
                    onClick={() => setSelectedPose(null)}
                    className={styles.buttonSecondary}
                  >
                    Back to Poses
                  </button>
                  <Link 
                    to="/yoga-poses" 
                    className={styles.buttonSecondary}
                  >
                    View All Poses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YogaPoseExplorer;