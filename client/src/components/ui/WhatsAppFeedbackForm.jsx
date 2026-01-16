import { useState } from "react";
import { theme } from "../../config/theme";

const WhatsAppFeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, subject, message } = formData;

    const whatsappMessage =
      `Hello Shyam Yogshala,%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Contact Number: ${contact}%0A` +
      `Subject: ${subject}%0A` +
      `Message: ${message}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=918839726479&text=${whatsappMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="flex justify-center px-4 mb-10">
      <div className={`w-full max-w-3xl p-6 md:p-8 ${theme.border.default} ${theme.shadow.container} bg-white`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${theme.textColors.primary}`}>
          Have a Question or Feedback?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block mb-1 font-medium ${theme.textColors.secondary}`}>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          <div>
            <label className={`block mb-1 font-medium ${theme.textColors.secondary}`}>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          <div>
            <label className={`block mb-1 font-medium ${theme.textColors.secondary}`}>Contact Number</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact number"
              required
              className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          <div>
            <label className={`block mb-1 font-medium ${theme.textColors.secondary}`}>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
              className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          <div>
            <label className={`block mb-1 font-medium ${theme.textColors.secondary}`}>Your Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className={`px-6 py-2 font-semibold transition duration-300 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppFeedbackForm;
