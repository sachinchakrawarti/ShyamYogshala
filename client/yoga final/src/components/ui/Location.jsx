import { theme } from "../../config/theme";

const Location = () => {
  const mapSrc = import.meta.env.VITE_MAP_SRC;

  return (
    <div className="px-4 py-10 flex flex-col items-center">
      <h2 className={`text-3xl font-semibold mb-6 text-center ${theme.textColors.primary}`}>
        Our Location
      </h2>

      <div
        className={`w-full max-w-5xl h-[450px] rounded-2xl overflow-hidden shadow-lg ${theme.border.default}`}
      >
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shyam Yogshala Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
