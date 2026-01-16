import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../config/theme';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const healthQuotes = [
    "Health is a state of complete harmony of the body, mind and spirit.",
    "The greatest wealth is health.",
    "Take care of your body. It's the only place you have to live.",
    "Healthy citizens are the greatest asset any country can have.",
    "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    "A healthy outside starts from the inside.",
    "Good health is not something we can buy. However, it can be an extremely valuable savings account.",
    "Your health is what you make of it. Everything you do and think either adds to the vitality, energy, and spirit you possess or takes away from it.",
    "He who has health has hope; and he who has hope has everything.",
    "The first wealth is health."
  ];
  const randomQuote = healthQuotes[Math.floor(Math.random() * healthQuotes.length)];

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className={`${theme.layout.containerWidth} mx-auto ${theme.layout.sectionPadding} ${theme.background.section}`}>
      <div className={`max-w-4xl mx-auto p-8 ${theme.background.bookCoverSide} ${theme.border.default} ${theme.shadow.container}`}>
        {user ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* User Profile Section */}
            <div className="md:col-span-1">
              <div className={`p-6 ${theme.border.default} ${theme.shadow.container} rounded-xl`}>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-4xl text-purple-600">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <h2 className={`text-2xl font-bold mb-2 ${theme.textColors.primary}`}>
                    {user.name}
                  </h2>
                  <p className={`mb-4 ${theme.textColors.secondary}`}>
                    {user.email}
                  </p>
                  <button
                    onClick={handleLogout}
                    className={`px-4 py-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
                  >
                    Logout
                  </button>
                </div>
              </div>

              {/* Health Stats */}
              <div className={`mt-6 p-6 ${theme.border.default} ${theme.shadow.container} rounded-xl`}>
                <h3 className={`text-xl font-bold mb-4 ${theme.textColors.primary}`}>Health Stats</h3>
                <div className="space-y-3">
                  <div>
                    <p className={`text-sm ${theme.textColors.secondary}`}>Last Checkup</p>
                    <p className="font-medium">2 weeks ago</p>
                  </div>
                  <div>
                    <p className={`text-sm ${theme.textColors.secondary}`}>Blood Pressure</p>
                    <p className="font-medium">120/80 mmHg</p>
                  </div>
                  <div>
                    <p className={`text-sm ${theme.textColors.secondary}`}>BMI</p>
                    <p className="font-medium">22.5 (Normal)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Daily Quote */}
              <div className={`p-6 ${theme.border.default} ${theme.shadow.container} rounded-xl`}>
                <h3 className={`text-xl font-bold mb-2 ${theme.textColors.primary}`}>Daily Health Quote</h3>
                <blockquote className={`italic ${theme.textColors.secondary}`}>
                  "{randomQuote}"
                </blockquote>
              </div>

              {/* Recent Activity */}
              <div className={`p-6 ${theme.border.default} ${theme.shadow.container} rounded-xl`}>
                <h3 className={`text-xl font-bold mb-4 ${theme.textColors.primary}`}>Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Completed health survey</p>
                      <p className={`text-sm ${theme.textColors.secondary}`}>2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Scheduled next appointment</p>
                      <p className={`text-sm ${theme.textColors.secondary}`}>1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Tips */}
              <div className={`p-6 ${theme.border.default} ${theme.shadow.container} rounded-xl`}>
                <h3 className={`text-xl font-bold mb-4 ${theme.textColors.primary}`}>Health Tips</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Drink at least 8 glasses of water daily</li>
                  <li>Get 7-8 hours of sleep each night</li>
                  <li>Exercise for 30 minutes at least 5 days a week</li>
                  <li>Eat more fruits and vegetables</li>
                  <li>Take regular breaks if you sit for long periods</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className={`text-3xl font-bold mb-6 ${theme.textColors.primary}`}>
              Guest User <span className="text-purple-500">👤</span>
            </h2>
            <p className={`mb-6 text-lg ${theme.textColors.secondary}`}>
              You are not logged in.
            </p>

 <div className="flex justify-center space-x-4">
  <Link
    to="/login"
    className={`inline-block px-6 py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
  >
    Sign Up
  </Link>

  <Link
    to="/register"
    className={`inline-block px-6 py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
  >
    Create Account
  </Link>
</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;