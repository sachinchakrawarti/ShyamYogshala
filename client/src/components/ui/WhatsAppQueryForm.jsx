import { useState } from "react";
import { theme } from "../../config/theme";

const WhatsAppQueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    purpose: "",
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
    const { name, contact, email, purpose } = formData;

    const message =
      `Hello Shyam Yogshala,%0A` +
      `Name: ${name}%0A` +
      `Contact Number: ${contact}%0A` +
      `Email: ${email}%0A` +
      `Purpose of Joining Yoga: ${purpose}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=918839726479&text=${message}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="mt-10">
      <h2 className={`text-center text-2xl font-bold mb-6 ${theme.textColors.primary}`}>
        Get Query for Online Yoga Class
      </h2>

      <form
        onSubmit={handleSubmit}
        className={`bg-white p-6 md:p-8 ${theme.border.default} ${theme.shadow.container} max-w-3xl mx-auto`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className={`block font-semibold mb-1 ${theme.textColors.secondary}`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>

          <div>
            <label className={`block font-semibold mb-1 ${theme.textColors.secondary}`}>
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className={`block font-semibold mb-1 ${theme.textColors.secondary}`}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
          />
        </div>

        <div className="mb-6">
          <label className={`block font-semibold mb-1 ${theme.textColors.secondary}`}>
            Purpose of Joining Yoga
          </label>
          <textarea
            name="purpose"
            rows="4"
            placeholder="Enter your message"
            value={formData.purpose}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border border-purple-300 ${theme.border.button} focus:outline-none focus:ring-2 focus:ring-purple-400`}
          />
        </div>

        <button
          type="submit"
          className={`px-6 py-2 font-semibold transition duration-300 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WhatsAppQueryForm;
