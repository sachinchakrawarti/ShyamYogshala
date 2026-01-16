import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../config/theme";
import { yogaPoses } from "../../data/YogaPosesData";

const YogaPoses = () => {
  return (
    <div className={`${theme.background.section} min-h-screen ${theme.layout.sectionPadding}`}>
      <div className={`${theme.layout.containerWidth} mx-auto`}>
        <h1 className={`text-4xl font-bold ${theme.textColors.primary} mb-8 text-center`}>
          Learn Yoga Poses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {yogaPoses.map((pose) => (
            <div
              key={pose.id}
              className={`${theme.border.default} ${theme.shadow.container} overflow-hidden bg-white`}
            >
              <img src={pose.image} alt={pose.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className={`text-sm ${theme.textColors.highlight}`}>{pose.category}</span>
                <h2 className={`text-xl font-bold ${theme.textColors.primary} mb-2`}>
                  {pose.name}
                </h2>
                <p className={`${theme.textColors.secondary} mb-4`}>
                  {pose.content[0].substring(0, 80)}...
                </p>
                <Link
                  to={`/learn-yoga/yogapose/${pose.id}`}
                  className={`px-4 py-2 text-sm ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaPoses;
