import img1 from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className=" bg-[#1abc9c] h-[88vh] flex items-center justify-center flex-col  text-center">
        <img src={img1} className="w-[20%] py-6 mx-auto " alt="" />

        <h1 className="text-3xl text-white uppercase font-extrabold pb-4">
          start Framework
        </h1>

        {/* <i className="fa-solid fa-star text-white after"></i> */}
        <div className="flex items-center justify-center pb-4 text-center">
          <span className="before:content-[''] before:block before:w-20 before:h-[4px] before:bg-white before:mr-2"></span>
          <i className="fa-solid fa-star text-white"></i>
          <span className="after:content-[''] after:block after:w-20 after:h-[4px] after:bg-white after:ml-2"></span>
        </div>
        <p className="text-white font-semibold">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
