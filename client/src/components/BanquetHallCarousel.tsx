
import React, { useEffect } from "react";

const BanquetHallCarousel: React.FC = () => {
  // Preload hover image for instant switching
  useEffect(() => {
    const hoverImg = new Image();
    hoverImg.src = "/assets/banquet hover.png";
  }, []);

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-8 xs:py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#f7f3f0]"
      id="banquet-hall-carousel"
    >
      <h2 className="font-bold mb-6 xs:mb-8 text-center text-[#6d4c1b] tracking-tight underline decoration-[#6d4c1b] decoration-2 underline-offset-4" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
        Celebrate in Style
      </h2>
      
      <div className="w-full max-w-5xl mx-auto flex justify-center px-4">
        <div className="relative overflow-hidden cursor-pointer border-[1.5px] border-[#6d4c1b] card-shadow bg-white w-full">
          <div className="banquet-image-container">
            <img
              src="/assets/banquet not hover.png"
              alt="Banquet Hall"
              className="w-full h-full object-cover select-none transition-opacity duration-300 ease-in-out"
              draggable={false}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="absolute top-0 left-0 w-full text-center py-3 bg-white/90 z-10">
            <span className="text-lg md:text-xl font-semibold text-[#6d4c1b]">
              Banquet Hall
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .card-shadow {
          box-shadow: 0 12px 32px 0 rgba(0,0,0,0.13), 0 2px 8px 0 rgba(0,0,0,0.10);
        }
        
        .banquet-image-container {
          width: 100%;
          max-width: 100%;
          height: 600px;
          position: relative;
          background-image: url('/assets/banquet not hover.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: background-image 0.3s ease-in-out;
        }
        
        .banquet-image-container:hover {
          background-image: url('/assets/banquet hover.png');
        }
        
        .banquet-image-container img {
          opacity: 0;
          width: 100%;
          height: 100%;
        }
        
        @media (max-width: 1024px) {
          .banquet-image-container {
            height: 500px;
          }
        }
        
        @media (max-width: 768px) {
          .banquet-image-container {
            height: 400px;
          }
        }
        
        @media (max-width: 640px) {
          .banquet-image-container {
            height: 350px;
          }
        }
        
        @media (max-width: 480px) {
          .banquet-image-container {
            height: 300px;
          }
        }
        
        @media (max-width: 360px) {
          .banquet-image-container {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default BanquetHallCarousel;