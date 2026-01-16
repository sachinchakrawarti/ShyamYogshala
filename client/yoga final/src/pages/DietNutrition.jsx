import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from "../config/theme";  // Changed from "../../config/theme"
import { dietPlans, nutritionGuides, dietTips } from '../data/Diet_Nutrition_Data';

const DietNutrition = () => {
  return (
    <div className={`${theme.background.section} min-h-screen ${theme.layout.sectionPadding}`}>
      <div className={`${theme.layout.containerWidth} mx-auto`}>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold ${theme.textColors.primary} mb-4`}>Diet & Nutrition</h1>
          <p className={`text-xl ${theme.textColors.secondary} max-w-2xl mx-auto`}>
            Discover personalized diet plans and expert nutrition guidance for your health goals
          </p>
        </div>

        {/* Diet Plans Section */}
        <section className="mb-16">
          <h2 className={`text-2xl font-bold ${theme.textColors.primary} mb-8 text-center`}>Popular Diet Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dietPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`${theme.border.default} ${theme.shadow.container} overflow-hidden ${theme.ringEffect} bg-white`}
              >
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold ${theme.textColors.primary}`}>{plan.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${theme.textColors.badge} ${theme.background.navigationDots}`}>
                      {plan.difficulty}
                    </span>
                  </div>
                  <p className={`italic ${theme.textColors.secondary} mb-3`}>{plan.type}</p>
                  <p className={`${theme.textColors.secondary} mb-4`}>{plan.description}</p>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold ${theme.textColors.primary} mb-2`}>Key Benefits:</h4>
                    <ul className="space-y-1">
                      {plan.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className={`flex items-start ${theme.textColors.secondary}`}>
                          <span className="mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={`/diet-plans/${plan.id}`}
                    className={`mt-4 inline-block px-4 py-2 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} text-sm font-medium`}
                  >
                    View Plan Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nutrition Guides Section */}
        <section className={`${theme.border.default} ${theme.shadow.container} ${theme.ringEffect} bg-white p-8 mb-16`}>
          <h2 className={`text-2xl font-bold ${theme.textColors.primary} mb-8 text-center`}>Nutrition Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nutritionGuides.map((guide) => (
              <div key={guide.category}>
                <h3 className={`text-xl font-semibold ${theme.textColors.primary} mb-4`}>{guide.category}</h3>
                <div className="space-y-6">
                  {guide.topics.map((topic, index) => (
                    <div key={index} className={`p-4 ${theme.ringEffect} rounded-lg`}>
                      <h4 className={`font-bold ${theme.textColors.highlight} mb-2`}>{topic.title}</h4>
                      <p className={`${theme.textColors.secondary} mb-3`}>{topic.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className={`font-medium ${theme.textColors.primary}`}>Sources:</span>
                        {topic.sources.map((source, i) => (
                          <span key={i} className={`px-2 py-1 text-xs rounded-full ${theme.background.navigationDots} ${theme.textColors.secondary}`}>
                            {source}
                          </span>
                        ))}
                      </div>
                      <p className={`text-sm ${theme.textColors.primary}`}>
                        <span className="font-medium">Daily Need:</span> {topic.dailyNeed}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips & Meal Plan Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Diet Tips */}
          <div className={`${theme.border.default} ${theme.shadow.container} ${theme.ringEffect} bg-white p-8`}>
            <h2 className={`text-2xl font-bold ${theme.textColors.primary} mb-6`}>Healthy Eating Tips</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dietTips.map((tip, index) => (
                <li 
                  key={index} 
                  className={`flex items-start p-3 ${index % 2 === 0 ? 'bg-purple-50' : 'bg-white'} rounded-lg`}
                >
                  <span className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full ${theme.background.navigationDots} ${theme.textColors.primary} font-bold mr-3`}>
                    {index + 1}
                  </span>
                  <span className={theme.textColors.secondary}>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Meal Plan */}
          <div className={`${theme.border.default} ${theme.shadow.container} ${theme.ringEffect} bg-white p-8`}>
            <h2 className={`text-2xl font-bold ${theme.textColors.primary} mb-6`}>Sample Balanced Meal Plan</h2>
            <div className="space-y-4">
              {dietPlans[1].sampleMealPlan.map((meal, index) => (
                <div 
                  key={index} 
                  className={`p-4 ${index % 2 === 0 ? theme.buttonColors.secondaryButton.background : 'bg-purple-50'} ${theme.border.button} flex items-center`}
                >
                  <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${theme.background.navigationDots} ${theme.textColors.primary} font-bold mr-4`}>
                    {index + 1}
                  </span>
                  <div>
                    <h4 className={`font-semibold ${theme.textColors.primary}`}>{meal.meal}</h4>
                    <p className={theme.textColors.secondary}>{meal.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${theme.border.default} ${theme.shadow.container} ${theme.ringEffect} bg-gradient-to-r from-purple-100 to-white p-8 text-center rounded-xl`}>
          <h2 className={`text-2xl font-bold ${theme.textColors.primary} mb-4`}>Ready to Transform Your Diet?</h2>
          <p className={`${theme.textColors.secondary} mb-6 max-w-2xl mx-auto`}>
            Get personalized nutrition advice and meal plans tailored to your goals
          </p>
          <button className={`px-8 py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium`}>
           
          </button>
        </section>
      </div>
    </div>
  );
};

export default DietNutrition;