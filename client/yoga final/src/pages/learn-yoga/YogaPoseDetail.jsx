import React from "react";
import { useParams, Link } from "react-router-dom";
import { theme } from "../../config/theme";
import { yogaPoses } from "../../data/YogaPosesData";

const YogaPoseDetail = () => {
  const { id } = useParams();
  const pose = yogaPoses.find((p) => p.id === parseInt(id));

  if (!pose) {
    return <div className="text-center py-20">Pose not found</div>;
  }

  return (
    <div className={`${theme.background.section} min-h-screen ${theme.layout.sectionPadding}`}>
      <div className={`${theme.layout.containerWidth} mx-auto`}>
        <div className={`${theme.border.default} ${theme.shadow.container} overflow-hidden bg-white`}>
          <img src={pose.image} alt={pose.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <span className={`text-sm ${theme.textColors.highlight}`}>{pose.category}</span>
            <h1 className={`text-3xl font-bold ${theme.textColors.primary} mb-4`}>{pose.name}</h1>

            {pose.content.map((paragraph, index) => (
              <p key={index} className={`${theme.textColors.secondary} mb-4`}>
                {paragraph}
              </p>
            ))}

            <Link
              to="/yoga-poses"
              className={`px-4 py-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor}`}
            >
              ← Back to Poses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaPoseDetail;
