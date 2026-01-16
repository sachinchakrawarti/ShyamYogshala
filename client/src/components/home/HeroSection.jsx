import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { theme } from "../../config/theme";


const yogaslider1 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750839766/yogaslider1_yakxzy.png";
const yogaslider2 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750839765/yogaslider2_pml0e2.jpg";
const yogaslider3 = "https://res.cloudinary.com/duhcdtmo7/image/upload/v1750839771/yogaslider4_roei3n.jpg";


const images = [
  {
    src: yogaslider1,
    alt: "Krishna and Yoga",
    title: "Divine Union with Yoga",
    text: "Embrace Lord Krishna's wisdom through mindful yogic practice.",
  },
  {
    src: yogaslider2,
    alt: "Yoga Slide 1",
    title: "Find Your Inner Peace",
    text: "Experience the power of yoga in daily life.",
  },
  {
    src: yogaslider3,
    alt: "Yoga Slide 2",
    title: "Strengthen Your Mind & Body",
    text: "Achieve balance with our expert yoga instructors.",
  },

];

const fallbackImage = "https://via.placeholder.com/1200x600?text=Yoga+Image+Loading";

const HeroSection = () => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackImage;
  };

  return (
    <div className={`${theme.background.section} flex items-center justify-center mt-[10px]`}>
      <div className="w-full max-w-screen-5xl mx-auto px-4">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          swipeable
          emulateTouch
          className="carousel-container"
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-[70vh] min-h-[400px] max-h-[800px]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl"
                onError={handleImageError}
                loading="lazy"
              />
              <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 bg-white/60 p-4 md:p-6 rounded-xl text-center w-[90%] max-w-[800px]">
                <h3 className={`font-bold text-[clamp(1.5rem,3vw,3rem)] ${theme.textColors.primary}`}>
                  {image.title}
                </h3>
                <p className={`font-semibold text-[clamp(1rem,2.5vw,1.5rem)] ${theme.textColors.secondary}`}>
                  {image.text}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;