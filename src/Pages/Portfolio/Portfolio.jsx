    import img1 from "../../assets/poert1.png"
    import img2 from "../../assets/port2.png"
    import img3 from "../../assets/port3.png"




 import { useState } from "react";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleImageClick = (src) => {
    setImageSrc(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container pt-10">
        <h1 className="mt-20 text-4xl mb-2 uppercase text-center text-[#2c3e50] font-bold">
          Portfolio Component
        </h1>
        <div className="flex items-center justify-center pb-4 text-center">
          <span className="before:content-[''] before:block before:w-20 before:h-[4px] before:bg-[#2c3e50] before:mr-2"></span>
          <i className="fa-solid fa-star text-[#2c3e50]"></i>
          <span className="after:content-[''] after:block after:w-20 after:h-[4px] after:bg-[#2c3e50] after:ml-2"></span>
        </div>

        <div className="grid py-4 gap-6 md:grid-cols-3">
          {/* Image Card */}
          <div
            className="child cursor-pointer group z-10 relative"
            onClick={() => handleImageClick(img1)}
          >
            <img className="rounded-lg" src={img1} alt="Portfolio Item" />
            <div className="absolute rounded-lg inset-0 group-hover:opacity-100 flex duration-1000 opacity-0 items-center justify-center bg-[#1abc9cb4]">
              <i className="fa-solid fa-plus text-6xl text-white"></i>
            </div>
          </div>

          <div
            className="child cursor-pointer group z-10 relative"
            onClick={() => handleImageClick(img2)}
          >
            <img className="rounded-lg" src={img2} alt="Portfolio Item" />
            <div className="absolute rounded-lg inset-0 group-hover:opacity-100 flex duration-1000 opacity-0 items-center justify-center bg-[#1abc9cb4]">
              <i className="fa-solid fa-plus text-6xl text-white"></i>
            </div>
          </div>
          <div
            className="child cursor-pointer group z-10 relative"
            onClick={() => handleImageClick(img3)}
          >
            <img className="rounded-lg" src={img3} alt="Portfolio Item" />
            <div className="absolute rounded-lg inset-0 group-hover:opacity-100 flex duration-1000 opacity-0 items-center justify-center bg-[#1abc9cb4]">
              <i className="fa-solid fa-plus text-6xl text-white"></i>
            </div>
          </div>
          <div
            className="child cursor-pointer group z-10 relative"
            onClick={() => handleImageClick(img1)}
          >
            <img className="rounded-lg" src={img1} alt="Portfolio Item" />
            <div className="absolute rounded-lg inset-0 group-hover:opacity-100 flex duration-1000 opacity-0 items-center justify-center bg-[#1abc9cb4]">
              <i className="fa-solid fa-plus text-6xl text-white"></i>
            </div>
          </div>
          <div
            className="child cursor-pointer group z-10 relative"
            onClick={() => handleImageClick(img2)}
          >
            <img className="rounded-lg" src={img2} alt="Portfolio Item" />
            <div className="absolute rounded-lg inset-0 group-hover:opacity-100 flex duration-1000 opacity-0 items-center justify-center bg-[#1abc9cb4]">
              <i className="fa-solid fa-plus text-6xl text-white"></i>
            </div>
          </div>
          <div
            className="child cursor-pointer group z-10 relative"
            onClick={() => handleImageClick(img3)}
          >
            <img className="rounded-lg" src={img3} alt="Portfolio Item" />
            <div className="absolute rounded-lg inset-0 group-hover:opacity-100 flex duration-1000 opacity-0 items-center justify-center bg-[#1abc9cb4]">
              <i className="fa-solid fa-plus text-6xl text-white"></i>
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={imageSrc}
              alt="Modal View"
              className="max-w-full max-h-[70%] object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-5xl  px-3 py-1 rounded-full"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

